import { Router } from 'express';
import Project from '../models/Project';

const router = Router();

router.get('/', async (req, res) => {
  const projects = await Project.find().sort('-publishedAt');
  res.json(projects);
});
router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  return project ? res.json(project) : res.status(404).json({ error: 'Not found' });
});
router.post('/', async (req, res) => {
  // Admin-only, JWT/Firebase auth required
  const project = await Project.create(req.body);
  res.status(201).json(project);
});
router.put('/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return project ? res.json(project) : res.status(404).json({ error: 'Not found' });
});
router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});
export default router;