require('dotenv').config()
const app = require("./app")
const port = 3000


app.listen(port, () => {
    console.log(`FruityApp running on port ${port}`);
})