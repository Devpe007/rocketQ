const Database = require('../database/config');

class RoomController {
  async create(request, response) {
    const db = await Database();

    const { password } = request.body;

    let roomId = '';
    let isRoom = true;

    while (isRoom) {
      // Gera o numero da sala;
      for (let i = 0; i < 6; i++) {
        roomId += Math.floor(Math.random() * 10).toString();
      };

      // Verificar se o id da sala ja existe;
      const roomExistIds = await db.all('SELECT id FROM rooms');

      isRoom = roomExistIds.some((roomExistId) => roomExistId === roomId);

      if (!isRoom) {
        // Inseri a sala no banco;
        await db.run(`
          INSERT INTO rooms (
              id,
              password
          ) VALUES (
              ${parseInt(roomId)},
              ${password}
          )
      `);
      };
    };

    await db.close();

    response.redirect(`/room/${roomId}`);
  };

  async open(request, response) {
    const db = await Database();

    const { room_id } = request.params;

    const questions = await db.all(`SELECT * FROM questions WHERE room = ${room_id} and read = 0`);
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${room_id} and read = 1`);

    response.render('room', { room_id, questions, questionsRead });
  };
};

module.exports = new RoomController();
