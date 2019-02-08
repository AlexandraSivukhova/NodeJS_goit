const fs = require("fs");
const path = require("path");

const saveUser = data => {
    const filePath = path.join(__dirname, '../../db/users/' + data.username + '.json');

    fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

const signUpRoute = (request, response) => {
    if (request.method === 'POST') {
        let body = '';

        request.on('data', function(data) {
            body += data;

            console.log('Incoming data!');
        });

        request.on('end', function () {
            const postData = JSON.parse(body);

            saveUser(postData);

            var responseData = JSON.stringify({
                "status": "success", 
                "user": postData
            });

            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(responseData);
        });
    }
};

module.exports = signUpRoute;