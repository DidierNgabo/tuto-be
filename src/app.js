import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import tutoRoutes from './routes/tuto.routes';

const app = express();
const port = process.env.PORT || 4000;

const corsOption = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'successfully connected' });
});

app.use('/api/tutorials', tutoRoutes);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
