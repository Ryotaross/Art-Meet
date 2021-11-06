import React from 'react';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Footer(props) {

  const Foot = styled.div `
    height:30%;
    width:100%;
    background-color:rgba(222,222,222,0.9);`
  
  return(
    <>
      <Foot>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfkZAJmwyBUD0PvWzhaW-oXuZTqJTAox-rBzBjR8UHCXaZ5pA/viewform?usp=sf_link">お問い合わせ</a>
      </Foot>
    </>
  );
}

export default Footer;