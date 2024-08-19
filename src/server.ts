import express from "express";
import routes from "./routes";
import { config } from "./config/config";


const app = express();
const port = config.port;

app.use(express.json());

app.use('/api', routes);


export function startServer() {
	app.listen(port, () => {
		console.log(`Server is running on http://locahost:${port}`);
	});
};
