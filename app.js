import { getUser, getUsers, } from "./teste1.js";
import { createUser } from "./teste2.js";
import { deleteUser } from "./teste3.js";
import { updateUser } from "./teste4.js";
import { getUserReadCount } from "./teste5.js";
import { loggedIn, minRole } from './middlewares.js'
import express from 'express';
import { Role } from "./fakeData.js";

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

const { Admin, Member } = Role

app.get("/user", loggedIn, minRole(Member), getUser);
app.get("/users", loggedIn, minRole(Member), getUsers);
app.post("/users", loggedIn, minRole(Admin), createUser);
app.delete("/users", loggedIn, minRole(Admin), deleteUser);
app.put("/users", loggedIn, minRole(Member), updateUser);
app.get("/users/access", loggedIn, minRole(Admin), getUserReadCount);


app.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});