const SMTPServer = require('smtp-server').SMTPServer;

const server = new SMTPServer({
    secure: false,
    authOptional: true,
    allowInsecureAuth: true,
    onAuth(auth, session, next){
        console.log('auth', auth);
        console.log('session', session);
        next();
    }
});

server.listen(25, () => console.log('email server running on port 25'));