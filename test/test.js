let request = require('supertest');
let app = require('../index.js');

describe('GET /', function() {
    it('when navigating to root path, app responds with text hello world', function(done) {
        // navigate to root and check that the response is "hello world"
        request(app).get('/').expect('hey4 world', done);
    });
});