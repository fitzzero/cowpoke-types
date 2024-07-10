import { Id, Nullish, _BaseProps } from "./_base";
import { EntityResponse } from "./entity";
export interface AceProps extends _BaseProps {
  createdAt: number;
  entityKind: string;
  entityId: string;
  0: string[];
  1: string[];
  2: string[];
  3: string[];
  4: string[];
}

export type AceLookup = (
  entityKind: string,
  entityId: string,
  defaultAccess?: Record<number, string[]>
) => Promise<AceProps | Nullish>;

export interface AccessProps extends _BaseProps {
  userId: string;
  scopes: Scopes;
}

export type Scopes = Record<string, number>;

export interface CheckAccessProps {
  access?: AccessProps;
  entity?: Id;
  reqLevel: number;
  response: EntityResponse<any>;
}

export type FindHighestAccess = (props: {
  access?: AccessProps;
  entity?: Id;
}) => Promise<number>;
