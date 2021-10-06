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
  }
};

module.exports = new RoomController();
