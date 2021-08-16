import dbConnect from '../../../utils/config';
import Cart from '../../../Model/Cart';

export default async (req, res) => {
  await dbConnect();

  const {
    query: { id },
  } = req;

  console.log('cart is :' , req.body)

  const userCart = await Cart.exists({ user_email: id });
  if (!userCart) {
    const cart = new Cart({ user_email: id, products: [] });
    cart.save();
  } else {
    try {
      Cart.findOneAndReplace({ user_email: id }, { user_email: id, products : req.body.products}, {
        new:true,
      }, (error, data) => {
        if(error) {console.log(error)}
        else {console.log(data)}
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};