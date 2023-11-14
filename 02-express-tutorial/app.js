const express = require('express')
const cookieParser = require('cookie-parser')
const peopleRouter = require('./routes/people')
let { people } = require('./data')

const app = express()

// app.use(express.static('./methods-public'))

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

const auth = (req, res, next) => {
  if (req.cookies.name) {
    req.user = req.cookies.name;
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

app.use(logger)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/people", peopleRouter);

// app.get('/', logger, (req, res) => {
//   res.send()
// })

// app.get('/api/v1/people', logger, (req, res) => {
//   res.json(people)
// })

// app.post('/api/v1/people', logger, (req, res) => {
//   if (req.body.name === undefined) {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//   } else {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   }
// })

app.post("/logon", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.cookie("name", name);
    res.status(201).json({ success: true, message: `Hello ${name}` });
  } else {
    res.status(400).json({ success: false, message: "Name is required" });
  }
});

app.delete("/logoff", (req, res) => {
  res.clearCookie("name");
  res.status(200).json({ success: true, message: "User logged off" });
});

app.get("/test", auth, (req, res) => {
  res.status(200).json({ success: true, message: `Welcome to the user, ${req.user}` });
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})