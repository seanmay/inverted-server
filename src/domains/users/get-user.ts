import express from "express";
import { Transform } from "@core/types";
import { User, UserOutput } from "./types";

import { ValidatorDict, isString } from "validator";

export type GetUser = (
  loadUser: Transform<string, Promise<User>>,
  toOutput: Transform<User, UserOutput>
) => (
  req: Pick<express.Request, "params">,
  res: Pick<express.Response, "json">,
  next: express.NextFunction
) => void;

const isValidInput = ValidatorDict({ id: isString });

export const GetUser: GetUser = (loadUser, toOutput) => (
  req,
  res,
  next
) =>
  Promise.resolve(req.params)
    .then(
      input =>
        isValidInput(input)
          ? loadUser(input.id).catch(err =>
              Promise.reject({ type: "UserLoadError", kind: "DomainError" })
            )
          : Promise.reject({ type: "UserInputError", kind: "RequestError" })
    )
    .then(toOutput)
    .then(user => res.json(user))
    .catch(next);
