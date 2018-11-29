var nodemailer = require('nodemailer');


pheDuyet = (req, res) => {
    let myEmail = req.body.myEmail;
    let myPassword = req.body.myPassword;
    let nameEvent = req.body.nameEvent;
    let yourEmail = req.body.yourEmail;
    let name = req.body.name;
    let address = req.body.address;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: myPassword
        }
    });

    var mailOptions = {
        from: myEmail,
        to: yourEmail,
        subject: 'Thông báo sự kiện '+nameEvent,
        text: 'Hello',
        html:'<p><b>Chào bạn</b> '+ name +'</p><br/>'+
            'Chúc mừng bạn đã đến với sự kiện của chúng tôi <br/>'+
            'Chúng tôi rất vinh hạnh khi được đón tiếp bạn ở '+
            address+
            '<br/>Cám ơn bạn đã quan tâm đến sự kiện của chúng tôi<br/>'+
            '<br/>Vui lòng đem điện thoại để tiến hành điểm danh để nhận quà<br/>'+
            '<br/>Chúc bạn một ngày tốt lành <br/>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('err');
        } else {
            res.send('ok');
            console.log('Email sent: ' + info.response);
        }
    });

}

pheDuyet_1 = (res, object) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'localhost',
        port: 3000,
        secure: false
    });

    var mailOptions;
    if (object.status === 'Chấp nhận') {
        mailOptions = {
        to: object.yourEmail,
        subject: 'Thông báo sự kiện ' + object.nameEvent,
        text: 'Hello',
        html:'<p><b>Chào bạn</b> '+ object.name +'</p><br/>'+
            'Chúc mừng bạn đã đến với sự kiện của chúng tôi <br/>'+
            'Chúng tôi rất vinh hạnh khi được đón tiếp bạn ở '+
            object.address+
            '<br/>Cám ơn bạn đã quan tâm đến sự kiện của chúng tôi<br/>'+
            '<br/>Vui lòng đem điện thoại để tiến hành điểm danh để nhận quà<br/>'+
            '<br/>Chúc bạn một ngày tốt lành <br/>'
        }
    } else {
        mailOptions = {
            to: object.yourEmail,
            subject: 'Thông báo sự kiện ' + object.nameEvent,
            text: 'Hello',
            html:'<p><b>Chào bạn</b> '+ object.name +'</p><br/>'+
                'Bạn không được tham gia sự kiện này.<br/>'+
                'Hi vọng sẽ gặp lại bạn tại một sự kiện khác.'
            }
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('err');
        } else {
            res.send('ok');
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    pheDuyet,
    pheDuyet_1
}