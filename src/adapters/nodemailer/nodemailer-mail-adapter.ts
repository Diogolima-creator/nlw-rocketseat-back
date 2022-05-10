import { MailAdapter , SendMailData} from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "696829ce240e58",
    pass: "449ee17585dd73"
  }
})

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'Diogo Lima <dbznetudo@gmail.com>',
      subject,
      html: body
    })
  };
}