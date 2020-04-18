import UrlService from "./UrlService";
import HttpService from "./HttpService";

class TodoService {
  async getTodoList() {
    const url = UrlService.getTodoUrl();
    try {
      const response = await HttpService.get(url);
      return response.data;
    } catch (error) {
      console.error("Not able to fetch the todos");
    }
  }
}

export default new TodoService();
