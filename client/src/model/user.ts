import { Paragraph } from "../types/userTypes";

export interface UserModel {
  loading: boolean;
  errors: {};
  userId: string | null;
  userName: string | null;
  paragraphs: Paragraph[] | [];
}

const user: UserModel = {
  loading: false,
  errors: {},
  userId: null,
  userName: null,
  paragraphs: []
};

export default user;
