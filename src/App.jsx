import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Footer from "./components/footer";
import {Announcement } from "./components/footer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed for your design
  
  return (
    <Container>
      {isMobile && <Announcement text="New portfolio is under development" />} {/* Show warning only on mobile devices */}
      <Hero />
      <Who />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
