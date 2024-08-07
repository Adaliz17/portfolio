import { axiosApi } from "../../helpers/api_helpers";

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export class EmailRepository {
  endpoint = "/email";

  async sendEmail(params: SendEmailParams) {
    const response = await axiosApi.post(`${this.endpoint}/send`, params);
    return response.status;
  }
}
