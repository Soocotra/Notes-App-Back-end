/* eslint-disable linebreak-style */
const {addNoteHandler} = require('./handler');
const routes = [{
  path: '/notes',
  method: 'POST',
  handler: addNoteHandler,
}];

module.exports = routes;
