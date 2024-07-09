import { _BaseProps } from './_base'

export interface UserBasic extends _BaseProps {
  name: string
  image: string
}

export interface UserProps extends UserBasic {
  accessId?: string
  email: string
  emailVerified: boolean | null
}

export interface SessionProps extends _BaseProps {
  expires: Date
  sessionToken: string
  userId: string
}
