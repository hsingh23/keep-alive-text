var config = JSON.parse(fs.readFileSync("config.json"));
var client = require('twilio')(config.twilio.account, config.twilio.token);
var default_from = config.twilio.from;
var default_body = config.twilio.body;

function send_text(phone_info) {
    client.sendMessage({
        to:phone_info.to, 
        from: phone_info.from || default_from,
        body: phone_info.body || default_body
    });
}

config.phones.map(function send_text_to_all_phones(phone_info) {
    setInterval(send_text, phone_info.frequency_in_sec * 1000, phone_info);
});