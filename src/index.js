const express = require('express');
const path = require('path');

const app = express();

//built in middleware
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath))


app.get('/', (req,res) => {
    res.send('hello!')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})