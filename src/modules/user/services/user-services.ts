import { User } from "../utils/types";

const users: User[] = [];

export function getUser(id: string): User | undefined {
  return users.find((user) => user.id === id);
}
