import { renderPost } from "./dist/renderPost.js";

if (!(await tables.Post.get("0"))) {
	await tables.Post.put({
		id: "0",
		title: "Hello, World!",
		body: "This is a test post. Please leave a comment! 📝",
		comments: []
	});
}

export class UncachedBlog extends tables.Post {
	async get() {
		return {
			status: 200,
			headers: { 'Content-Type': 'text/html' },
			body: renderPost(this)
		}
	}
}

class PageBuilder extends tables.Post {
	async get() {
		return {
			content: renderPost(this)
		}
	}
}

tables.BlogCache.sourcedFrom(PageBuilder);

export class CachedBlog extends tables.BlogCache {
	async get() {
		return {
			contentType: 'text/html',
			data: this.content
		}
	}
}