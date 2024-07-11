import { Id, Nullish, _BaseProps } from './_base'
import { AccessLevels } from './common'
import { EntityResponse } from './entity'
export interface AceProps extends _BaseProps {
  createdAt: number
  entityKind: string
  entityId: string
  0: string[]
  1: string[]
  2: string[]
  3: string[]
  4: string[]
}

export type AceLookup = (
  entityKind: string,
  entityId: string,
  defaultAccess?: Record<AccessLevels, string[]>
) => Promise<AceProps | Nullish>

export interface AccessProps extends _BaseProps {
  userId: string
  scopes: Scopes
}

export type Scopes = Record<string, AccessLevels>

export interface CheckAccessProps {
  access?: AccessProps
  entity?: Id
  reqLevel: AccessLevels
  response: EntityResponse<any>
}

export type FindHighestAccess = (props: {
  access?: AccessProps
  entity?: Id
}) => Promise<AccessLevels>
