const mongoose = require('mongoose');

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  catch(e) {
    console.log(e)
  }
 
}


export default dbConnect;