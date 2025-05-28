import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()
  try {
    await resend.emails.send({
      from: 'Mert Krkz Websitesi <onboarding@resend.dev>',
      to: 'krkz.mert@gmail.com',
      subject: `[Form] ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>
      `,
    })
    return NextResponse.json({ status: 'ok' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Mail error' }, { status: 500 })
  }
}
