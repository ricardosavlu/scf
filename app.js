// import { teste1 } from "./teste1";
// import { teste2 } from "./teste2";
// import { teste3 } from "./teste3";
// import { teste4 } from "./teste4";
// import { teste5 } from "./teste5";
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

// app.get("/user", teste1.getUser);
// app.get("/users", teste1.getUsers);
// app.post("/users", teste2)
// app.delete("/users", teste3)
// app.put("/users", teste4)
// app.get("/users/access", teste5);


app.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});