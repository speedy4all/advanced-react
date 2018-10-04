import express from 'express';
import config from './config.js';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const initialContent = await serverRender();
    res.render('index', { ...initialContent });
  }
  catch (ex) { 
    res.send(`Error fething data ${ex.message}`);
  }
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}....`);
});
