export type LoginRequestParams = {
  userEmail: string;
  userPassword: string;
};

export type CheckEmailParams = {
  userEmail: string;
};

export type SignUpRequestParams = LoginRequestParams;
