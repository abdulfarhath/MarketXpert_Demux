import express from "express";
import env from "dotenv";

env.config();
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`MarketXtreme listening on port ${port}`);
});
