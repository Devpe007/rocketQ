const Database = require('../database/config');

class RoomController {
  async create(request, response) {
    const db = await Database();

    const { password } = request.body;

    let roomId = '';

    for (let i = 0; i < 6; i++) {
      roomId += Math.floor(Math.random() * 10).toString();
    };

    await db.run(`
        INSERT INTO rooms (
            id,
            password
        ) VALUES (
            ${parseInt(roomId)},
            ${password}
        )
    `);

    await db.close();

    response.redirect(`/room/${roomId}`);
  }
};

module.exports = new RoomController();
