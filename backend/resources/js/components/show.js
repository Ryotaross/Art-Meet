import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Show(props) {
  const[meat,setMeat] = useState({id: "",name: "",maker: "",materials: "",officialUrl: "",amazonUrl: "",rakutenUrl:"",startDay:""});
  
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

  useEffect(()=>{
    const file = new FormData()
    file.append("id", props.id);
    axios.post('http://localhost/api/meat/search',file)
    .then(res => {
      setMeat(res.data);
      console.log(res.data);
    })
  },[])

  return(
    <>
      <BackArrow>＜</BackArrow>
      <Image></Image>
      <Rectangle6>
        <Text>
        <Name>
          {meat.name}
        </Name>
        <Maker>
          {meat.maker}
        </Maker>
        <StartDay>
          {meat.startDay}
        </StartDay>
        <Content>
          原材料：{meat.materials}
        </Content>
        </Text>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{my:5}}>
          <Link to={meat.officialUrl}>
            <Button variant="contained" color="primary">
              公式
            </Button>
          </Link>
          <Link to={meat.amazonUrl}>
            <Button variant="contained" color="warning">
              Amazon
            </Button>
          </Link>
          <Link to={meat.rakutenUrl}>
            <Button variant="contained" color='error'>
              楽天
            </Button>
          </Link>
        </Stack>
      </Rectangle6>
    </>
  );
}

export default Show;