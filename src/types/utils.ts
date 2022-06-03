/**
 * @summary Sets specific properties on a type to optional.
 */
export type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>
