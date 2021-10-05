class RoomController {
  create(request, response) {
    const roomId = 123456;

    response.redirect(`/room/${roomId}`);
  }
};

module.exports = new RoomController();
