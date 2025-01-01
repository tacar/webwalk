import type {
  User,
  AddUserRequest,
  AddUserResponse,
  ListUserResponse,
  TodosResponse,
  AddTodoRequest,
  AddTodoResponse,
  UpdateTodoRequest,
  UpdateTodoResponse,
  DeleteTodoResponse,
  ToggleTodoResponse,
  DeleteUserResponse,
  UpdateLastLoginResponse,
} from "./types";

export class APIWalkClient {
  private baseUrl: string;
  private token: string;

  constructor(
    baseUrl: string = import.meta.env.VITE_APIURL,
    token: string = ""
  ) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    };

    console.log(`API Request: ${endpoint}`, {
      ...options,
      headers,
    });

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();
    console.log(`API Response: ${endpoint}`, data);

    if (!response.ok) {
      console.error(`API Error: ${endpoint}`, {
        status: response.status,
        statusText: response.statusText,
        data,
      });
      if (response.status === 404) {
        throw new Error("404");
      }
      throw new Error(
        data.message || `${response.status} ${response.statusText}`
      );
    }

    return data;
  }

  setToken(token: string) {
    this.token = token;
  }

  // User endpoints
  async listUsers(): Promise<ListUserResponse> {
    return this.fetchWithAuth("/api/listuser");
  }

  async addUser(data: AddUserRequest): Promise<AddUserResponse> {
    return this.fetchWithAuth("/api/adduser", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async searchUser(email: string): Promise<User> {
    return this.fetchWithAuth("/api/users/search", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }

  async deleteUser(email: string): Promise<DeleteUserResponse> {
    return this.fetchWithAuth(`/api/users/${encodeURIComponent(email)}`, {
      method: "DELETE",
    });
  }

  async updateLastLogin(email: string): Promise<UpdateLastLoginResponse> {
    return this.fetchWithAuth("/api/users/lastlogin", {
      method: "PUT",
      body: JSON.stringify({ email }),
    });
  }

  // Todo endpoints
  async listTodos(): Promise<TodosResponse> {
    return this.fetchWithAuth("/api/todos");
  }

  async addTodo(data: AddTodoRequest): Promise<AddTodoResponse> {
    return this.fetchWithAuth("/api/todos", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async updateTodo(
    id: string,
    data: UpdateTodoRequest
  ): Promise<UpdateTodoResponse> {
    return this.fetchWithAuth(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async deleteTodo(id: string): Promise<DeleteTodoResponse> {
    return this.fetchWithAuth(`/api/todos/${id}`, {
      method: "DELETE",
    });
  }

  async toggleTodoComplete(id: string): Promise<ToggleTodoResponse> {
    return this.fetchWithAuth(`/api/todos/${id}/complete`, {
      method: "PATCH",
    });
  }
}
