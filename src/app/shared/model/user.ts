import {CodePromo} from "./codePromo";

export class User {
  id!: number;
  firstName: string | undefined;
  lastName!: string;
  photo!: string;
  phoneNumber!: number;
  username!: string;
  password!: string;
  isActive!: boolean;
  role!: string;
  accountStatus!: AccountStatus;
  promoCode!: CodePromo[];
}

export enum AccountStatus {
  Online = 'Online',
  Away = 'Away',
  Offline = 'Offline'
}
