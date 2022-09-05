export interface IComment {
  id: number,
  postId: number,
  name: string,
  email: string,
  body: string
}

export type CommentsResponseType = Array<IComment>;