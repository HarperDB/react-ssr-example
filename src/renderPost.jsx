import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app.jsx";

export function renderPost(initialPostData) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>HarperDB React SSR Blog Example</title>
	<style>
body {
	font-family: sans-serif;
}
.delete-button {
  background-color: transparent;
  border: none;
  color: red;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-left: 5px;
  line-height: 1;
}

.delete-button:hover {
  color: darkred;
}
	</style>
</head>
<body>
	<div id="root">${renderToString(<App initialPostData={initialPostData} />)}</div>
	<script>window.__INITIAL_POST_DATA__=${JSON.stringify(initialPostData)}</script>
	<script type="module" src="/client.js"></script>
</body>
</html>
  `;
}
