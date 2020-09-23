import { extractUser } from '../../utils/userHelper';
import dRaizMiddleware from '../../middlewares/middleware';
import nextConnect from 'next-connect';
import passport from "../../utils/passport"

const handler = nextConnect();

handler.use(dRaizMiddleware);

handler.post(passport.authenticate("local"), (req, res) =>{
    res.json({ user: extractUser(req.user)})
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;