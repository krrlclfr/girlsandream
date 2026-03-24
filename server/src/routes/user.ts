import { Router } from 'express';
import type { Response } from 'express';
import { authMiddleware, AuthRequest } from '../middlewares/auth.middleware';

const router = Router();

router.get('/profile', authMiddleware, (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.json({
    message: 'Protected profile',
    user: req.user, // TypeScript now knows this is JwtPayload
  });
});

export default router;
