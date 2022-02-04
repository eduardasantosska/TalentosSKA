import app from 'express';
const router = app.Router();

router.get('/', (req, res) => {
    return res.send('Minha primeira rota!');
});

export default router
