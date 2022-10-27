import bodyParser from 'body-parser';
import express from 'express';
const app = express()
import cors from 'cors';

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

const adapter = new JSONFile(file)
const db = new Low(adapter)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


app.post("/api/users", async (req, res) => {
  let username = req.body.username;
  let id = Math.floor(Math.random() * 1000);
  const { users } = db.data
  users[id] = { username, _id: id, count: 0, log: [] }
  await db.write()
  res.json({ username: username, _id: id });
})

app.get("/api/users", async (req, res) => {
  const { users } = db.data
  let jsonToSend = []
  for (let key in users) {
    jsonToSend.push({ username: users[key].username, _id: key })
  }
  res.json(jsonToSend);
})


app.post("/api/users/:_id/exercises", async (req, res) => {
  let id = req.params._id;
  let description = req.body.description;
  let duration = req.body.duration;
  let date = req.body.date;
  const { users } = db.data
  if (date == "") {
    date = new Date().toDateString();
  }
  else {
    date = new Date(date).toDateString();
  }
  users[id].count++;
  users[id].log.push({ description: description, duration: duration, date: date })
  await db.write()
  res.json({ username: users[id].username, description: description, duration: duration, _id: id, date: date });
})

app.get("/api/users/:_id/logs", async (req, res) => {
  let id = req.params._id;
  let from = new Date(req.query.from);
  let to = new Date(req.query.to);
  let limit = req.query.limit;
  const { users } = db.data
  let jsonToSend = { username: users[id].username, _id: id, count: users[id].count, log: [] }
  for (let i = 0; i < users[id].log.length; i++) {
    let date = new Date(users[id].log[i].date);
    if (from.toDateString() != "Invalid Date" && to.toDateString() != "Invalid Date") {
    if (date >= from && date <= to) {
      jsonToSend.log.push(users[id].log[i])
    }
  }
  else if (from.toDateString() != "Invalid Date") {
    if (date >= from) {
      jsonToSend.log.push(users[id].log[i])
    }
  }
  else if (to.toDateString() != "Invalid Date") {
    if (date <= to) {
      jsonToSend.log.push(users[id].log[i])
    }
  }
  else {
    jsonToSend.log.push(users[id].log[i])
  }

    if (i == limit-1) {
      break;
    }
  }
  res.json(jsonToSend);
})

db.read()
.then(async () => {
  const { users } = db.data
  if (!users) {
  db.data.users = {}
  await db.write()
  }

  const listener = app.listen(process.env.PORT || 6676, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })
})