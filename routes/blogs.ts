import { Router } from "https://deno.land/x/oak/mod.ts";

const blogsRouter = new Router();

// health check
blogsRouter
.get("/blogs/ping", async (ctx, next) => {
	ctx.response.body = {message: "pong"};
})

// blogs crud
blogsRouter
.get("/blogs", async (ctx, next) => {
})
.post("/blogs", async (ctx, next) => {
})
.delete("/blogs/:id", async (ctx, next) => {
})
.put("/blogs/:id", async (ctx, next) => {
})

export default blogsRouter
