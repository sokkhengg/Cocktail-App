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
  const [resultsPerPage, setResultsPerPage] = useState(48);
  const [likedCocktails, setLikedCocktails] = useState([]);
  const [likedAction, setLikedAction] = useState(false);

  //grabs all cocktails
  useEffect(() => {
    fetch(`/cocktails?per_page=${resultsPerPage}&page=${currentPage}`)
      .then((r) => r.json())
      .then((cocktails) => {
        setCocktails(cocktails);
      });
  }, [currentPage, resultsPerPage, likedAction]);

  useEffect(() => {
    fetch(`/cocktail-total`)
      .then((r) => r.json())
      .then((r) => setTotalCocktails(r));
  }, [resultsPerPage]);

  //getting likes, reviews, made status
  useEffect(() => {
    fetch(`/user_cocktails/1`)
      .then((r) => r.json())
      .then((r) => setLikedCocktails(r));
  }, [likedAction]);

  // create an array of the liked cocktail's ids
  const likedCocktailsIdArray = [];
  likedCocktails.map((c) => {
    likedCocktailsIdArray.push(c.cocktail.id);
  });

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
  for (
    let number = 1;
    number <= Math.ceil(totalCocktails / resultsPerPage);
    number++
  ) {
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

  // testing a seatch bar feature
  // const [cocktailSearch, setCocktailSearch] = useState("")
  // const [searchShow, setSearchShow] = useState(false)

  // console.log(cocktails)
  // console.log(cocktailsToDisplay)

  // const handleSearchChange = e => {
  //   setCocktailSearch(e.target.value);
  //   if (e.target.value === ""){
  //     setSearchShow(false);
  //   }
  //   else {
  //     setSearchShow(true);
  //   }
  //   }

  // function searchList() {
  //   if (searchShow) {
  //     return (
  //       <>
  //         <SearchList cocktails={cocktails}/>
  //       </>
  //     )
  //   }
  // }

  // second ways

  //  {/* <div >
  //     <input
  //       type="text"
  //       placeholder="Search by cocktail..."
  //       onChange={(e) => setCocktailSearch(e.target.value)}
  //     />

  //      {/* since we have multiple pages, we might need to graps all the cocktails from all the page and filter those */}
  //         {/* {cocktails.filter((val)=> {
  //           if (cocktailSearch === "") {
  //             return val
  //           } else if (val.name.toLowerCase().includes(cocktailSearch.toLowerCase()))
  //           return val
  //         }).map((val, key) => {
  //           return (
  //             <div key={key}>

  //               {/* <CocktailCard key={key}/> */}
  //               <p>{val.name}</p>
  //             </div>
  //           )
  //         })
  //       } */}
  //   {/* </div> */} */}

  if (currentPage === Math.ceil(totalCocktails / resultsPerPage) + 1) {
    setCurrentPage(1);
  }

  const [cocktailSearch, setCocktailSearch] = useState("");

  let cocktailsToDisplay = [];
  cocktailsToDisplay = cocktails.filter((cocktail) =>
    cocktail.name.toLowerCase().includes(cocktailSearch.toLowerCase())
  );

  if (currentPage === Math.ceil(totalCocktails / resultsPerPage) + 1) {
    setCurrentPage(1);
  }

  return (
    <>
      {/* <Container id="top-pagination">
        <Row>
          <Col></Col>
          <Col xs={8} flex className="d-flex justify-content-center">
            <Form.Select
              className="page-select"
              // aria-label="Results per page"
              onChange={handleResultsPerPage}
            >
              <option value="24">24 per page</option>
              <option value="48">48 per page</option>
              <option value="72">72 per page</option>
            </Form.Select>

            <Pagination>
              {currentPage === 1 ? (
                <Pagination.Prev disabled id="page-next" />
              ) : (
                <Pagination.Prev onClick={handlePreviousClick} id="page-next" />
              )}
              <Pagination>
                {currentPage > 1 ? (
                  <Pagination.Item onClick={handlePageClick}>
                    {currentPage - 1}
                  </Pagination.Item>
                ) : null}
                <Pagination.Item
                  active={currentPage}
                  className="page-item.active"
                >
                  {currentPage}
                </Pagination.Item>
                {currentPage < Math.ceil(totalCocktails / resultsPerPage) ? (
                  <Pagination.Item onClick={handlePageClick}>
                    {currentPage + 1}
                  </Pagination.Item>
                ) : null}
              </Pagination>
              <Pagination.Next onClick={handleNextClick} id="page-next" />
            </Pagination>
          </Col>
          <Col></Col>
        </Row>
      </Container> */}

      <Container>
        <Row>&nbsp;</Row>
        <Row>
          {/* <Col xs={8} flex className="d-flex justify-content-center">
            <Form.Select
              className="page-select"
              // aria-label="Results per page"
              onChange={handleResultsPerPage}
            >
              <option value="24">24 per page</option>
              <option value="48">48 per page</option>
              <option value="72">72 per page</option>
            </Form.Select>
            </Col>
             */}
          <Col xs={2}>
            <Form.Select
              aria-label="Results per page"
              onChange={handleResultsPerPage}
            >
              <option value="24">Results per page</option>
              <option value="24">24 per page</option>
              <option value="48">48 per page</option>
              <option value="72">72 per page</option>
            </Form.Select>
          </Col>
          <Col xs={8} flex className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev onClick={handlePreviousClick} />
              <Pagination>{items}</Pagination>
              <Pagination.Next onClick={handleNextClick} />
            </Pagination>
          </Col>
          <Col>

    <Form.Control type="text" placeholder="Search by cocktail..." onChange={(e) => setCocktailSearch(e.target.value)}/>

            </Col>
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
            ? cocktailsToDisplay.map((cock) => {
                if (likedCocktailsIdArray.includes(cock.id))
                  return (
                    <CocktailCard
                      key={cock.id}
                      cocktail={cock}
                      currentUser={currentUser}
                      liked={true}
                      setLikedAction={setLikedAction}
                      likedAction={likedAction}
                    />
                  );
                else
                  return (
                    <CocktailCard
                      key={cock.id}
                      cocktail={cock}
                      currentUser={currentUser}
                      liked={false}
                      setLikedAction={setLikedAction}
                      likedAction={likedAction}
                    />
                  );
              })
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
