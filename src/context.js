import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("The Lord Of The Rings");
    const [books,setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTittle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            const res = await fetch(`${URL}${searchTerm}`);
            const data = await res.json();
            const {docs} = data;
            console.log(docs);

            if (docs) {
                const newBook = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;
                    return {
                        id: key,
                        author: author_name,
                        cover_id : cover_i,
                        edition_count : edition_count,
                        first_publish_year : first_publish_year,
                        title: title
                    } 
                });

                setBook(newBook);

                if (newBook.length > 1) {
                    setResultTitle("Your Search Result:");
                } else {
                    setResultTitle("No Search Result Found");
                }     
            } else {
                setBook([]);
                setResultTitle("No Search Result Found");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks] )
    
    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTittle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext); 
}

export {AppContext, AppProvider}