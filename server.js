const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (_, res) => {
  const test = [
    { id: '1', firstName: 'Milan', lastName: 'Radinovic' },
    { id: '2', firstName: 'John', lastName: 'Doe' },
    { id: '3', firstName: 'Steve', lastName: 'Smith' },
  ];
  res.json(test);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
