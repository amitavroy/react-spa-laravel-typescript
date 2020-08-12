import { Subject } from "rxjs";
import UrlService from "./UrlService";
import HttpService from "./HttpService";

const subject = new Subject();

class TodoService {
  getObservable() {
    return subject;
  }

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

  async changeTodoOrder(order) {
    const url = UrlService.changeTodoOrderUrl();
    try {
      const response = await HttpService.post(url, { order });
      return response.data;
    } catch (error) {
      console.error("Not able to change order of the todos");
    }
  }

  async saveNewTodo(postData) {
    const url = UrlService.saveTodoUrl();
    try {
      const response = await HttpService.post(url, postData);
      return response.data;
    } catch (error) {
      console.error("Not able to change order of the todos");
    }
  }

  async removeTodo(postData) {
    const url = UrlService.removeTodoUrl();
    try {
      const response = await HttpService.post(url, postData);
      return response.data;
    } catch (error) {
      console.error("Not able to change order of the todos");
    }
  }
}

export default new TodoService();
