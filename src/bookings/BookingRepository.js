class BookingRepositiry {
    constructor () {
        this.bookings = []
    }

    findAll() {
        return this.bookings
    }

    create(booking) {
        this.bookings.push(booking)
    }
}

module.exports = BookingRepositiry