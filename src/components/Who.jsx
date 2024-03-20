import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import ComputersCanvas from "./canvas/computer";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1600px;
  display: flex;
`;

const Left = styled.div`
  flex: 5;
  padding: 40px 0px;
  padding-right: 100px;
  width: 800px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  padding-right: 50px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas> */}
          <ComputersCanvas />
          {/* <Img src="./img/desktop.jpeg" /> */}
        </Left>
        <Right>
          <Title>Explore My Projects</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I've Been Working On</Subtitle>
          </WhatWeDo>
          <Desc>
            Discover a collection of my creative projects and developments,
            showcasing my passion and skills.
          </Desc>
          <Button onClick={()=>{window.open("https://github.com/joywin2003?tab=repositories")}}>View My Projects</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
