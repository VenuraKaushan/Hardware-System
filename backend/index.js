import  express  from "express";
import 'dotenv/config';
import cors from 'cors';
import dbConnect from "./configs/dbconfig";
import userRoutes from './routes/userRoutes.js';


const app = express();

const PORT = process.env.PORT || 6001;

//cors initialization
app.use(cors())

//initialize the json
app.use(express.json());

// config the urlEncoded middleware
app.use(express.urlencoded({extended : false}));

app.use((req,res,next)=>{
    console.log(`${req.method} =====> URL: ${req.url}`);
    next();
});

//config routes
app.get('/',(req,res)=>{
    res.send("Hardware PROJECT");
});

// forwarding to user routes
app.use("/user/",userRoutes);

app.listen(PORT,()=>{
    console.log(`🚀 Server is started on port ${PORT}`);
    dbConnect();
});