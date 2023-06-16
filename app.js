import { getUser, getUsers, } from "./teste1.js";
import { createUser } from "./teste2.js";
import { deleteUser } from "./teste3.js";
import { updateUser } from "./teste4.js";
import { getUserReadCount } from "./teste5.js";
import express from 'express';

const PORT = 3000;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", getUser);
app.get("/users", getUsers);
app.post("/users", createUser)
app.delete("/users", deleteUser)
app.put("/users", updateUser)
app.get("/users/access", getUserReadCount);


app.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});