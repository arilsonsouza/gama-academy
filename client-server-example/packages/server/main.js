import { createServer } from 'http';
import { parse } from 'querystring';

const server = createServer((req, res) => {
	switch(req.url) {
		case '/status': 
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.write(JSON.stringify({
				status: 'Okay'
			}))
			res.end();
			break
		case '/authenticate':
			let data = '';
			req.on('data', (chunck) => {
				data += chunck;
			});

			req.on('end', () => {
				const parsedData = parse(data);
				console.log(parsedData);					
				res.end();
			})
			break
		default :
			res.writeHead(404, 'Service not found');			
			res.end();
	}
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is litening at http://${HOSTNAME}:${PORT}`)
});