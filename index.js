const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const model = require('./models/index');

// Public Folder
app.use(express.static('public'));

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));

// View Engine - EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const landing = require('./routes/landing');
const pages = require('./routes/pages');
const workers = require('./routes/workers');
app.use('/', landing);
app.use('/app', pages);
app.use('/workers', workers);

// Starting server and db
model.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});