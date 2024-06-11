const mongoose = require('mongoose');

async function connection() {
    try{
        await mongoose.connect(process.env.MOONGODB_URI)
        const connection = mongoose.connection
        connection.on('connected ', () => {
            console.log('connected to the database!')
        });

        connection.on('error ', () =>{
            console.log('Something went wrong in mongodb ', error)
        });

    }catch(error){
        console.log('Something went wrong ', error)
    }
}

module.exports = connection;