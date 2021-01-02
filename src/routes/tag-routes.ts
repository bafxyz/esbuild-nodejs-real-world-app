import { NextFunction, Request, Response, Router } from 'express'
import { Article } from '../database/models/article.model'

const router: Router = Router()

// FIXME: Rewrite to pull from Articles...
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    Article.find()
        .distinct('tagList')
        .then((tagsArray: [string]) => {
            return res.json({ tags: tagsArray })
        })
        .catch(next)
})

export const TagRoutes: Router = router
