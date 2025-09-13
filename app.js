const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Exemple de route pour l'API
app.get('/api/data', (req, res) => {
  res.json({ message: 'Bienvenue dans lAPI de données ouvertes !' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});