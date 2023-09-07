import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';


const createToken = (_id) =>{   
    return jwt.sign({_id },process.env.JWT_SECRET,{expiresIn  : '3d'});
};

// user login async function
export const loginUser = async (req, res) => {
  // getting user details from the request body
  const { email, password } = req.body;

  try {
    // call to signIn function in user model to signIn
    const user = await User.signIn(email, password) || {};

    // get user name and id of the user
    const {name,_id} = user;

    // create token
    const accessToken = createToken(_id);

    // send response with user email, name and accesstoken to the browser
    res.status(200).json({email,name,accessToken});
  } catch (error) {

    // if error happens send error message
    res.status(400).json({ error: error.message });
  }
};


export const getUser = async (req, res) => {};

