import { Router } from "https://deno.land/x/oak/mod.ts";
import { Collection } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

export function NewBlogsHandler(col : Collection) : Router {
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
	
	return blogsRouter;
}

