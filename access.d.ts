import { Id, Nullish, _BaseProps } from "./_base";
import { EntityKinds, EntityResponse } from "./entity";

export type AccessValues = 1 | 2 | 3 | 4;
export interface AceProps extends _BaseProps {
  createdAt: number;
  entityKind: EntityKinds;
  entityId: string;
  0: string[];
  1: string[];
  2: string[];
  3: string[];
  4: string[];
}

export type AceLookup = (
  entityKind: EntityKinds,
  entityId: string,
  defaultAccess?: Record<AccessValues, string[]>
) => Promise<AceProps | Nullish>;

export interface AccessProps extends _BaseProps {
  userId: string;
  scopes: Scopes;
}

export type Scopes = Record<EntityKinds, AccessValues>;

export interface CheckAccessProps {
  access?: AccessProps;
  entity?: Id;
  reqLevel: AccessValues;
  response: EntityResponse<any>;
}

export type FindHighestAccess = (props: {
  access?: AccessProps;
  entity?: Id;
}) => Promise<AccessValues>;
