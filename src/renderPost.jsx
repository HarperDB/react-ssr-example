import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app.jsx";

export function renderPost(post) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>HarperDB React SSR Blog Example</title>
</head>
<body>
	<script>window.__INITIAL_DATA__=${JSON.stringify(post)}</script>
	<div id="root">${renderToString(<App post={post} />)}</div>
	<script type="module" src="client.js"></script>
</body>
</html>
  `;
}
