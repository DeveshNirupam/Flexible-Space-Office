const mongoose = require('mongoose');

// const url = "mongodb+srv://deveshnirupam1908:dev1908@cluster0.va66ezn.mongodb.net/SpaceOffice?retryWrites=true&w=majority&appName=Cluster0"
const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/flexibleoffice?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;