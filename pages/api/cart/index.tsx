import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/config';
import Cart from '../../../Model/Cart';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  await dbConnect();

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    query: { user_email },
    method,
  } = req;
  let cart;

  switch (method) {
    case 'GET':
      cart = await Cart.find({ user_email });
      res.status(200).json({ success: true, data: cart });
      break;
    case 'POST':
      cart = new Cart(req.body);
      cart.save();
      break;
    default:
  }
};