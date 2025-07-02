const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended : false}));

app.get('/users', (req,res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users", (req,res) => {
    return res.json(users);
});

app.get("/api/usrs/:id", (req , res) => {
       const id = Number(req.params.id);
       const user = user.find((user) => user.id ===id);
       return res.json(user);
});


app.delete("/api/users/:id",(req,res) => {
    return res.json({status: "pending"});
});

app
  .route("/api/users/:id")
  .get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    return res.json(user);
  })
   .patch((req,res) => {
    return res.json({ status: "Pending"});
   })

   .delete((req,res) => {
    return res.json({status : "Pending"});
   })

   app.post("/api/users",(req,res) => {
    const body = req.body;
    console.log("Body", body);
    return res.json({status: "pending"});
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
 