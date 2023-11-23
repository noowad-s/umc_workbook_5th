import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const onClickLogin = () => {
    navigate('/Home');
  };

  const handleBlurEmail = () => {
    // 이메일 유효성 검사를 위한 정규식
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if (!emailPattern.test(email)) {
        setErrorEmail('올바른 이메일 형식이 아닙니다.');
      } else {
        setErrorEmail('');
      }
  };

  const handleBlurPassword = () => {
    // 비밀번호 형식 검사를 위한 정규식
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
    
    if (!passwordPattern.test(password)) {
        setErrorPassword('영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요.');
      } else {
        setErrorPassword('');
      }
  };

  return (
    <div>
        <Title>이메일과 비밀번호를 입력해주세요.</Title>
      <form>
        <ul>
          <ListItem>
            <Text>이메일</Text>
          </ListItem>
          <ListItem>
            <InputField
              type="text"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlurEmail}
            />
            <Error>
              {errorEmail && <div>{errorEmail}</div>}
            </Error>
          </ListItem>
          <ListItem>
            <Text>비밀번호</Text>
          </ListItem>
          <ListItem>
            <InputField
              type="password"
              placeholder="비밀번호를 입력해주세요(영문, 숫자, 특수문자 포함 8자 이상)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleBlurPassword}
            />
            <Error>
              {errorPassword && <div>{errorPassword}</div>}
            </Error>
          </ListItem>
          <ListItem>
            <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
          </ListItem>
        </ul>
      </form>
    </div>
  );
};

export default Login;

export const ListItem = styled.li`
  list-style: none;
`;

export const Title = styled.div`
  margin-left: 340px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
`;


export const Text = styled.div`
  margin-left: 200px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const Error = styled.div`
  margin-left: 180px;
  margin-top: 10px;
  font-size: 14px;
  color: red;
`;

export const InputField = styled.input`
  width: 500px;
  height: 20px;
  padding: 12px 23px;
  margin-top: 10px;
  margin-left: 180px;
  background-color: white;
  color: black;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid #999999;
  `;

export const LoginBtn = styled.div`
  display: flex;
  width: 500px;
  height: 20px;
  padding: 12px 23px;
  margin-top: 30px;
  margin-left: 180px;
  background-color: #22254b;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  border-radius: 15px;
`;