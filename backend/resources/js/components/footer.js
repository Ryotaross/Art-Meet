import React from 'react';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Footer(props) {

  const Foot = styled.div `
    height:80px;
    width:100%;
    background-color:rgba(222,222,222,0.9);
  `
  
  const Inquiry = styled.a `
    font-size:20px;
    font-weight:bold;
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "メイリオ", sans-serif;
    text-decoration: none;
    margin-left:20px;
    text-align: center;
    align-items: center;
    `

  return(
    <>
      <Foot>
        <Inquiry target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfkZAJmwyBUD0PvWzhaW-oXuZTqJTAox-rBzBjR8UHCXaZ5pA/viewform?usp=sf_link">お問い合わせ</Inquiry>
      </Foot>
    </>
  );
}

export default Footer;