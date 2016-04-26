import config from './config';
import errorHandler from './lib/errorHandler';
import express from 'express';
import frontend from './frontend';
import modRewrite from 'connect-modrewrite';
import {toAPIUrl} from './lib/toAPIUrl'

const app = express();

// Use mode rewrite if need-be
app.use(modRewrite([
  `^/api/v1/(.*)$ ${toAPIUrl('')}/$1 [P]`
]));

app.use(frontend);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log('Server started at port %d', config.port);
});
