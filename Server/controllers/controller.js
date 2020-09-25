const fs = require('fs');

exports.Access_Data = function (request, response) {
    fs.readFile('data.json', (err, data) => {
        if (err){
            console.log(err);
        }
        else{
            response.send(data);
        }
    });
}

exports.eventId = function (request, response) {
    fs.readFile('data.json', (err, data) => {
       var value = JSON.parse(data), eventid;
       eventid = value.filter(function(a){
           return a._id === request.body.id;
       })
       if(err){
           response.send(err);
       }
       else{
           response.send(eventid);
       }
    });
};