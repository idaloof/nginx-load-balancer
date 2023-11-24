const express = require('express');

const app = express();
const port = process.env.PORT;
const cors = require('cors');
const mariaModel = require('./models/database_maria.js')

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    const data = {
        "Available routes": {
            "/": "root",
            "/users": "Returns all users json"
        }
    }

    return res.json(data);
});

app.get("/users", async (req, res) => {
    const users = await mariaModel.getData(mariaModel.queries.allUsers);

    return res.json(users);
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
