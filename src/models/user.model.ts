export interface UserModel {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type UsersFilterModel = {
  name?: string;
};
