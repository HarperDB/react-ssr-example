# HarperDB React SSR Example

This repo is an example of how to implement React SSR using HarperDB Resources to efficiently generate a _Blog_ from a database of _Posts_.

It includes complete client side hydration as well, resulting in a fully interactive React app experience.

## Get Started

1. `npm i`
2. `npm build`
3. `harperdb run .`
4. Navigate to [/Blog/0](http://localhost:9926/Blog/0)
5. Add a comment!
6. Restart HarperDB and see the comment persist between sessions!

## Help

- The `resources.js` file will generate a Post record automatically on startup, but won't overwrite an existing one.

- If you want to clear the Post record, use the command: `curl -X DELETE http://localhost:9926/Post/0`

- If you want to clear the comments on the Post, use the command:

```sh
curl -X PATCH http://localhost:9926/Post/0 \
-H "Content-Type: application/json" \
-d '{ "comments": [] }'
```