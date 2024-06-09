export interface IUserLoginRequest {
    email:string
    password:string
  }
  
  export interface IUserLoginResponse {
    accessToken: string;
    tokenType: string;
    userId: string;
    expiresIn: number;
  }
  
  export interface IForgetPassword {
    token: string;
    confirmPasssword: string;
    newPassword: string;
    email: string;
  }