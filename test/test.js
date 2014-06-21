var lazyLoader = require('../index');

describe('define without arguments', function() {
    var Handler = lazyLoader('./test/handlers');
    Handler.user.should.equal('test_in_user');
    Handler.admin.should.equal('test_in_admin');
});

describe('define with arguments', function() {
    var Handler = lazyLoader('./test/handlers', 'abc');
    Handler.user.should.equal('abc');
    Handler.admin.should.equal('abc');
});
