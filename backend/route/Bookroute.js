import  express  from 'express';
import { getBooks } from '../controller/Bookcontroller.js';

const bookrouter = express.Router();
bookrouter.get("/",getBooks)

export default bookrouter;
