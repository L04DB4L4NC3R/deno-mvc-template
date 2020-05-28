import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = {message: "hello world"};
});

let srv = async (host: string, port: string) => {
	console.info(`Listening on host: ${host} and port: ${port}`)
	await app.listen(`${host}:${port}`)
}
srv("0.0.0.0", Deno.env.get("PORT") || "3000")
