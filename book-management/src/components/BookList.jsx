import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import SingleBook from "../pages/SingleBook";
import { getBooks } from "../Redux/App/action";
import BookCard from "./BookCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function BookList() {
  const dispatch = useDispatch();
  const location=useLocation();
  const [searchParam]=useSearchParams();
  
  const books = useSelector((state) => state.AppReducer.books);
  useEffect(() => {
    if (location || books.length === 0) {
      const sortBy=searchParam.get("sortBy")
      let getBooksParams={
        params:{
          category:searchParam.getAll("category"),
        _sort:sortBy && "release_year",
        _order:sortBy,
        },
      }
      dispatch(getBooks(getBooksParams));
    }
  }, [location.search]);

 
  return (
    <>
      
        {books.length > 0 &&
          books.map((SingleBook) => {
            return (
              <>
                {/* <SimpleGrid columns={[2, null, 3]} spacing='40px'> */}
                <Link to={`/books/${SingleBook.id}`}>
                <BookCard key={SingleBook.id} bookData={SingleBook} />
                </Link>
                {/* </SimpleGrid>   */}
              </>
            );
          })}
    
    </>
  );
}

export default BookList;
