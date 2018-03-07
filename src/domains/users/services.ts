import { Transform } from "@core/types";
import { DBUser, User } from "./types";
import { ValidatorDict, isString } from "validator";
import { userFromDB } from "@domains/users/transforms";
import { isValidDBUser } from "@domains/users/validations";

export type LoadSingleUser = (
  loadDBUserByID: Transform<string, Promise<DBUser>>
) => (id: string) => Promise<User>;

export const LoadSingleUser: LoadSingleUser = loadDBUserByID => id =>
  loadDBUserByID(id)
    .catch(err => Promise.reject({}))
    .then(
      user =>
        isValidDBUser(user)
          ? Promise.resolve(userFromDB(user))
          : (console.log("BUH?!?", user), Promise.reject({}))
    );
