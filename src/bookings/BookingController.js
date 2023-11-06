class BookingController {
    constructor (service) {
        this.service = service
    }

    index () {
        const bookings = this.service.findAllBookings()
        return {code: 200, body: { bookings }}
    }

    save (request) {
        const { roomId, guestName, checkInDate, checkDutDate } = request.body;

        const booking = this.service.createBooking({
          roomId,
          guestName,
          checkInDate,
          checkDutDate,
        });

        return {
          code: 201,
          body: { message: "Booking created successfully.", booking }
        };
    }
}

module.exports = BookingController