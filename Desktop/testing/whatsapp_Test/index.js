const express = require('express');
const app = express();
const port = 9090;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const qrcode = require('qrcode-terminal');
const puppeteer = require("puppeteer");
const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--unhandled-rejections=strict'] }
});


client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.initialize();



app.get('/rectrack-notification', (req, res) => {
    const {
        message, groupId
    } = req.body

    console.log(req.body)

    // Sending message.

    client.sendMessage(groupId, message).then(response => {
        if (response.id.fromMe) {
            console.log(response.id);
            result = "Message sent successfully."
            res.status(200).send(result);
        }

    }).catch(err => {
        console.log(err);
        result = err
    });

}
);




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});