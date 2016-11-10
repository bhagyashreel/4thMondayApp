/*
var nodeMailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
*/

var travelApp = angular.module('traveller', [
        'ngSanitize',
        'ui.router', 'ui.select',
        'ui.bootstrap','validation', 'validation.rule',
        require('../compositions/DDmodule.js')
    ])
    .config(require('../routes/routes'))
    .constant('appName', 'traveller')
    .run(['$state', function ($state) {
        $state.go('home');
    }]);


travelApp.factory('Data', function () {
    return {
        FirstName: '',
        LastName: '',
        Email: '',
        Contact: '',
        Location: '',
        DepartureDt: '',
        ReturnDt: ''
    };
});
/*

// Sendmail route
travelApp.post('/sendmail', function(req, res){
    var options = {
        auth: {
            api_key: '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'
        }
    }
    var mailer = nodeMailer.createTransport(sgTransport(options));
    mailer.sendMail(req.body, function(error, info){
        if(error){
            res.status('401').json({err: info});
        }else{
            res.status('200').json({success: true});
        }
    });
});
*/
