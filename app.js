import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const POST = process.env.PORT || 3000;

// Routes
import indexRouter from './routes/index.js';

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${POST}`);
});
