const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers/');
const app = express();

// connect PORT
const PORT = process.env.PORT || 3001;

// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ })
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// setup sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  }

app.use(session(sess))


// turn on routes
app.use(routes);

// connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});