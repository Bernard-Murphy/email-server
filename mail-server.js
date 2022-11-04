const SMTPServer = require('smtp-server').SMTPServer;

const server = new SMTPServer({
    secure: false,
});

server.listen(25, () => console.log('email server running on port 25'));