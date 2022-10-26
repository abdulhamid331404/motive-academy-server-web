const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('All Course Cumming soon')
});

app.listen(port, ()=>{
    console.log('port is running', port);
})
