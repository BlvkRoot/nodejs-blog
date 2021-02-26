const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/blog_post',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
} catch (error) {
    console.log(`DB Connection Error: ${error}`);
}

module.exports = mongoose