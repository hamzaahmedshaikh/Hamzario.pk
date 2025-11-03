import { Router } from 'express';
import Testimonial from '../models/Testimonial';

const router = Router();

router.get('/', async (_req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});
router.post('/', async (req, res) => {
  // Admin-only, JWT/Firebase auth required
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json(testimonial);
});
export default router;