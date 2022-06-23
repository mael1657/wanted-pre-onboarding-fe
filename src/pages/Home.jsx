import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GlobalNavigationBar from '../components/GlobalNavigationBar';
import Feed from '../components/Feed';
import { useFeed } from '../hooks/useFeed';

const Home = () => {
  const navigate = useNavigate();

  const LoginCheck = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/login');
    }
  };

  const { isLoading, error, data } = useFeed();

  useEffect(() => {
    LoginCheck();
  }, []);

  if (isLoading) return 'Loading...';

  if (error) return 'error is occured:' + error.message;

  return (
    <Container>
      <GlobalNavigationBar />
      <Contents>
        {data?.map((data) => (
          <Feed
            key={data.id}
            feedId={data.id}
            image={data.img}
            userName={data.userName}
            comments={data.comments}
          />
        ))}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  background-color: #f4f4f4;
`;

const Contents = styled.div`
  padding-top: 80px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export default Home;
