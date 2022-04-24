
var mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://eman:QT8LoVUWDt0uSVFu@cluster0.bvz0d.mongodb.net/login?retryWrites=true&w=majority";

// mongoose.connect('mongodb://localhost:27017/login')
mongoose.connect(mongoUrl)