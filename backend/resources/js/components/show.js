import React from 'react';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Show() {
  
  const BackArrow = styled.div`
    width: 16px;
    height: 19px;
  `;

  const Image = styled.div `
    width: 390px;
    height: 295px;
    padding: 20px 366px 256px 8px;
  `;

  const Rectangle6 = styled.div `
    width: 390px;
    height: 257px;
    padding: 18px 0 22px 0;
    background-color: #fff;
  `;

  const Text = styled.div `
    margin-top:18px;
    margin-left:30px;
  `;
  
  const Name = styled.p`
    width: 264px;
    margin: 0 96px 11.8px 9px;
    font-family: 'Noto Serif JP', serif;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    color: #333;
  `;

  const Maker = styled.p`
    width: 351px;
    margin: 5px 0 8px 18px;
    font-family: 'Noto Serif JP', serif;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #040404;
  `;

  const StartDay = styled.p`
    width: 142px;
    margin: 5px 78px 11.8px 18px;
    font-family: 'Noto Serif JP', serif;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #040404;
  `;

  const Content = styled.p `
    width: 112px;
    margin: 5px 108px 5px 18px;
    font-family: 'Noto Serif JP', serif;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: #040404;
  `;

  return(
    <>
      <BackArrow>＜</BackArrow>
      <Image></Image>
      <Rectangle6>
        <Text>
        <Name>
          商品名ー商品名ー商品名
        </Name>
        <Maker>
          日清食品
        </Maker>
        <StartDay>
          2021年1月1日発売
        </StartDay>
        <Content>
          原材料：大豆、油
        </Content>
        </Text>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{my:5}}>
          <Button variant="contained" color="primary">
            公式
          </Button>
          <Button variant="contained" color="warning">
            Amazon
          </Button>
          <Button variant="contained" color='error'>
            楽天
          </Button>
        </Stack>
      </Rectangle6>
    </>
  );
}

export default Show;