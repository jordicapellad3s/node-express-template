import './config/env.js';
import hhtpServer from '#Config/http.js';
import connectBD from '#Config/db.js';

const bootstrap = async () => {
    await connectBD(process.env.MONGODB_URI);
    hhtpServer.listen(process.env.PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
    });
};

bootstrap();
