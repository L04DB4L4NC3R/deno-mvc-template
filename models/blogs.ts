import { Collection } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

/* create
* create a blog with optional description
*/
export async function create(blogCollection : Collection, desc : string, toc : any) {
	return blogCollection.insertOne({
		desc : desc,
		time_of_creation: toc || new Date()
	})
}

/* read
* read all blogs
*/
export async function read(blogCollection : Collection) {
	return blogCollection.find({})
}

/* update
* update a blog desc by id
*/
export async function update(blogCollection : Collection, id : string, desc : string) {
	return blogCollection.updateOne({
		_id : {
			"$oid": id
		}
	}, {desc})
}

/* del
* delete a blog by id
*/
export async function del(blogCollection : Collection, id : string) {
	return blogCollection.deleteOne({
		_id : {
			"$oid": id
		}
	})
}
