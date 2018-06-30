const services = {
    db: require("./services/db.js"),
    web: require("./services/www.js"),
};

console.log("Hello");

require('index2');

Promise.resolve()
    .then(services.db.init)
    .then(services.web.init);