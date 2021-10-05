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
};

module.exports = new QuestionController();
