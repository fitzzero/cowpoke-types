import {
  Id,
  IndexCollection,
  Nullish,
  PartialId,
  Status,
  _BaseProps,
} from "./_base";
import { AccessLevels, AccessProps } from "./access";

// Entity Kinds
export type EntityKinds =
  | "user"
  | "user.access"
  | "user.accounts"
  | "user.session"
  | "ace"
  | "oanda.account"
  | "oanda.instrument"
  | "oanda.order"
  | "oanda.position"
  | "oanda.pricing"
  | "oanda.trade"
  | "oanda.transaction";

// Callback Fn
export type Callback<T> = (values: EntityResponse<T | Nullish>) => void;

// Response from Entity Requests
export type EntityResponse<T> = {
  status: Status;
  values: T | Nullish;
  total: number;
};

// Response from Delete Requests
export interface DeleteResult {
  acknowledged: boolean;
  deletedCount: number;
}

// Index Options
export interface IndexOptions {
  page?: number;
  sort?: any;
}

// Props when making requests
export type RequestProps<T> = {
  access?: AccessProps;
  index?: IndexOptions;
  readFull?: boolean;
  values: T;
};

// Public Create
export type CreateRequestProps<T> = RequestProps<Partial<T>>;
export type CreateRequestCallback<T> = Callback<T & _BaseProps>;
export type CreateRequest<T> = (
  props: CreateRequestProps<T>,
  callback?: CreateRequestCallback<T>
) => void;
export type CreateRequestClient<T> = (
  values: Partial<T>,
  callback?: CreateRequestCallback<T>
) => void;

// Public Delete
export type DeleteRequestProps = RequestProps<Id>;
export type DeleteRequestCallback = Callback<DeleteResult>;
export type DeleteRequest = (
  props: DeleteRequestProps,
  callback?: DeleteRequestCallback
) => void;
export type DeleteRequestClient = (callback?: DeleteRequestCallback) => void;

// Public Index
export type IndexRequestProps<T> = RequestProps<Partial<T>>;
export type IndexRequestCallback<T> = Callback<IndexCollection<T> | Nullish>;
export type IndexRequest<T> = (
  props: IndexRequestProps<T>,
  callback?: IndexRequestCallback<T>
) => void;
export type IndexRequestClient<T> = (
  v?: Partial<T>,
  callback?: IndexRequestCallback<T>
) => void;

// Public Read
export type ReadRequestProps<T> = RequestProps<Partial<T>>;
export type ReadRequestCallback<T> = Callback<T>;
export type ReadRequest<T> = (
  props: ReadRequestProps<T>,
  callback?: ReadRequestCallback<T>
) => void;
export type ReadRequestClient<T> = (callback?: ReadRequestCallback<T>) => void;

// Public Update
export type UpdateRequestProps<T> = RequestProps<PartialId<T>>;
export type UpdateRequestCallback<T> = Callback<T>;
export type UpdateRequest<T> = (
  props: UpdateRequestProps<T>,
  callback?: UpdateRequestCallback<T>
) => void;
export type UpdateRequestClient<T> = (
  values: PartialId<T>,
  callback?: UpdateRequestCallback<T>
) => void;

// Custom Method
export type CustomEventCollection<T> = {
  name: string;
  access: AccessLevels;
  handler: CustomRequest<T, any>;
}[];
export type CustomRequest<T, R> = (
  props: RequestProps<T>,
  callback: Callback<R>
) => void;
export type CustomRequestClient<T, R> = (
  values?: T,
  callback?: Callback<R>
) => void;
