import { Router, Request, Response } from 'express'
import authRoutes from './auth'
import productRoutes from './product/product'

const router = Router()

router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK' })
})

router.get('/hello', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from TypeScript Node API 👋' })
})

router.use('/auth', authRoutes)
router.use('/product', productRoutes)

export default router
