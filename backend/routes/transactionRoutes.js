import express from 'express';
import {
  getTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction
} from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';
import { analyzeTransactions } from '../controllers/transactionController.js';

const router = express.Router();

router.use(protect);

router.get('/', getTransactions);
router.post('/', createTransaction);
router.get('/:id', getTransactionById);
router.put('/:id', updateTransaction);
// router.delete('/:id', deleteTransaction);
router.post('/analyze', analyzeTransactions);

export default router;