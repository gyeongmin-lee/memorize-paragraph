import { Paragraph } from "../types/userTypes";

export interface UserModel {
  loading: boolean;
  errors: {};
  userId: string | null;
  userName: string | null;
  paragraphs: Paragraph[] | null;
}

const user: UserModel = {
  loading: false,
  errors: {},
  userId: null,
  userName: null,
  paragraphs: null
};

export default user;
