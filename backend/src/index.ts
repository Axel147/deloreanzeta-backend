import * as express from 'express';
import bodyParser = require('body-parser');
import * as cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { PORT } from './config/config';
import { initialize as initializeDb } from './dbConnection';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
// create express app
const app = express();
app.use(cors());
app.use(helmet());
// app.use(express.json({ limit: '500mb'}));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/json', limit: '500mb' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: 'multipart/form-data' }));

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

initializeDb()
	.then(() => {
		app.listen(PORT, async () => {
			console.log(`Server running on port http://localhost:${PORT}/`);
		});
	})
	.catch((error) => console.log(error));
