module.exports = {
    db: {
        uri: 'mongodb://localhost/myapp',
        connect: {
            config: {
                autoIndex: false
            },
            useMongoClient: true
        }
    }
};