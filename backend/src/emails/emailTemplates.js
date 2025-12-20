export function createWelcomeEmailTemplate(name, clientURL) {
    const safeName = String(name)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  
  <body style="margin:0;padding:0;background-color:#f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
  
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#333;">
            
            <!-- Header -->
            <tr>
              <td align="center" style="background-color:#5B86E5;background-image:linear-gradient(to right,#36D1DC,#5B86E5);padding:30px;">
                <img 
                  src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
                  alt="Messenger Logo"
                  width="80"
                  height="80"
                  role="presentation"
                  style="display:block;border-radius:50%;background:#ffffff;padding:10px;margin-bottom:20px;"
                />
                <h1 style="margin:0;font-size:28px;color:#ffffff;font-weight:500;">
                  Welcome to Messenger!
                </h1>
              </td>
            </tr>
  
            <!-- Body -->
            <tr>
              <td style="padding:35px;">
                <p style="font-size:18px;color:#5B86E5;margin-top:0;">
                  <strong>Hello ${safeName},</strong>
                </p>
  
                <p>
                  We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time.
                </p>
  
                <div style="background-color:#f8f9fa;padding:25px;border-radius:10px;margin:25px 0;border-left:4px solid #36D1DC;">
                  <p style="margin-top:0;"><strong>Get started in just a few steps:</strong></p>
                  <ul style="padding-left:20px;margin:0;">
                    <li>Set up your profile picture</li>
                    <li>Find and add your contacts</li>
                    <li>Start a conversation</li>
                    <li>Share photos, videos, and more</li>
                  </ul>
                </div>
  
                <div style="text-align:center;margin:30px 0;">
                  <a
                    href="${clientURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="display:inline-block;background-color:#5B86E5;background-image:linear-gradient(to right,#36D1DC,#5B86E5);color:#ffffff;text-decoration:none;padding:12px 30px;border-radius:50px;font-weight:500;"
                  >
                    Open Messenger
                  </a>
                </div>
  
                <p>If you need any help, we’re always here to assist you.</p>
                <p>Happy messaging!</p>
  
                <p style="margin-bottom:0;">
                  Best regards,<br />
                  <strong>The Messenger Team</strong>
                </p>
              </td>
            </tr>
  
            <!-- Footer -->
            <tr>
              <td align="center" style="padding:20px;font-size:12px;color:#999;">
                <p style="margin:0;">© 2025 Messenger. All rights reserved.</p>
                <p style="margin:10px 0 0;">
                  <a href="#" style="color:#5B86E5;text-decoration:none;margin:0 8px;">Privacy Policy</a>
                  |
                  <a href="#" style="color:#5B86E5;text-decoration:none;margin:0 8px;">Terms</a>
                  |
                  <a href="#" style="color:#5B86E5;text-decoration:none;margin:0 8px;">Contact</a>
                </p>
              </td>
            </tr>
  
          </table>
  
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
  }
  