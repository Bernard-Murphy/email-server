const SMTPServer = require('smtp-server').SMTPServer;
const os = require('os');

console.log(os.hostname());

const server = new SMTPServer({
    host: 'suelightning.com',
    secure: false,
    authOptional: true,
    allowInsecureAuth: true,
    disabledCommands: ['STARTTLS'],
    onAuth(auth, session, next){
        console.log('auth', auth);
        console.log('session', session);
        next();
    },
    onRcptTo(address, session, next) {
        console.log('RcptTo:');
        console.log(address);
        console.log(session);
        next();
    },
    onData(stream, session, callback) {
        console.log('data:')
        console.log(session)
        stream.pipe(process.stdout); // print message to console
        stream.on("end", callback);
    }
});

server.on('error', err => console.log('server error', err));

server.listen(25, () => console.log('email server running on port 25'));