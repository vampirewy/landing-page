import { BaseService } from "./base.service";

export class HelloService extends BaseService {
  private static url = "/api/hello";

  static async getHello() {
    return await this.get<{ message: string }>(this.url);
  }
}
