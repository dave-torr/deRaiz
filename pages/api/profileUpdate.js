import dRaizMiddleware from '../../middlewares/middleware';
import nextConnect from 'next-connect';

import multer from 'multer';
const upload = multer({ dest: '/tmp' });
import { v2 as cloudinary } from 'cloudinary'

const handler = nextConnect();
handler.use(dRaizMiddleware);

handler.patch( upload.single('profilePicture'), async (req, res) =>{
    if (!req.user) {
    req.status(401).end();
    return;
  }
  let profilePictureRes;
    if (req.file) {
      const image = await cloudinary.uploader.upload(req.file.path, {
        width: 512,
        height: 512,
        crop: 'fill',
      });
      profilePictureRes = image.secure_url;
    } else {
      profilePictureRes = req.body.profilePic;
    }
    console.log("req.body", req.body)
  const {alias, userType, ownedProducts, name} = req.body;
  await req.db.collection("users").updateOne(
    { _id: req.user._id },
    { $set: 
      { 
        name: name,
        alias: alias, 
        userType: userType,
        ownedProducts: ownedProducts,
        profilePic: profilePictureRes
        }, 
    },
  );
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;