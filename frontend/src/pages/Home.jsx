import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home">
        <h1>Fall in Love with a Book Today</h1>
        <p>
          Are you yearning for adventure, knowledge, or simply a captivating
          escape? Look no further than Book Store! We're your one-stop shop for
          all things books, catering to every reader's taste.
        </p>
        <button onClick={() => navigate("/getbook")}>View Books</button>
      </section>
    </>
  );
}

export default Home;
