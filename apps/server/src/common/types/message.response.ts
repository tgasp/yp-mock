export class MessageResponse {
  message: string;

  error: boolean;

  success: boolean;

  errors: string[];

  constructor(message: string, error = false, errors?: string[]) {
    this.message = message;

    if (errors) this.errors = errors;

    if (error) {
      this.error = true;
    } else {
      this.success = true;
    }
  }
}
