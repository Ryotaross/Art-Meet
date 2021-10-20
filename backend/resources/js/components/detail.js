import React from 'react';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Detail() {
  
  const BackArrow = styled.div`
    width: 16px;
    height: 19px;
    background-color: #323a44;
  `;

  const Bitmap = styled.div `
    width: 390px;
    height: 295px;
    padding: 20px 366px 256px 8px;
  `

  const Rectangle6 = styled.div `
    width: 390px;
    height: 257px;
    padding: 18px 0 22px 0;
    background-color: #fff;
  `
  const Text = styled.div `
    margin-top:18px;
    margin-left:30px;
  `
  
  const ItemName = styled.p`
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
  `

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

  const OfficialBtn = styled.button `
    width: 105px;
    height: 53px;
    margin: 8.2px 5px 0 0;
    padding: 15.7px 28.6px 16.6px 28.2px;
    border-radius: 100px;
    border: solid 4px #4b4f63;
  `;

  const officialText = styled.span `
    width: 48.1px;
    height: 20.7px;
    font-family: YuKyo;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #4b4f63;
  `;

  const AmazonBtn = styled.button `
    width: 105px;
    height: 53px;
    margin: 8.2px 5px 0 5px;
    padding: 15.7px 11.8px 16.6px 11.2px;
    border-radius: 100px;
    border: solid 4px #eb7a23;
  `;

  const AmazonText = styled.span `
    width: 82px;
    height: 20.7px;
    font-family: YuKyo;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #eb7a23;
  `;

  const RakutenBtn = styled.button`
    width: 105px;
    height: 53px;
    margin: 8.2px 5px 0 0;
    padding: 15.7px 28.6px 16.6px 28.2px;
    border-radius: 100px;
    border: solid 4px #e41919;
  `;

  const RakutenText = styled.span `
    width: 48.1px;
    height: 20.7px;
    font-family: YuKyo;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #e41919;
  `;

  return(
    <>
      <BackArrow></BackArrow>
      <Bitmap></Bitmap>
      <Rectangle6>
        <Text>
        <ItemName>
          商品名ー商品名ー商品名
        </ItemName>
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
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success">
            公式
          </Button>
          <Button variant="contained" color="success">
            Amazon
          </Button>
          <Button variant="contained" color="success">
            楽天
          </Button>
        </Stack>
      </Rectangle6>
    </>
  );
}

export default Detail;