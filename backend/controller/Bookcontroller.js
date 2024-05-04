import Book from "../model/Bookmodel.js";

export const getBooks = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}