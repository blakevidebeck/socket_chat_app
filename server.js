const path = require('path');
const express = require('express');

const app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
