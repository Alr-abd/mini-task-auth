import { User } from "./UserInterface";

export interface AuthContextType {
  user: User | null;
  login: (data: { phoneNumber: string; password: string }) => Promise<void>;
  isAuthenticated: boolean;
}