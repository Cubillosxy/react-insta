const express = require('express');
const cors = require('cors');
app = express();

app.use(cors());
app.use(express.json());
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({ requestData: {username, password} });
});


app.listen(4000, () => { 
    console.log('Listening on port 4000');
    }
);
