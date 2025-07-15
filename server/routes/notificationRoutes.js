import express from 'express';
import { 
  getNotifications,
  markNotificationAsRead
} from '../controllers/notificationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getNotifications);
router.patch('/:id/read', protect, markNotificationAsRead);

export default router;