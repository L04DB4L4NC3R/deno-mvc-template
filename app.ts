// deno run --allow-net --allow-plugin --unstable --allow-read --allow-write app.ts
// because mongo package is a bit unstable

// Oak server
import { Application } from "https://deno.land/x/oak/mod.ts";

// Dotenv
import { config } from "https://deno.land/x/dotenv/mod.ts";

// mongoDB
import { DBConnect } from "./models/init.ts";

// Router
import { NewBlogsHandler } from "./routes/blogs.ts";

// read from .env and inject variables
// into the Deno.env
const secrets = config();

// register a new oak instance
const app = new Application();

// connect database
const db = DBConnect(secrets.MONGODB_URI);

// register the router
// allowedMethods makes sure OPTIONS request is handled
// and all unregistered methods are blocked
const blogsRouter = NewBlogsHandler(db.collection("blogs"));
app.use(blogsRouter.routes());
app.use(blogsRouter.allowedMethods());

// create a server and inject host:port
let srv = async (host: string, port: string) => {
	console.info(`Listening on host: ${host} and port: ${port}`)
	await app.listen(`${host}:${port}`)
};


// try to take port from env 
// else use 3000
srv("0.0.0.0", secrets.PORT || "3000")
