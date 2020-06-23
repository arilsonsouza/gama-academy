import { createServer } from 'http';
import { readFile } from 'fs';
import { resolve } from 'path';
import { parse } from 'querystring';

let filePath = '';

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
		case '/home':
			filePath = resolve(__dirname, 'pages', 'home.html');

			readFile(filePath,(error, file) => {
				if (error) {
					res.writeHead(500, "Can't HTML file")
					res.end()
					return
				}

				res.writeHead(200);
				res.write(file);
				res.end();
			});

			break
		case '/sign-in':
			filePath = resolve(__dirname, 'pages', 'sign-in.html');

			readFile(filePath,(error, file) => {
				if (error) {
					res.writeHead(500, "Can't HTML file")
					res.end()
					return
				}

				res.writeHead(200);
				res.write(file);
				res.end();
			});

			break
		case '/authenticate':
			let data = '';
			req.on('data', (chunck) => {
				data += chunck;
			});

			req.on('end', () => {
				const parsedData = parse(data);
				console.log(parsedData);	
				res.writeHead(301, {
					Location: '/home'
				});
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