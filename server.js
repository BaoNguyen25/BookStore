const app = require('./src/app');
const PORT = require('./src/config/config.app').app.port || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});