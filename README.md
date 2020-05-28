## Deno Oak MVC template
A template repository for an MVC server using Oak in Deno

---

### What is being used here

* Uses Deno MongoDB driver
* Uses Deno Oak server
* Uses Deno standard library dotenv

### Instructions to run

* Make a `.env` file using `.env.example`

* Run the following command on the terminal

```sh
deno run --allow-net \ # for oak server to bind to port
--allow-plugin --unstable \  # for mongodb plugin (unstable for now)
--allow-read --allow-env \  # for reading .env
--allow-write app.ts # write command for mongodb plugin
```

* Or run in a container using podman

```sh
podman image build -t oak-mvc-template .

podman container run -p 3000:3000 oak-mvc-template
```

* Or run in a container using docker

```sh
docker image build -f Containerfile -t oak-mvc-template .

docker container run -p 3000:3000 oak-mvc-template
```

<p align="center">
Made with :heart: by Angad Sharma
</p>
