import express, { RequestHandler } from "express";

import { GetUser } from "@domains/users/get-user";
import { LoadSingleUser } from "@domains/users/services";

const loadMockUser = (id: string) =>
  Promise.resolve({
    id,
    name: { family: "Ross", given: "Bob" },
    alias: "HappyLittleTrees",
    created: new Date()
  });

const loadMockDBUser = (id: string) =>
  Promise.resolve({
    id,
    familyNames: "Ross",
    givenNames: "Bob",
    alias: "HappyLittleTrees",
    created: "2018-03-07T04:00:00.000Z"
  });


export const GetUserController = (): RequestHandler => {
  const getUser = GetUser(
    LoadSingleUser(loadMockDBUser),
    user => ({ ...user, created: user.created.toISOString() })
  );

  return (req, res, next) => getUser(req, res, next);
};
