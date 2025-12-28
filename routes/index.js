import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index'); // views/index.ejs
});

export default router;
