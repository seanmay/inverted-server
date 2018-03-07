import { DBUser, User } from "@domains/users/types";

export const userFromDB = ({
  id,
  givenNames: given,
  familyNames: family,
  alias,
  created
}: DBUser): User => ({
  id,
  name: { family, given },
  alias,
  created: new Date(created)
});
