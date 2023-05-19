import Link from 'next/link';
import styled from '@emotion/styled';
import PrettyBackground from '../components/PrettyBackground';

const CallToActionButton = styled.button`
  margin: 20px;
  padding: 20px;
  font-size: 50px;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    #f857a6 0%,
    #ff5858 51%,
    #f857a6 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 0 20px #eee;
  display: block;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #fbfbfb;
  }
`;

const Logo = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: sans-serif;
  font-size: 6rem;
  background: linear-gradient(
    to right,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Home = () => (
  <PrettyBackground className="home">
    <Logo>renderme.ai</Logo>
    <h2>Power tools for AI art creators</h2>
    <CallToActionButton>
      <Link href="/start">Get Started</Link>
    </CallToActionButton>
  </PrettyBackground>
);

export default Home;
