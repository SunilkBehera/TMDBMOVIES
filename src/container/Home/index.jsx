import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";
import CardMoviesComponent from "../../components/CardMovies";
import PaginationComponent from "../../components/Pagination";


const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);

  // const API_KEY = process.env.REACT_API_KEY;

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=21fddb77f2e324d8cec1f07a7790a1af&page=${pageno}`
    );
    setContent(data.results);
    console.log(data);
    setPaginationno(data.total_pages);
  };

  useEffect(() => {
    GetDataTrending();
  }, []);

  const handleClick = (number)=>{
    setPageno(number);
}
useEffect(()=>{
  console.log('Trending Component didupdate mount');
  GetDataTrending();
  //eslint-disable-next-line
}, [pageno])


  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending </h1>
              <h3 className="txtCenter">Tv and Movie For You</h3>
            </section>
          </Col>

          {content && content.length > 0
            ? content.map((item, index) => {
                return <CardMoviesComponent key={item.id} data={item} mediaType="tv"/>;
              })
            : "Loading ...."}

                {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
