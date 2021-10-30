import React from 'react';
import styled from "styled-components";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Show from './show';
import LoadingInterface from './LoadingInterface';
import IndexMeats from './indexMeats';
import { sp,pc,vw } from '../media';

function Index() {
  const[show,setShow] = useState(false); 
  const[meats,setMeats] = useState([{id: "",name: "",maker: "",materials: "",officialUrl: "",amazonUrl: "",rakutenUrl:"",startDay:"",image:""}]);
  const[selectId,setSelectId] = useState();
  const[loading,setLoading] = useState(true);

  const Content = styled.div`
    width:80%;
    margin-top:30px;
    
  `;

  const ArtMeat = styled.span`
    width: 131px;
    height: 50px;
    font-family:  'Roboto', sans-serif;;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #cfb5b5;
    ${pc`
      font-size: 50px;
    `}
  `;

  const Subtitle = styled.span `
    display:block;
    font-family:  'Roboto', sans-serif;;
    font-size: 20px;
  `;

  const Line = styled.div `
    width: 348px;
    height: 1px;
    border: solid 1px #979797;
  `;

  const FlexBox = styled.div `
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:36px auto;
  `

  const Bitmap = styled.img `
    width: 91px;
    height: 85px;
    margin: 12px 6px 12px 10px;
  `

  const ItemName = styled.p`
    width: 208px;
    margin: 0 33px 5px 6px;
    font-family: 'Noto Serif JP', serif;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    color: #333;
  `

  const ItemMaker = styled.p`
    width: 216px;
    margin: 0 20px 5px 11px;
    font-family: 'Noto Serif JP', serif;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    color: #040404;
  `;

  const ItemStartDay = styled.p`
    width: 216px;
    margin: 0 20px 5px 11px;
    font-family: 'Noto Serif JP', serif;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    color: #040404;
  `;

  const Hash = styled.p `
    width: 38px;
    margin: 0 8px;
    font-family: 'Noto Serif JP', serif;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ff561b;
  `;

  const EndLine = styled.div `
    width: 348px;
    height: 1px;
    border: solid 1px #979797;
  `;

  useEffect(()=>{
    axios.get('http://localhost/api/meats')
    .then(res => {
      setMeats(res.data);
      console.log(res.data);
      setLoading(false);
    })
  },[]);

  const toggleDrawer = (open,id) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShow(open);
    setSelectId(id);
  };

  const list = (id) => (
    <Box
      sx={{ width: 390,mx:'auto'  }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Show id={id}/>
    </Box>
  );

  const image = (img) => {
    const image_path = "storage/image/" + img;
    return(
      <Bitmap src={image_path}/>
    );
  }

  const IndexMeat = (
    meats.map((meat) => 
    <React.Fragment key={meat.id}>
      <FlexBox onClick={toggleDrawer(true,meat.id)}>
        {image(meat.image)}
        <div>
          <ItemName>
            {meat.name}
          </ItemName>
          <ItemMaker>
            {meat.maker}
          </ItemMaker>
          <ItemStartDay>
            {meat.startDay}
          </ItemStartDay>
          {/*<Hash>
            #大豆
          </Hash>*/}
        </div>
      </FlexBox>
      <EndLine></EndLine>
    </React.Fragment>
    )
  ) 

  return(
    <>
      <Content>
        <ArtMeat>
          Art-Meat
        </ArtMeat>
        <Subtitle>
          人工肉特化型の情報サイトです。
          気になるものを食べてみよう！
        </Subtitle>
        <Line></Line>
        {IndexMeat}
        <Drawer
            anchor="bottom"
            open={show}
            onClose={toggleDrawer(false)}
            sx={{ width: 390,mx:'auto' }}
          >
            {list(selectId)}
        </Drawer>
      </Content>
    </>
    
  );
}

export default Index;