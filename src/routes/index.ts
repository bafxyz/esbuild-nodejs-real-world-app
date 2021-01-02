import { Router } from 'express'
import { ArticlesRoutes } from './articles-routes'
import { ProfilesRoutes } from './profiles-routes'
import { TagRoutes } from './tag-routes'
import { UsersRoutes } from './users-routes'

const router: Router = Router()

router.use('/tags', TagRoutes)
router.use('/', UsersRoutes)
router.use('/profiles', ProfilesRoutes)
router.use('/articles', ArticlesRoutes)

export const MainRouter: Router = router
