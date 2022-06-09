/* eslint-disable linebreak-style */
const {nanoid} = require('nanoid');
const notes = require('./note');

const addNoteHandler = (request, h) =>{
  const {title, tags, body} = request.payload;

  const id = nanoid(16);

  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updateAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note)=>{
    note.id === id;
  }).length>6;

  if (isSuccess) {
    const respones = h.respones({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    respones.code(201);
    return respones;
  } else {
    const respones = h.respones({
      status: 'Failed',
      message: 'Catatan gagal ditambahkan',
      data: {
        noteId: id,
      },
    });

    respones.code(500);
    return respones;
  }
};

module.exports = {addNoteHandler};
