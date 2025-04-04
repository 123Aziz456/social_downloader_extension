export interface IDownloadAllOptions {
  waitUntilCompleted: boolean
  delayTimeInSecond?: number
}

export interface IMedia {
  id: string
  downloadUrl: string
}

export interface IGetListResponse<T> {
  data: T[]
  pagination: {
    hasNextPage: boolean
    nextCursor: string
  }
}
