import { Router } from 'express'; // const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Pessoal!'});
})

export default routes;
