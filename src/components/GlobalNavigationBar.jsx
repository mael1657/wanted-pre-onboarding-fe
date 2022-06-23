import React from 'react';
import styled from 'styled-components';
import { MdSearch, MdLogout, MdHomeFilled } from 'react-icons/md';

const GlobalNavigationBar = () => {
  const handleLogout = () => {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <Section justifyContent="start">
          <Logo>
            <img alt="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} />
          </Logo>
        </Section>
        <Section justifyContent="center">
          <SearchBox>
            <MdSearch size={24} color="#b2b2b2" />
            <SearchInput placeholder="검색" />
          </SearchBox>
        </Section>
        <Section justifyContent="end">
          <Button>
            <MdHomeFilled size={24} />
          </Button>
          <Button onClick={handleLogout}>
            <MdLogout size={24} />
          </Button>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;

const Logo = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 5px;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background-color: #f4f4f4;
  width: 200px;
`;

const Button = styled.button`
  background-color: #fff;
  cursor: pointer;
  margin-left: 10px;
`;

export default GlobalNavigationBar;
