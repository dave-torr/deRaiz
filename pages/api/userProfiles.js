import nextConnect from 'next-connect';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcrypt';
import dRaizMiddleware from '../../middlewares/middleware';
import isEmail from 'validator/lib/isEmail';
import { extractUser } from '../../utils/userHelper';

const handler = nextConnect();
handler.use(dRaizMiddleware);

//All relevant user stuff is made to pass through userProfiles API, using POST for signup, GET for login, DELETE, for Logout, and PATCH to update.
handler.get(async (req, res) => res.json({ user: extractUser(req) }));

handler.post(async (req, res) => {
  const { name, password } = req.body;
  const email = normalizeEmail(req.body.email); 
  if (!isEmail(email)) {
    res.status(400).send('Correo Electronico Invalido');
    return;
  }
  if (!password || !name) {
    res.status(400).send('Campo(s) faltantes');
    return;
  }
  // check if email existed
  if ((await req.db.collection('users')
    .countDocuments({ email })) > 0) {
    res.status(403).send('Correo Electronico previamente utilizado');
    return
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await req.db
    .collection('users')
    .insertOne({ 
      email, 
      password: hashedPassword, 
      name,
      savedRecipies: [],
      ownedProducts: null,
      savedPublications: [],
      likedPublications: [],
      userType: null,
      profilePic: null,
      signUpStream: "website",
      alias: null,
      subscription: null,
      forumPosts: [],
      userDetailUpdate: false,
       })
    .then(({ ops }) => ops[0]);
  req.logIn(user, (err) => {
    if (err) throw err;
    // when we finally log in, return the (filtered) user object
    res.status(201).json({
      user: extractUser(req),
    });
  });
});

/////////////////////////////////////////
/////////////////////////////////////////


export default handler;