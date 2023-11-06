const fastify = require('fastify')
const BookingRepositiry = require('./bookings/BookingRepository')
const BookingService = require('./bookings/BookingService')
const BookingController = require('./bookings/BookingController')

const app = fastify({ logger: true })

const bookingRepository = new BookingRepositiry()
const bookingService = new BookingService(bookingRepository)
const bookingController = new BookingController(bookingService);

app.get('/hello', async (request, reply) => {
    reply.send({message: "Hello Word!"})
})

app.get('/api/bookings', (request, reply) => {
    const { code, body } = bookingController.index(request) 
    reply.code(code).send(body)
})

app.post('/api/bookings', (request, reply) => {
    try {
        const { code, body } = bookingController.save(request) 

        reply
          .code(code)
          .send(body)    
    } catch (error) {
        reply.code(400).send({ message: error.message });
    }

    app.setErrorHandler((error, request, reply) => {
      if (error.statusCode) {
        reply.code(error.statusCode).send({ message: error.message });
      } else {
        reply.code(500).send({ message: "Internal Server Error" });
      }
    });
    
})

module.exports = app