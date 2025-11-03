import { Router } from 'express';
import authRoutes from './auth';
import projectRoutes from './projects';
import clientRoutes from './clients';
import testimonialRoutes from './testimonials';
import messageRoutes from './messages';
import pdfResumeRoute from './pdfResume';

const router = Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/clients', clientRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/messages', messageRoutes);
router.use('/resume/pdf', pdfResumeRoute);

export default router;