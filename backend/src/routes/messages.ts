import { Router } from 'express';
import Message from '../models/Message';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 }); // 5 per 15 mins

const router = Router();

router.post('/', limiter, async (req, res) => {
  try {
    const schema = z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string()
    });
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    const saved = await Message.create(parsed.data);
    // TODO: send admin email via SendGrid if configured
    res.status(201).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

export default router;