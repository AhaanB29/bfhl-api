const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// POST endpoint
app.post('/api/bfhl', (req, res) => {
  const { data } = req.body;
  
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input" });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && item.length === 1);
  const highestAlphabet = alphabets.reduce((max, current) => 
    current.toLowerCase() > max.toLowerCase() ? current : max
  , 'a');

  const response = {
    is_success: true,
    user_id: "AhaanB29",
    email: "ahaan.banerjee2021@vitstudent.ac.in",
    roll_number: "21BAI1747",
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: [highestAlphabet]
  };

  res.json(response);
});

// GET endpoint
app.get('/api/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

module.exports = app;