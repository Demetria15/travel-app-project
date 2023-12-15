import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="public/asia.jpg"
        title="Your Journey Your Story Your Memory"
        text="Discover the joy of exploring with a like-minded travel buddy, creating unforgettable memories that will last a lifetime. Choose your favorite spot and let the adventures begin!"
        btnClass="show"
        buttonText="Plan trip"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
