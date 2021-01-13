import express from 'express';
import tutoController from '../controllers/tuto.controller';

const router = express.Router();

router.get('/', tutoController.getAll);
router.post('/', tutoController.create);
router.put('/:id', tutoController.update);
router.get('/:id', tutoController.getOne);
router.delete('/:id', tutoController.delete);

export default router;
