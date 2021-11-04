import React from 'react';
import styled from "styled-components";
import { useState,useEffect } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker, MapOptions,Maps  } from '@react-google-maps/api';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Show from './show';
import { sp,pc,vw } from '../media';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../style/common.css'

import Pins from './pins';
import GolfInfo from './golf-info';
import { autocompleteClasses } from '@mui/material';

const TOKEN = 'pk.eyJ1IjoicnlvdGFybzIwIiwiYSI6ImNrdml2cmhtZ2Jld2kyd3Q5ZHFudzhrcGQifQ.2zjaqGum-QE9BzQYuE4zCg'

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

function Index(props) {
  const [show,setShow] = useState(false); 
  const golfs = props.golfs;
  const [selectId,setSelectId] = useState();
  const [viewport, setViewport] = useState({
    latitude: 34.69821725408306,
    longitude: 135.5030768798753,
    zoom: 8,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState(null);

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
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 70px;
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
          Osaka-Short-Course
        </ArtMeat>
        <Subtitle>
          ショートコース情報サイトです。<br />
          現在は大阪限定です。
        </Subtitle>
      </Content>
      <div className="MapStyle">
        <MapGL
          {...viewport}
          width= "100%"
          height= "450px"
          margin-right="100px"
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
          onViewportChange={setViewport}
          mapboxApiAccessToken={TOKEN}
        >
          <Pins golf={golfs} onClick={setPopupInfo}/>
          {popupInfo && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popupInfo.lng}
              latitude={popupInfo.lat}
              closeOnClick={false}
              onClose={setPopupInfo}
            >
              <GolfInfo info={popupInfo} toggleDrawer={toggleDrawer} />
            </Popup>
          )}
          <GeolocateControl style={geolocateStyle} />
          <FullscreenControl style={fullscreenControlStyle} />
          <NavigationControl style={navStyle} />
          <ScaleControl style={scaleControlStyle} />
        </MapGL>
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