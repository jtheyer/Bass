const pool = require('../../config/db_connection') // import pool here as a service so I can run my query

// Create service as a module so we can import elsewhere (e.g. in the controller)
module.exports = {
    //Define create -> which will recieve data from the controller 
    //.. and have a callback which will be defined in here...
    create: (data, callback) => { //..if call is success, pass first param as null and second as results 
        pool.query(
            `INSERT into registration(firstName, lastName, email, password)
                    values(?,?,?,?)`
            [
                data.firstName,
                data.lastName,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if(error){
                   return callback(error)
                }
            }
        );
    }

};