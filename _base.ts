export type Nullish = null | undefined

// Object with _id
export type Id = { _id: string }

// Part of Object with _id
export type PartialId<T> = Partial<T> & Id

export type BasicProps<T> = Partial<T> & _BaseProps
export type IndexCollection<T> = BasicProps<T>[] | Nullish

// Base Props
export interface _BaseProps extends Id {
  createdAt?: number
  createdBy?: string
  updatedAt?: number
  updatedBy?: string
}

// Status of response
export interface Status {
  code: number
  issues?: any
  message?: string
  relation?: string
}
