const app = require("./server");

require('./database');
require("dotenv").config();

app.listen(process.env.PORT, () => console.log("[SERVER] Running"));
