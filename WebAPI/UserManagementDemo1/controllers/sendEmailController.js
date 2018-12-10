var nodemailer = require('nodemailer');


pheDuyet = (req, res) => {
    // console.log('asdasd'+JSON.stringify(object))
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'longb1400767@gmail.com',
            pass: 'Tranbalong1'
        }
    });
    console.log('email: ' + req.body.email);
    var mailOptions;
    if (req.body.status == 'Chấp nhận') {
        mailOptions = {
        to: req.body.email,
        subject: 'Thông báo sự kiện ' + req.body.eventName,
        text: 'Hello',
        html:'<p><b>Chào bạn</b> '+ req.body.userName +'</p><br/>'+
            'Chúc mừng bạn đã đến với sự kiện của chúng tôi <br/>'+
            'Chúng tôi rất vinh hạnh khi được đón tiếp bạn ở <b>'+
            req.body.location+
            '</b><br/>Cám ơn bạn đã quan tâm đến sự kiện của chúng tôi<br/>'+
            '<br/>Vui lòng đem điện thoại để tiến hành điểm danh để nhận quà<br/>'+
            '<br/>Chúc bạn một ngày tốt lành <br/>'
        }
    } else {
        mailOptions = {
            to: req.body.email,
            subject: 'Thông báo sự kiện ' + req.body.eventName,
            text: 'Hello',
            html:'<p><b>Chào bạn</b> '+ req.body.userName +'</p><br/>'+
                'Bạn không được tham gia sự kiện này.<br/>'+
                'Hi vọng sẽ gặp lại bạn tại một sự kiện khác.'
            }
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            // console.log(error);
            // res.send('err');
        } else {
            // res.send('ok');
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