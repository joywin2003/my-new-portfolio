import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border: 0px solid white;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  background: transparent;
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 45px;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/mynewlogo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          {/* <Button>Hire Now</Button> */}
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
