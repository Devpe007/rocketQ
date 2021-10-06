const Database = require('../database/config');

class QuestionController {
  index(request, response) {
    const { room_id, question_id, action } = request.params;
    const { password } = request.body;

    console.log(`
        room = ${room_id}, 
        questionId = ${question_id}, 
        action = ${action}, 
        password = ${password}
    `);
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
