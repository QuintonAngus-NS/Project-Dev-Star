const emailSendRequest = fetch('https://api.dexlink.northern-star.online/emailRequest', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: {body: 'send email Please.'}
})