export interface User {
  id: number;
  name: string;
  email: string;
  last_login_at: string | null;
}

export interface Todo {
  id: number;
  user_id: string;
  title: string;
  description: string | null;
  is_completed: number;
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface AddUserRequest {
  email: string;
  password: string;
  name: string;
}

export interface AddUserResponse {
  message: string;
  status: string;
}

export interface ListUserResponse {
  success: boolean;
  data: User[];
}

export interface TodosResponse {
  success: boolean;
  data: Todo[];
}

export interface AddTodoRequest {
  title: string;
  description?: string;
  priority?: number;
}

export interface AddTodoResponse {
  success: boolean;
  data: Todo;
}

export interface UpdateTodoRequest {
  title: string;
  description?: string;
  priority?: number;
}

export interface UpdateTodoResponse {
  success: boolean;
  message: string;
}

export interface DeleteTodoResponse {
  success: boolean;
  message: string;
}

export interface ToggleTodoResponse {
  success: boolean;
  data: {
    is_completed: number;
  };
}

export interface DeleteUserResponse {
  message: string;
  data: {
    email: string;
    deleted_at: string;
  };
}

export interface UpdateLastLoginResponse {
  message: string;
}
