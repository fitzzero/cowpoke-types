import { _BaseProps } from './_base'

export interface UserAccountProps extends _BaseProps {
  provider: string
  type: string
  providerAccountId: string
  token_type: string
  access_token: string
  expires_at: number
  refresh_token: string
  scope: string
  userId: string
}
