import {NewController} from '../controller/NewController';
import { Router } from 'express';
import { checkJwt } from "../middlewares/jwt";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get('/', NewController.getAll);
router.get('/:id', NewController.getById);
router.post('/', [/*checkJwt, checkRole(['admin'])*/], NewController.createNew);
router.put('/:id', [/*checkJwt, checkRole(['admin'])*/], NewController.updateNew);
router.patch('/:id', [/*checkJwt, checkRole(['admin'])*/], NewController.updateNew);
router.delete('/:id', [/*checkJwt, checkRole(['admin'])*/], NewController.deleteNew);

export default router;
