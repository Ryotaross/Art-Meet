import React from 'react';
import styled from "styled-components";
import { useState,useEffect } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker, MapOptions,Maps  } from '@react-google-maps/api';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Show from './show';
import { sp,pc,vw } from '../media';

function Index(props) {
  const[show,setShow] = useState(false); 
  const golfs = props.golfs;
  const[selectId,setSelectId] = useState();

  const containerStyle = {
    width: "90%",
    height: "450px",
    marginRight: "auto",
    marginLeft: "auto",
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
  };
  
  const center = {
    lat: 33.566255900000010000,
    lng: 130.715857000000000000,
  };

  const Content = styled.div`
    width:90%;
    margin:30px auto;
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
    font-size: 15px;
  `;

  const List = styled.div `
    overflow: scroll;
    width:450px;
    height: 400px;
    margin:30px auto;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    &:hover {
      cursor: pointer;
      border-radius: 20px;
      color: white;
    }
  `

  const FlexBox = styled.div `
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:36px auto;
  `

  const Bitmap = styled.img `
    width: 120px;
    height: 100%;
    margin: 5px 6px 12px 33px;
    object-fit:cover;
  `

  const ItemName = styled.p`
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
    width: 95%;
    height: 1px;
    margin:0 auto;
    border: solid 1px #979797;
  `;


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
    golfs.map((golf) => 
    <React.Fragment key={golf.id}>
      <FlexBox onClick={toggleDrawer(true,golf.id)}>
        {image(golf.image)}
        <div>
          <ItemName>
            {golf.name}
          </ItemName>
          <ItemMaker>
            {golf.address}
          </ItemMaker>
          <ItemStartDay>
            {golf.price}
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

  const IndexMap = (
    golfs.map((golf) => 
    <React.Fragment key={golf.id}>
      <Marker position={{lat : parseFloat(golf.lat),lng : parseFloat(golf.lng)}}/>
        <InfoWindow position={{lat : parseFloat(golf.lat),lng : parseFloat(golf.lng)}} >
          <a onClick={toggleDrawer(true,golf.id)}>{golf.name}</a>
        </InfoWindow>
    </React.Fragment>
    )
  ) 

  return(
    <>
      <Content>
        <ArtMeat>
          Osaka-Short-Course
        </ArtMeat>
        <Subtitle>
          ショートコース情報サイトです。<br />
          現在は大阪限定です。
        </Subtitle>
      </Content>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyC5wGBoyJ4BGGZETLXsqmdmbadXcSPaPCM">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {IndexMap}
            <Drawer
              anchor="bottom"
              open={show}
              onClose={toggleDrawer(false)}
              sx={{ width: 390,mx:'auto' }}
            >
              {list(selectId)}
            </Drawer>
          </GoogleMap>
        </LoadScript>
      </div>
      <List>
        {IndexMeat}
        <Drawer
            anchor="bottom"
            open={show}
            onClose={toggleDrawer(false)}
            sx={{ width: 390,mx:'auto' }}
          >
            {list(selectId)}
        </Drawer>
      </List>
    </>
    
  );
}

export default Index;