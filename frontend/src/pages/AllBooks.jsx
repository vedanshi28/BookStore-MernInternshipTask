import { Col } from "react-bootstrap";
import styled from "styled-components";
import BookCard from "../components/BookCard";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TailSpin } from "react-loader-spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  height: 100%;
`;

export const AllBooks = () => {
  const { books, fetchBooks } = useContext(AppContext);
  useEffect(() => {
    fetchBooks();
  });
  return (
    <section className="allbook">
      <Container maxWidth="xs">
        <Col size={12}>
          <h2 className="text">Available Books</h2>
          <Wrapper>
            <CardContainer>
              {!books ? (
                <div className="loader">
                  <TailSpin type="Bars" color="white" height={60} width={60} />
                </div>
              ) : (
                books.map((book) => <BookCard book={book} />)
              )}
            </CardContainer>
          </Wrapper>
        </Col>
      </Container>
    </section>
  );
};
export default AllBooks;
