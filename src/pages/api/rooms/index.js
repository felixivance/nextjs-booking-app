import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';

import { allRooms, newRoom } from '../../../controllers/roomController';

const handler = nc();

dbConnect();

handler.get(allRooms);

handler.post(newRoom)

export default handler;