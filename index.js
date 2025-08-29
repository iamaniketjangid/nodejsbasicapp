const express = require('express');
const app = express();
const PORT =  8080;

app.use(express.json());

app.get('/', (req, res) => {
    try {
        res.json({ 
            message: "Hello",
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
