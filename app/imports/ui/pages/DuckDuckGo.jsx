import React from 'react';
import Container from 'react-bootstrap/Container';
import TopMenu from '../components/TopMenu';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import Info from '../components/Info';
import Cards from '../components/Cards';
import GreenBackground from '../components/GreenBackground';
import FAQs from '../components/FAQs';

const DuckDuckGo = () => (
  <Container fluid className="p-0">
    <TopMenu />
    <Logo />
    <SearchBar />
    <Info />
    <Cards />
    <GreenBackground />
    <FAQs />
  </Container>
);
export default DuckDuckGo;
