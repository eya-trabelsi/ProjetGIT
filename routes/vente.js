import express from 'express';

import { Produit } from '../controllers/vente.js';
  
const router = express.Router();

router
  .route('/:idUser/:idGame')
  .get(Produit);
  
export default router;