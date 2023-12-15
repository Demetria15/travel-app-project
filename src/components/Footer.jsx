import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>GreenBuddyTrips</h1>
            <p>Discover the joy of exploring with a like-minded travel buddy, creating unforgettable memories that will last a lifetime. Choose your favorite spot and let the adventures begin!</p>
          </div>
          <div>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
