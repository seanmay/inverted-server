export interface User {
  id: string;
  name: { family: string; given: string; };
  alias: string;
  created: Date;
}

export interface UserOutput {
  id: string;
  name: { family: string; given: string };
  alias: string;
  created: string;
}

export interface DBUser {
  id: string;
  givenNames: string;
  familyNames: string;
  alias: string;
  created: string;
}