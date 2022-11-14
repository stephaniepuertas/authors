const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://puertassteph:pRll5OjUmuf6h2E5@cluster0.qxf7jnx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));