const Booking = require('./booking')

class BookingService {
    constructor (repository) {
        this.repository = repository
    }

    findAllBookings() {
        return this.repository.findAll()
    }

    createBooking({ roomId, guestName, checkInDate, checkDutDate }) {
        const newBooking = new Booking(roomId, guestName, checkInDate, checkDutDate)

        const overlappingBooking = {
            bookings: this.repository.findAll().find((booking) => (
                booking.roomId === newBooking.roomId && booking.checkInDate < newBooking.checkDutDate && booking.checkDutDate > newBooking.checkInDate
            ))
        }

        if (overlappingBooking.bookings) {
            throw new Error('The room is already booked for the selected dates.')
        }

        this.repository.create(newBooking)
        return newBooking
    }
}

module.exports = BookingService