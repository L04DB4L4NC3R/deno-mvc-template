// Oak server
import { Application } from "https://deno.land/x/oak/mod.ts";

// Dotenv
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Router
import blogsRouter from "./routes/blogs.ts";

// read from .env and inject variables
// into the Deno.env
config();

// register a new oak instance
const app = new Application();

// create a server and inject host:port
let srv = async (host: string, port: string) => {
	console.info(`Listening on host: ${host} and port: ${port}`)
	await app.listen(`${host}:${port}`)
}

// register the router
app.use(blogsRouter.routes());

// makes sure OPTIONS request is handled
// and all unregistered methods are blocked
app.use(blogsRouter.allowedMethods());

// try to take port from env 
// else use 3000
srv("0.0.0.0", Deno.env.get("PORT") || "3000")
