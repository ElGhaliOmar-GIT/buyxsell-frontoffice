import { Blog } from "./blog";
import { Shop } from "./shop";
import {AccountStatus, User} from "./user";

export class Supplier extends User{
    shops!: Shop[];
    blogs!: Blog[];
    requests!: Request[];
  }
