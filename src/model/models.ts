export interface Task {
  id: number;
  done: boolean;
  title: string;
  content: string;
}
export interface UserInfo {
  id: number;
  username: string;
  nickname: string;
  email: string;
  phone: string;
  createTime: string;
  status: 'normal' | 'blocked' | undefined;
}
export interface User {
  username: string;
  password: string;
}
