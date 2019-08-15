let rp = require('request-promise-native');

module.exports = {
    get: function(pid, token) {

        let reqOptions = {
            url: `https://api.optimizely.com/v2/events?project_id=${pid}`,
            headers: {'Authorization': `Bearer ${token}`},
            json: true,
            resolveWithFullResponse: true
        };

        return rp(reqOptions).then(function (response) {
            return response.body;
        }, function() {
            return [];
        });
    }
}