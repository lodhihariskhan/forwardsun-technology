import { NextResponse } from "next/server";
import { consultationOptions, customerTypes } from "@/lib/consultationOptions";

type LeadPayload = {
  fullName?: string;
  phone?: string;
  area?: string;
  customerType?: string;
  averageMonthlyUnits?: string;
  solutionRequired?: string;
  additionalNotes?: string;
};

const requiredFields: Array<keyof LeadPayload> = [
  "fullName",
  "phone",
  "area",
  "customerType",
  "averageMonthlyUnits",
  "solutionRequired",
];

const fieldLabels: Record<keyof LeadPayload, string> = {
  fullName: "Full Name",
  phone: "Mobile / WhatsApp Number",
  area: "Area (Lahore)",
  customerType: "Customer Type",
  averageMonthlyUnits: "Average Monthly Units",
  solutionRequired: "Solution Required",
  additionalNotes: "Additional Notes",
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

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;color:#647067;font-size:13px;font-weight:700;width:42%;">${escapeHtml(label)}</td>
      <td style="padding:12px 0;color:#102018;font-size:14px;font-weight:700;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
    </tr>`;
}

function buildEmailContent(payload: Required<LeadPayload>, submittedAt: string) {
  const additionalNotes = payload.additionalNotes || "No additional notes provided.";
  const escapedPhoneHref = escapeHtml(`tel:${payload.phone}`);
  const leadDetailsRows = [
    ["Full Name", payload.fullName],
    ["Mobile / WhatsApp Number", payload.phone],
    ["Area (Lahore)", payload.area],
  ]
    .map(([label, value]) => detailRow(label, value))
    .join("");
  const projectDetailsRows = [
    ["Customer Type", payload.customerType],
    ["Average Monthly Units", payload.averageMonthlyUnits],
    ["Solution Required", payload.solutionRequired],
    ["Submission date/time", submittedAt],
  ]
    .map(([label, value]) => detailRow(label, value))
    .join("");

  const text = [
    "ForwardSun Technology",
    "New Solar Assessment Request",
    "",
    "Lead/contact details",
    `Full Name: ${payload.fullName}`,
    `Mobile / WhatsApp Number: ${payload.phone}`,
    `Call customer: tel:${payload.phone}`,
    `Area (Lahore): ${payload.area}`,
    "",
    "Project details",
    `Customer Type: ${payload.customerType}`,
    `Average Monthly Units: ${payload.averageMonthlyUnits}`,
    `Solution Required: ${payload.solutionRequired}`,
    `Submission date/time: ${submittedAt}`,
    "",
    "Additional Notes",
    additionalNotes,
    "",
    "This message was generated automatically from the ForwardSun Technology website.",
  ].join("\n");

  const html = `
    <div style="margin:0;padding:0;background:#f6fbf4;font-family:Arial,sans-serif;color:#102018;line-height:1.5;">
      <div style="max-width:760px;margin:0 auto;padding:28px 16px;">
        <div style="overflow:hidden;border:1px solid #ddebd8;border-radius:18px;background:#ffffff;box-shadow:0 18px 50px rgba(6,78,47,0.10);">
          <div style="background:#064e2f;padding:24px 28px;color:#ffffff;">
            <p style="margin:0 0 8px;color:#f5b400;font-size:13px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">ForwardSun Technology</p>
            <h1 style="margin:0;font-size:26px;line-height:1.25;color:#ffffff;">New Solar Assessment Request</h1>
            <p style="margin:12px 0 0;color:rgba(255,255,255,0.78);font-size:14px;">A new lead was submitted from the ForwardSun Technology website.</p>
          </div>

          <div style="padding:24px 28px;">
            <div style="margin:0 0 18px;padding:16px;border:1px solid #ddebd8;border-radius:14px;background:#fff5d6;">
              <p style="margin:0;color:#064e2f;font-size:14px;font-weight:800;">Quick action</p>
              <a href="${escapedPhoneHref}" style="display:inline-block;margin-top:10px;padding:10px 14px;border-radius:999px;background:#064e2f;color:#ffffff;font-size:14px;font-weight:800;text-decoration:none;">Call customer: ${escapeHtml(payload.phone)}</a>
            </div>

            <div style="margin-top:18px;padding:18px;border:1px solid #ddebd8;border-radius:14px;background:#ffffff;">
              <h2 style="margin:0 0 8px;color:#064e2f;font-size:16px;">Lead/contact details</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tbody>${leadDetailsRows}</tbody>
              </table>
            </div>

            <div style="margin-top:18px;padding:18px;border:1px solid #ddebd8;border-radius:14px;background:#ffffff;">
              <h2 style="margin:0 0 8px;color:#064e2f;font-size:16px;">Project details</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tbody>${projectDetailsRows}</tbody>
              </table>
            </div>

            <div style="margin-top:18px;padding:18px;border:1px solid #ddebd8;border-radius:14px;background:#f6fbf4;">
              <h2 style="margin:0 0 10px;color:#064e2f;font-size:16px;">Additional Notes</h2>
              <p style="margin:0;color:#102018;font-size:14px;white-space:pre-line;">${escapeHtml(additionalNotes)}</p>
            </div>
          </div>

          <div style="border-top:1px solid #ddebd8;background:#f6fbf4;padding:16px 28px;">
            <p style="margin:0;color:#647067;font-size:12px;">This message was generated automatically from the ForwardSun Technology website.</p>
          </div>
        </div>
      </div>
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

  const averageMonthlyUnits = Number(valueFrom(body, "averageMonthlyUnits"));

  if (!Number.isFinite(averageMonthlyUnits) || averageMonthlyUnits <= 0) {
    return NextResponse.json(
      {
        error: "Average monthly units must be a positive number.",
        fields: [fieldLabels.averageMonthlyUnits],
      },
      { status: 400 },
    );
  }

  const customerType = valueFrom(body, "customerType");
  const solutionRequired = valueFrom(body, "solutionRequired");

  if (!customerTypes.includes(customerType)) {
    return NextResponse.json(
      {
        error: "Invalid customer type.",
        fields: [fieldLabels.customerType],
      },
      { status: 400 },
    );
  }

  if (!consultationOptions.includes(solutionRequired)) {
    return NextResponse.json(
      {
        error: "Invalid solution required.",
        fields: [fieldLabels.solutionRequired],
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
    area: valueFrom(body, "area"),
    customerType,
    averageMonthlyUnits: valueFrom(body, "averageMonthlyUnits"),
    solutionRequired,
    additionalNotes: valueFrom(body, "additionalNotes"),
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
      subject: `[ForwardSun] New Solar Assessment – ${lead.fullName} (${lead.area})`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send lead email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
