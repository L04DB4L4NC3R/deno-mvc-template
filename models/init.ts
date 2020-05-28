import { MongoClient, Database } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

export const DBConnect = (uri: any) : Database => {
	const client = new MongoClient();
	client.connectWithUri(uri);
	const db = client.database("blogs");
	return db;
};
