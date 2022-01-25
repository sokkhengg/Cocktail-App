import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "./CocktailCard";
import Pagination from "react-bootstrap/Pagination";

function CocktailList({ currentUser }) {

  const [cocktails, setCocktails] = useState('');
  const [currentPage, setCurrentPage] = useState(1)

   //grabs all cocktails
   useEffect(() => {
    fetch(`/cocktails?per_page=24&page=${currentPage}`)
      .then((r) => r.json())
      .then((cocktails) => {
        console.log(cocktails)
        setCocktails(cocktails)
      });
  }, [currentPage]);

  function handleNextClick() {
    setCurrentPage(currentPage + 1)
  }

  function handlePreviousClick() {
    if (currentPage >= 2)
      setCurrentPage(currentPage - 1)
    else
      console.log("can't go back anymore!")
  }

  function handlePageClick(page) {
    setCurrentPage(parseInt(page.target.text))
  }


  return (
    <>
<Container>
      <Row>
        <Col></Col>
        <Col xs={10} flex className="d-flex justify-content-center">
          <Pagination>
            {currentPage === 1 ? <Pagination.Prev disabled /> : <Pagination.Prev onClick={handlePreviousClick} /> }

            {currentPage === 1 ? <Pagination.Item active>{1}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{1}</Pagination.Item>}
            {currentPage === 2 ? <Pagination.Item active>{2}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{2}</Pagination.Item>}
            {currentPage === 3 ? <Pagination.Item active>{3}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{3}</Pagination.Item>}
            {currentPage === 4 ? <Pagination.Item active>{4}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{4}</Pagination.Item>}
            {currentPage === 5 ? <Pagination.Item active>{5}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{5}</Pagination.Item>}

            <Pagination.Next onClick={handleNextClick} />
          </Pagination>
        </Col>
        <Col></Col>
      </Row>
      </Container>

      <Container>
        <Row
          xs={1}
          md={3}
          className="g-4"
          className="d-flex justify-content-center"
        >
          {cocktails
            ? cocktails.map((cock) => (
                <CocktailCard key={cock.id} cocktail={cock} currentUser={currentUser} />
              ))
            : null}
        </Row>
      </Container>

      <Container>
      <Row>
        <Col></Col>
        <Col xs={10} flex className="d-flex justify-content-center">
          <Pagination>
            {currentPage === 1 ? <Pagination.Prev disabled /> : <Pagination.Prev onClick={handlePreviousClick} /> }

            {currentPage === 1 ? <Pagination.Item active>{1}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{1}</Pagination.Item>}
            {currentPage === 2 ? <Pagination.Item active>{2}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{2}</Pagination.Item>}
            {currentPage === 3 ? <Pagination.Item active>{3}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{3}</Pagination.Item>}
            {currentPage === 4 ? <Pagination.Item active>{4}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{4}</Pagination.Item>}
            {currentPage === 5 ? <Pagination.Item active>{5}</Pagination.Item> : <Pagination.Item onClick={handlePageClick}>{5}</Pagination.Item>}

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
