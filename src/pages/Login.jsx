import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const userInfo = {
  email: 'test@test.com',
  password: '!234Qwer',
};

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [validEmail, setValidEmail] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);

  const EmailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    navigateHomeIfLogedIn();
    verifyEmail();
    verifyPassword();
    handleEnableButton();
  }, [userEmail, userPassword, validEmail, validPassword, enableButton]);

  const handleUserId = () => {
    setUserEmail(EmailRef.current.value);
  };

  const handleUserPassword = () => {
    setUserPassword(passwordRef.current.value);
  };

  const verifyEmail = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (userEmail.match(regExp) != null) {
      setValidEmail('confirm');
    } else if (userEmail === '') {
      setValidEmail('empty');
    } else {
      setValidEmail('deny');
    }
  };

  const verifyPassword = () => {
    const regExp =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (userPassword.match(regExp) != null) {
      setValidPassword('confirm');
    } else if (userPassword === '') {
      setValidPassword('empty');
    } else {
      setValidPassword('deny');
    }
  };

  const handleEnableButton = () => {
    if (validEmail && validPassword === 'confirm') {
      setEnableButton(true);
      buttonRef.current.disabled = false;
    } else {
      setEnableButton(false);
      buttonRef.current.disabled = true;
    }
  };

  const oathorizationCheck = (email, password) => {
    if (email != userInfo.email) {
      alert('이메일이 일치하지 않습니다.');
    } else if (password != userInfo.password) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      alert('로그인에 성공했습니다!');
      setUserInfoToLocalStorage(email, password);
      navigate('/');
    }
  };

  const setUserInfoToLocalStorage = (email, password) => {
    const userInfo = { email: email, password: password };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const handleOnClick = () => {
    oathorizationCheck(userEmail, userPassword);
  };

  const navigateHomeIfLogedIn = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/');
    }
  };

  return (
    <Container>
      <ContentBox>
        <Section>
          <Logo>
            <img alt="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} />
          </Logo>
        </Section>
        <Section>
          <InputWrap>
            <LoginInput
              ref={EmailRef}
              name="userId"
              onChange={handleUserId}
              type="text"
              placeholder="이메일"
              value={userEmail}
              verify={validEmail}
            />
            <LoginInput
              ref={passwordRef}
              name="userPassword"
              onChange={handleUserPassword}
              type="password"
              placeholder="비밀번호"
              value={userPassword}
              verify={validPassword}
            />
            <LoginBtn
              ref={buttonRef}
              enable={enableButton}
              onClick={handleOnClick}
            >
              로그인
            </LoginBtn>
          </InputWrap>
        </Section>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  background-color: #fff;
  border: 1px solid #d2d2d2;
  padding: 40px;
`;

const Section = styled.section``;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginInput = styled.input`
  width: 240px;
  height: 40px;
  margin-bottom: 10px;
  border: ${(props) =>
    props.verify === 'deny' ? '1px solid #f22f22' : '1px solid #d2d2d2'};
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 0 10px;
`;

const LoginBtn = styled.button`
  width: 240px;
  height: 40px;
  margin-top: 10px;
  border-radius: 4px;
  color: white;
  background-color: ${(props) => (props.enable ? '#0095f6' : '#ddd')};
  cursor: ${(props) => (props.enable ? 'pointer' : 'default')};
`;

const Logo = styled.div`
  width: 160px;
  margin: 0 auto;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
`;

export default Login;
