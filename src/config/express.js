import express from 'express';

const expressApp = express();

// middlewares
expressApp.use(express.json());

expressApp.get('/', (req, res) => {
    res.send('🚀 API is running');
});

// Routes

export default expressApp;
