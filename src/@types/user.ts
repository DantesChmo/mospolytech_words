interface User {
  name: string;
  email: string;
  password: string;
}

export type LoginUserReqBody = User;