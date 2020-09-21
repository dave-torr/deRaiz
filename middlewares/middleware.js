import nextConnect from 'next-connect';
import databaseMiddleware from './database';
import session from './session';
import passport from "./../utils/passport"

const dRaizMiddleware = nextConnect();

dRaizMiddleware
  .use(databaseMiddleware)
  .use(session)
  .use(passport.initialize())
  .use(passport.session());

export default dRaizMiddleware;