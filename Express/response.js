// / res.send(): For sending a single response, like text or basic JSON.
app.get('/welcome', (req, res) => {
    res.send("Welcome to my site!");  // Sends back text
});

// res.write(): For sending parts of a response separately (e.g., streaming).
app.get('/stream', (req, res) => {
    res.write("First part of response\n");
    res.write("Second part of response\n");
    res.end();  // Ends the response
});

// res.json(): Specifically for sending JSON data.
app.get('/data', (req, res) => {
    res.json({ message: "Hello", status: "success" });
});

// res.render(): For generating HTML pages from templates.
app.set('view engine', 'ejs');  // Setting EJS as the template engine

app.get('/home', (req, res) => {
  res.render('index', { title: "Home Page" });  // Renders the 'index' template
});

//////MIDDLEWARE
// Application-Level Middleware: Middleware that applies to the entire application or specific routes.
app.use((req, res, next) => {
    console.log('Global middleware');
    next();
});

// Router-Level Middleware: Middleware attached to specific route groups using an instance of express.Router().
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});
app.use('/api', router);

// Error-Handling Middleware: Special middleware for handling errors, defined with four parameters (err, req, res, next).
app.use((err, req, res, next) => {
    res.status(500).send('Error occurred!');
});

// Built-In Middleware: Middleware provided by Express, like express.json() for parsing JSON and express.static() for serving static files.
app.use(express.json());  // Parses JSON data

// Third-Party Middleware: Middleware from external libraries, such as body-parser for parsing request bodies or cors for handling cross-origin requests.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));  // Parses URL-encoded data
﻿
