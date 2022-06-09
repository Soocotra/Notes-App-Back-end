/* eslint-disable linebreak-style */
const hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async ()=>{
  const server = hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan dengan alamat ${server.info.uri}`);
};

init();
