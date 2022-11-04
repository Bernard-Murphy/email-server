const sendmail = require('sendmail')({
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    },
    silent: false,
    dkim: { // Default: False
      privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
      keySelector: 'mydomainkey'
    }
})({
    from: 'no-reply@suelightning.com',
    to: 'inouty67@man2man.xyz',
    subject: 'Test',
    html: `
    <h4>Test</h4>
    <p>This is a test</p>
`
}, function(err, reply) {
    if (err) console.log(err && err.stack);
    console.dir(reply);
});