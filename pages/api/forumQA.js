import nextConnect from 'next-connect';
import databaseMiddleware from '../../middlewares/database';

const handler = nextConnect();
handler.use(databaseMiddleware);

handler.post(async (req, res) =>{

    const postSubmission = req.body;
    postSubmission = JSON.parse(postSubmission);
    const post = await req.db
    .collection("forum")
    .insertOne( 
        postSubmission,
        {timestamp: true}
    )

})

export default handler;