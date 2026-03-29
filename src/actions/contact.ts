"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(data: {
  name:     string;
  phone:    string;
  email:    string;
  grade:    string;
  message?: string;
}) {
  await resend.emails.send({
    from: "READ PLUS Website <noreply@readplus.ae>",
    to:   "info@readplus.ae",
    replyTo: data.email,
    subject: `New Enquiry — ${data.name} (${data.grade})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0E7E80;">New Enquiry from READ PLUS Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td>
            <td style="padding: 8px 0; color: #333;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td>
            <td style="padding: 8px 0; color: #333;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
            <td style="padding: 8px 0; color: #333;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Grade</strong></td>
            <td style="padding: 8px 0; color: #333;">${data.grade}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Message</strong></td>
            <td style="padding: 8px 0; color: #333;">${data.message ?? "—"}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">
          Sent via readplus.ae contact form
        </p>
      </div>
    `,
  });
}
