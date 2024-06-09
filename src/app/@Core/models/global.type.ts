export interface IResponse<T> {
    message: null | string;
    error: any;
    data: T;
    isSuccess: boolean;
    title: string;
    status?: number;
    errors?: Errors;
  }
  
  export interface Errors {
    $: string[];
    model: string[];
  }
  
  export interface InputIcon {
    icon: string;
    color?: string;
    size?: number;
  }