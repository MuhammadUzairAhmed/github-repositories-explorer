import { Repository } from "./repository";

export interface User {
  id: number;
  login: string;
}

export interface UserState {
  users: User[];
  isLoading: boolean;
  userId: number;
  repositories: Repository[];
}
