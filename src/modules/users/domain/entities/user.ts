interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  public id?: string;

  public name: string;
  public email: string;
  public password: string;

  constructor({
    name,
    email,
    password
  }: IUser) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
