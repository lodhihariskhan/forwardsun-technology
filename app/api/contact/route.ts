import { NextResponse } from "next/server";

type LeadPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  area?: string;
  customerType?: string;
  billRange?: string;
  service?: string;
  message?: string;
};

const requiredFields: Array<keyof LeadPayload> = [
  "fullName",
  "phone",
  "area",
  "customerType",
  "billRange",
  "service",
];

const fieldLabels: Record<keyof LeadPayload, string> = {
  fullName: "Full name",
  phone: "Phone number",
  email: "Email",
  area: "City / Area",
  customerType: "Customer type",
  billRange: "Monthly electricity bill range",
  service: "Interested service",
  message: "Message",
};

function valueFrom(payload: LeadPayload, field: keyof LeadPayload) {
  return typeof payload[field] === "string" ? payload[field].trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailContent(payload: Required<LeadPayload>, submittedAt: string) {
  const rows = [
    ["Full name", payload.fullName],
    ["Phone number", payload.phone],
    ["Email", payload.email || "Not provided"],
    ["City / Area", payload.area],
    ["Customer type", payload.customerType],
    ["Monthly electricity bill range", payload.billRange],
    ["Interested service", payload.service],
    ["Message", payload.message || "Not provided"],
    ["Submission date/time", submittedAt],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:700;color:#17201d;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;color:#374151;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#17201d;">
      <h1 style="margin:0 0 16px;font-size:22px;color:#0b7a4b;">New Free Solar Assessment Request</h1>
      <p style="margin:0 0 20px;color:#4b5563;">A new lead was submitted from the ForwardSun Technology website.</p>
      <table style="border-collapse:collapse;width:100%;max-width:760px;background:#ffffff;">
        <tbody>${htmlRows}</tbody>
      </table>
    </div>`;

  return { text, html };
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missingFields = requiredFields.filter((field) => !valueFrom(body, field));

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        error: "Missing required fields.",
        fields: missingFields.map((field) => fieldLabels[field]),
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.LEAD_RECEIVER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !receiverEmail || !fromEmail) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const submittedAt = new Intl.DateTimeFormat("en-PK", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Karachi",
  }).format(new Date());

  const lead: Required<LeadPayload> = {
    fullName: valueFrom(body, "fullName"),
    phone: valueFrom(body, "phone"),
    email: valueFrom(body, "email"),
    area: valueFrom(body, "area"),
    customerType: valueFrom(body, "customerType"),
    billRange: valueFrom(body, "billRange"),
    service: valueFrom(body, "service"),
    message: valueFrom(body, "message"),
  };

  const { text, html } = buildEmailContent(lead, submittedAt);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [receiverEmail],
      subject: `New solar assessment request from ${lead.fullName}`,
      text,
      html,
      reply_to: lead.email || undefined,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send lead email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
