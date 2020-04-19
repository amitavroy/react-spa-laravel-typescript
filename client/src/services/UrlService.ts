let apiDomain = "";
if (process.env.NODE_ENV === "production") {
  apiDomain = "https://life-api.amitavroy.com/";
} else {
  apiDomain = "http://localhost:8000/";
}

class UrlService {
  static loginUrl() {
    return apiDomain + "api/login";
  }
  static currentUserProfileUrl() {
    return apiDomain + "api/user";
  }
  static saveUserProfileUrl() {
    return apiDomain + "api/user";
  }
  static getCurrentUserAcitiviesUrl() {
    return apiDomain + "api/activities";
  }
  static getTodoUrl() {
    return apiDomain + "api/todos";
  }
  static markTodoCompleteUrl(id) {
    return apiDomain + "api/todo/complete/" + id;
  }
  static changeTodoOrderUrl() {
    return apiDomain + "api/todo/reorder";
  }
}

export default UrlService;
