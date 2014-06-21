#Lazy-Loader: Sexy components loading.

##Scene

Without Lazy-loader

    var sign = require('./controllers/sign');
    var site = require('./controllers/site');
    var user = require('./controllers/user');
    var message = require('./controllers/message');
    var topic = require('./controllers/topic');
    var reply = require('./controllers/reply');
    var rss = require('./controllers/rss');
    var upload = require('./controllers/upload');
    var assets = require('./controllers/static');
    var tools = require('./controllers/tools');
    var auth = require('./middlewares/auth');
    var limit = require('./middlewares/limit');
    var status = require('./controllers/status');
    var github = require('./controllers/github');
    var search = require('./controllers/search');

    app.post('/signout', sign.signout);
    app.get('/signin', sign.showLogin);
    app.post('/signin', sign.login);
    app.get('/active_account', sign.active_account);

    // password
    app.get('/search_pass', sign.showSearchPass);
    app.post('/search_pass', sign.updateSearchPass);
    app.get('/reset_pass', sign.reset_pass);
    app.post('/reset_pass', sign.update_pass);

    // user
    app.get('/user/:name', user.index);
    app.get('/setting', user.showSetting);
    app.post('/setting', user.setting);
    ...
    ..

refer to: https://github.com/cnodejs/nodeclub/blob/master/routes.js

Lazy-loader is cool

    var lazyLoader = require('lazy-loader');
    var Controller = lazyLoader('./controllers');

    app.post('/signout', Controller.sign.signout);
    app.get('/signin', Controller.sign.showLogin);
    app.post('/signin', Controller.sign.login);
    app.get('/active_account', Controller.sign.active_account);

    // password
    app.get('/search_pass', Controller.sign.showSearchPass);
    app.post('/search_pass', Controller.sign.updateSearchPass);
    app.get('/reset_pass', Controller.sign.reset_pass);

##Install 

    npm install lazy-loader

##Example

    var lazyLoader = require('lazy-loader');
    var Controller = lazyLoader('./controllers');

    app.post('/signout', Controller.sign.signout);
    app.get('/signin', Controller.sign.showLogin);

##API

###lazyLoader(pathName, args...)

- pathName handlers path.
- args transfer args to handlers.
    
