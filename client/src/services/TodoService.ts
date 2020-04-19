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

  async markTodoComplete(todo) {
    const url = UrlService.markTodoCompleteUrl(todo.id);
    try {
      const response = await HttpService.get(url);
      return response.data;
    } catch (error) {
      console.error("Not able to update the todo");
    }
  }
}

export default new TodoService();
