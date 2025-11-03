import { Router } from 'express';
const router = Router();

router.get('/', async (_req, res) => {
  res.set('Content-Type', 'application/pdf');
  res.status(200).send('PDF generation not implemented in scaffold.');
});

export default router;