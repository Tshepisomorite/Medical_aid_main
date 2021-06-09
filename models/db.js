const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            UseNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch (err) {
        console.error(err);
        process.exit(1);

    }
}

module.exports = connectDB;


require('./user.model');
require('./member.model');
require('./beneficiary.model');