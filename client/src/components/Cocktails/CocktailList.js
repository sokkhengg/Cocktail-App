import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "./CocktailCard";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

function CocktailList({ currentUser }) {
  const [cocktails, setCocktails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCocktails, setTotalCocktails] = useState();
  const [resultsPerPage, setResultsPerPage] = useState(24);
  const [likedCocktails, setLikedCocktails] = useState([])
  const [likedAction, setLikedAction] = useState(false)

  //grabs all cocktails
  useEffect(() => {
    fetch(`/cocktails?per_page=${resultsPerPage}&page=${currentPage}`)
      .then((r) => r.json())
      .then((cocktails) => {
        setCocktails(cocktails);
  })
  }, [currentPage, resultsPerPage, likedAction]);

  useEffect(() => {
    fetch(`/cocktail-total`)
      .then((r) => r.json())
      .then((r) => setTotalCocktails(r));
  }, [resultsPerPage]);

  //getting likes, reviews, made status
  useEffect(() => {
    //fetch(`/user_cocktails/${currentUser.id}`)
    fetch(`/user_cocktails/1`) // hard-coded for testing!!!
    .then(r => r.json())
    .then(r => setLikedCocktails(r))
   }, [likedAction]);

   // create an array of the liked cocktail's ids
   const likedCocktailsIdArray = []
   likedCocktails.map(c => {
     likedCocktailsIdArray.push(c.cocktail.id) })
   

  function handleNextClick() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousClick() {
    setCurrentPage(currentPage - 1);
  }

  function handlePageClick(page) {
    setCurrentPage(parseInt(page.target.text));
  }

  function handleResultsPerPage(e) {
    setResultsPerPage(parseInt(e.target.value));
  }

  let items = [];
  for (let number = 1; number <= Math.ceil(totalCocktails / resultsPerPage ); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={handlePageClick}
      >
        {number}
      </Pagination.Item>
    );
  }

  const [cocktailSearch, setCocktailSearch] = useState('')
//    const cocktailsToDisplay = cocktails.filter((cocktail) => {
//     cocktail.name.toLowerCase().includes(cocktailSearch.toLowerCase())
//   }) 
// console.log(cocktails)
// console.log(cocktailsToDisplay)

if (currentPage === Math.ceil(totalCocktails/resultsPerPage)+1) {
   setCurrentPage(1)
}

  return (
    <>
      <Container id="top-pagination">
        <Row>
          <Col>

            

          </Col>

          <Col xs={8} flex className="d-flex justify-content-center">
            <Form.Select
            className='page-select'
              // aria-label="Results per page"
              onChange={handleResultsPerPage}
            >
              {/* <option value="24">Results per page</option> */}
              <option value="24">24 per page</option>
              <option value="48">48 per page</option>
              <option value="72">72 per page</option>
            </Form.Select>
            <Pagination>
              
              {currentPage === 1 ? (
                <Pagination.Prev disabled id="page-next"/>
              ) : (
                <Pagination.Prev onClick={handlePreviousClick} id="page-next"/>
              )}
              <Pagination>
                {currentPage > 1 ?
              <Pagination.Item onClick={handlePageClick}>
                {currentPage-1}
              </Pagination.Item> : null }
              <Pagination.Item active={currentPage} className='page-item.active' >
                {currentPage}
              </Pagination.Item>
              {currentPage < (Math.ceil(totalCocktails/resultsPerPage)) ?
              <Pagination.Item onClick={handlePageClick}>
                {currentPage+1}
              </Pagination.Item> : null }
              </Pagination>
                <Pagination.Next onClick={handleNextClick} id="page-next"/>
            </Pagination>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {/* <div >
        <input
          type="text"
          placeholder="Search by cocktail..."
          onChange={(e) => setCocktailSearch(e.target.value)}
        />
      </div> */}

      <Container>
        <Row
          xs={1}
          md={3}
          className="g-4"
          className="d-flex justify-content-center"
        >
          
          {cocktails
            ? cocktails.map((cock) => {
                if (likedCocktailsIdArray.includes(cock.id)) 
                   return <CocktailCard
                  key={cock.id}
                  cocktail={cock}
                  currentUser={currentUser}
                  liked={true}
                  setLikedAction={setLikedAction}
                  likedAction={likedAction}
                  /> 
                 else 
                  return <CocktailCard
                  key={cock.id}
                  cocktail={cock}
                  currentUser={currentUser}
                  liked={false}
                  setLikedAction={setLikedAction}
                  likedAction={likedAction}
                />
                
            }
              )
            : null}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} flex className="d-flex justify-content-center">
            <Pagination>
                <Pagination.Prev onClick={handlePreviousClick} />
              <Pagination>{items}</Pagination>
                <Pagination.Next onClick={handleNextClick} />
            </Pagination>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default CocktailList;
