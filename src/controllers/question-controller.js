const Database = require('../database/config');

class QuestionController {
  async index(request, response) {
    const db = await Database();

    const { room_id, question_id, action } = request.params;
    const { password } = request.body;

    // Verificar se a senha esta correta;
    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${room_id}`);
    if (verifyRoom.password === password) {
      if (action === 'delete') {
        await db.run(`DELETE FROM questions WHERE id = ${question_id}`);
      } else if (action === 'check') {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${question_id}`);
      };
    };

    response.redirect(`/room/${room_id}`);
  };

  async create(request, response) {
    const db = await Database();

    const { question } = request.body;
    const { room_id } = request.params;

    db.run(`INSERT INTO questions (
        title,
        read,
        room
    ) VALUES (
        "${question}",
        0,
        ${room_id}
    )`);

    response.redirect(`/room/${room_id}`);
  };
};

module.exports = new QuestionController();
