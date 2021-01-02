import Article from '../database/models/article.model'
import User from '../database/models/user.model'

export interface IComment {
    body: string
    author: User
    article: Article
}
