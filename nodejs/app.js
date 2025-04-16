// app.js
const express = require('express');
const app = express();
const port = 3000;

let clickCount = 0;  // Переменная для отслеживания кликов

app.use(express.static('public'));  // Для обслуживания статики (например, HTML и CSS)

// Главная страница
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Click Counter: ${clickCount}</h1>
        <button onclick="window.location.href='/increment'">Click me!</button>
      </body>
    </html>
  `);
});

// Страница для увеличения счётчика
app.get('/increment', (req, res) => {
  clickCount++;  // Увеличиваем счётчик
  res.redirect('/');  // Перенаправляем обратно на главную
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

