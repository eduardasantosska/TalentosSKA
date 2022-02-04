import app from 'express';
const router = app.Router();

router.get('/', () => { console.log('Minha primeira rota!') });

export default router
