
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

// API route to get a random fact
app.get('/api/fact', async (req, res) => {
  try {
    const factsData = await fs.readFile(path.join(__dirname, 'facts.json'), 'utf-8');
    const facts = JSON.parse(factsData);
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    // Add a small delay to simulate network latency (can be removed in production)
    setTimeout(() => {
      res.json({ fact: randomFact });
    }, 200);
  } catch (error) {
    console.error('Error fetching facts:', error);
    res.status(500).json({ error: 'Failed to fetch a fact' });
  }
});

// API route to log tool usage
app.post('/api/log', (req, res) => {
  const { tool, timestamp } = req.body;
  
  // In a real app, you'd log this to a database or file
  console.log(`Tool used: ${tool} at ${timestamp}`);
  
  res.status(200).json({ success: true });
});

// For any other route, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
