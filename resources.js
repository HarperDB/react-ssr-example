import { renderPost } from "./dist/renderPost.js";
import fs from 'fs';
import path from 'path';

if (!(await tables.Post.get("0"))) {
	await tables.Post.put({
		id: "0",
		title: "Hello, World!",
		content: "This is a test post. Please leave a comment! 📝",
		comments: []
	});
}

export class Blog extends tables.Post {
	async get(query) {
		const dist = path.join(import.meta.dirname, 'dist');
		switch(query.url) {
			case '/client.js':
				return {
					status: 200,
					headers: { 'Content-Type': 'text/javascript' },
					body: fs.readFileSync(path.join(dist, 'client.js'), 'utf-8')
				}
			default:
				return {
					status: 200,
					headers: { 'Content-Type': 'text/html' },
					body: renderPost(this)
				}
		}
	}
}