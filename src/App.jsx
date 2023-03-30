import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  About,
  Contact,
  Experience,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative  z-0">
          <Contact />
        </div>
      <section className="h-[50px] w-full flex justify-center items-center">
        <p className="text-secondary sm:text-[14px] text-[12px]">Marwan Oladele &copy;{new Date().getFullYear()}</p>
      </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
