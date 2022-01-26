import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "./CocktailCard";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

function CocktailList({ currentUser }) {
  const [cocktails, setCocktails] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCocktails, setTotalCocktails] = useState();
  const [resultsPerPage, setResultsPerPage] = useState(24);
  const [likedCocktails, setLikedCocktails] = useState([])

  //grabs all cocktails
  useEffect(() => {
    fetch(`/cocktails?per_page=${resultsPerPage}&page=${currentPage}`)
      .then((r) => r.json())
      .then((cocktails) => {
        setCocktails(cocktails);
  })
  }, [currentPage, resultsPerPage]);

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
    .then(r => console.log(r))
   }, []);
   

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

//   const [cocktailSearch, setCocktailSearch] = useState('');
  

 
//   const cocktailsToDisplay = cocktails.filter((cocktail) => {
//     cocktail.name.toLowerCase().includes(cocktailSearch.toLowerCase())
//   }) 

// console.log(cocktails)
// console.log(cocktailsToDisplay)

  return (
    <>
      <Container id="top-pagination">
        <Row>
          <Col>

            <Form.Select
              aria-label="Results per page"
              onChange={handleResultsPerPage}
            >
              <option value="24">Results per page</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="72">72</option>
            </Form.Select>

          </Col>
          <Col xs={8} flex className="d-flex justify-content-center">
            <Pagination>
              {currentPage === 1 ? (
                <Pagination.Prev disabled id="page-next"/>
              ) : (
                <Pagination.Prev onClick={handlePreviousClick} id="page-next"/>
              )}
              <Pagination>{items}</Pagination>
              {currentPage === Math.ceil(totalCocktails / 24) ? (
                <Pagination.Next disabled id="page-next"/>
              ) : (
                <Pagination.Next onClick={handleNextClick} id="page-next"/>
              )}
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
            ? cocktails.map((cock) => (
                <CocktailCard
                  key={cock.id}
                  cocktail={cock}
                  currentUser={currentUser}
                  liked={true}
                />
              ))
            : null}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} flex className="d-flex justify-content-center">
            <Pagination>
              {currentPage === 1 ? (
                <Pagination.Prev disabled />
              ) : (
                <Pagination.Prev onClick={handlePreviousClick} />
              )}
              <Pagination>{items}</Pagination>
              {currentPage === Math.ceil(totalCocktails / 24) ? (
                <Pagination.Next disabled />
              ) : (
                <Pagination.Next onClick={handleNextClick} />
              )}
            </Pagination>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default CocktailList;
