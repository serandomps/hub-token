var serand = require('serand');

serand.on('hub-token', 'info', function (id, token, done) {
    if (!done) {
        done = token;
        token = null;
    }
    var options = {
        method: 'GET',
        url: '/apis/v/tokens/' + id,
        headers: {
            'X-Host': 'accounts.serandives.com'
        },
        dataType: 'json',
        success: function (token) {
            done(false, token);
        },
        error: function () {
            done('permissions error');
        }
    };
    if (token) {
        options.headers['Authorization'] = 'Bearer ' + token;
    }
    $.ajax(options);
});