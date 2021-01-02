import Comment from '../database/models/comment.model'
import User from '../database/models/user.model'

export interface IArticle {
    slug: string
    title: string
    description: string
    body: string
    tagList?: [string]
    createdAt: Date
    updatedAt: Date
    favorited: boolean
    favoritesCount: number
    author: User
    comments: Comment[]
}

export interface IQuery {
    tagList: { $in: any[] }
    author: string
    _id: { $in: any[] }
}
