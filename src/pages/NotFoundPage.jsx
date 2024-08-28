import React, {useEffect} from "react";

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <div
        className="page-title position-relative"
        data-aos="fade"
        style={{ "backgroundImage": "url('src/assets/img/hero-bg.jpg')" }}
      >
        <div className="container position-relative">
          <h1>
            Not Found <br />
          </h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
