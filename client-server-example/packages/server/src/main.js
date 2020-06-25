import express from 'express';

const server = express();

server.use(express.json());

server.get('/status',(_, res) => {
	res.send({
		status: 'Okay'
	})
});

server.post('/authenticate', (req, res) => {
	console.log(req.body);

	res.send({
		...req.body
	});
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is litening at http://${HOSTNAME}:${PORT}`)
});