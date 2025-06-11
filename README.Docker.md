### Building your application

Build a docker image by running:
`docker compose build`


### Exporting your docker image to a file

Save your docker image to a tar.gz file using gzip by running (use bash terminal):
`docker save app-nextjs-v2 | gzip > app_nextjs_v2.tar.gz`


### Loading your docker image from the file

Load your docker image from a tar.gz file by running:
`docker load < app_nextjs_v2.tar.gz`



### Running your application

When you're ready, start your application by running:
`docker compose up`

Your application will be available at http://localhost:3000.

-- important: These files need to be present in the same folder as the image: `docker-compose.yml .env`  
