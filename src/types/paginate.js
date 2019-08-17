// @flow
export type Paginate = {
  populate?: any[],
  limit: number,
  page: number,
  sort: { [field: string]: 1 | -1 },
}
