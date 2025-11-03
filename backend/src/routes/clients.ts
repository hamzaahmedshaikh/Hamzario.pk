import { Router } from 'express';
import Client from '../models/Client';

const router = Router();

router.get('/', async (_req, res) => {
  const clients = await Client.find();
  res.json(clients);
});
router.post('/', async (req, res) => {
  // Admin-only, JWT/Firebase auth required
  const client = await Client.create(req.body);
  res.status(201).json(client);
});
router.put('/:id', async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return client ? res.json(client) : res.status(404).json({ error: 'Not found' });
});
export default router;