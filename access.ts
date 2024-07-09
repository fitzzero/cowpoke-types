import { Id, Nullish, _BaseProps } from "./_base";
import { EntityKinds, EntityResponse } from "./entity";

export enum AccessLevels {
  None = 0,
  ReadBasic = 1,
  ReadFull = 2,
  CreateEntity = 3,
  ModerateEntity = 4,
}

export interface AceProps extends _BaseProps {
  createdAt: number;
  entityKind: EntityKinds;
  entityId: string;
  [AccessLevels.None]: string[];
  [AccessLevels.ReadBasic]: string[];
  [AccessLevels.ReadFull]: string[];
  [AccessLevels.CreateEntity]: string[];
  [AccessLevels.ModerateEntity]: string[];
}

export type AceLookup = (
  entityKind: EntityKinds,
  entityId: string,
  defaultAccess?: Record<AccessLevels, string[]>
) => Promise<AceProps | Nullish>;

export interface AccessProps extends _BaseProps {
  userId: string;
  scopes: Scopes;
}

export type Scopes = Record<EntityKinds, AccessLevels>;

export interface CheckAccessProps {
  access?: AccessProps;
  entity?: Id;
  reqLevel: AccessLevels;
  response: EntityResponse<any>;
}

export type FindHighestAccess = (props: {
  access?: AccessProps;
  entity?: Id;
}) => Promise<AccessLevels>;
