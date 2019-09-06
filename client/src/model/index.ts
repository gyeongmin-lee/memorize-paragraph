import user, { UserModel } from "./user";

export interface StoreModel {
  user: UserModel;
}

const model: StoreModel = {
  user
};

export default model;
