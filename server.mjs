import express from 'express';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const port = 3000;

const app = express();

app.get('/amount', async (req, res) => {
  const response = await fetch(
    'https://www.helloasso.com/associations/3-hit-combo/collectes/stunfest-don-t-starve'
  );
  const body = await response.text();

  const $ = cheerio.load(body);

  const amount = $('.NumberPart--Highlight').first().text().trim();

  res.send(amount);
});

app.get('/', (req, res) => res.sendFile(__dirname + 'index.html'));
app.get('/index.js', (req, res) => res.sendFile(__dirname + 'index.js'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
