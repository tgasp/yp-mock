import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private resend: Resend;

  constructor(private configService: ConfigService) {
    const resendApiKey = this.configService.get<string>('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not defined in environment variables');
    }
    this.resend = new Resend(resendApiKey);
  }

  async sendEmail({
    to,
    subject,
    html,
    from = 'no-reply@yourdomain.com', // Update this with your verified domain
  }: {
    to: string;
    subject: string;
    html: string;
    from?: string;
  }) {
    try {
      const data = await this.resend.emails.send({
        from,
        to,
        subject,
        html,
      });
      return data;
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}