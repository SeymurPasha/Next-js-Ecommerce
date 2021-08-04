import dbConnect from '../../../utils/config';
import Cart from '../../../Model/Cart';

export default async (req, res) => {
  await dbConnect();

  const {
    query: { id },
  } = req;

  const userCart = await Cart.exists({ user_email: id });
  if (!userCart) {
    const cart = new Cart({ user_email: id, products: [] });
    cart.save();
  } else {
    try {
      const cart = await Cart.findOneAndUpdate({ user_email: id }, req.body, {
        new: true,
        runValidators: true,
      });

      if (!cart) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};