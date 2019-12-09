const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('logger').express;
const sassMiddleware = require('node-sass-middleware');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const httpServer = express();

const config = require('config');
const staticDir =  config.get('httpServer:staticDir');
const viewsDir =  config.get('views:viewsDir');

// view engine setup
httpServer.set('views', viewsDir);
httpServer.set('view engine', 'pug');

httpServer.use(logger);
httpServer.use(express.json());
httpServer.use(express.urlencoded({ extended: false }));
httpServer.use(cookieParser());
httpServer.use(sassMiddleware({
  src: staticDir,
  dest: staticDir,
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
httpServer.use(express.static(staticDir));

const initRoutes = () => Promise.resolve().then(() => {
  httpServer.use('/', indexRouter);
  httpServer.use('/users', usersRouter);

  // catch 404 and forward to error handler
  httpServer.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  httpServer.use(function(err, req, res) {
      // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});

module.exports = httpServer;
module.exports.initRoutes = initRoutes;
