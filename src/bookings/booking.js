const { v4: uuidv4 } = require('uuid')

// roomId, guestName, chekInDate, ChekDutDate

class Booking {
    constructor (roomId, guestName, checkInDate, checkDutDate) {
        this.id = uuidv4()
        this.romId = roomId
        this.guestName = guestName
        this.checkInDate = checkInDate
        this.checkDutDate = checkDutDate
    }
}

module.exports = Booking