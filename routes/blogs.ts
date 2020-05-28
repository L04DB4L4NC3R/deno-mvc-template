// oak router
import { Router } from "https://deno.land/x/oak/mod.ts";

// blogs blogCollectionlection
import { Collection } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

// database funcs
import {
	create,
	read,
	update,
	del
} from "../models/blogs.ts";

export function NewBlogsHandler(blogCollection : Collection) : Router {
	const blogsRouter = new Router();

	// health check
	blogsRouter
	.get("/blogs/ping", async (ctx, next) => {
		ctx.response.body = {message: "pong"};
	})

	// blogs crud
	blogsRouter

	// get all blogs
	.get("/blogs", async (ctx, next) => {
		let blogs = await read(blogCollection);
		ctx.response.body = blogs;
	})

	// create a new blog
	.post("/blogs", async (ctx, next) => {
		const body = await ctx.request.body({
			contentTypes: {
				json: ["application/json"]
			}
		})
		let {
			desc,
			time_of_creation
		} = body.value;
		let blog = await create(blogCollection, desc, time_of_creation);
		ctx.response.body = blog;
	})

	// delete blog
	.delete("/blogs/:id", async (ctx, next) => {
		let path = ctx.request.url.pathname;
		const id = path.slice(7, path.length);
		const res = await del(blogCollection, id);
		if (res) {
			ctx.response.body = {message: "deletion successfull"}
		} else {
			ctx.response.body = {message: "error while deleting"}
			ctx.response.status = 409
		}
	})

	// update blog desc
	.put("/blogs/:id", async (ctx, next) => {
		let path = ctx.request.url.pathname;
		const id = path.slice(7, path.length);
		const body = await ctx.request.body({
			contentTypes: {
				json: ["application/json"]
			}
		})
		let {
			desc,
		} = body.value;
		let blog = await update(blogCollection, id, desc);
		ctx.response.body = blog;
	})
	
	return blogsRouter;
}

