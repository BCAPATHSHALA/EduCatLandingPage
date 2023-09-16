import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Logo from "../Layout/Logo";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Logo />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Footer />
    </div>
  );
};

export default Home;
