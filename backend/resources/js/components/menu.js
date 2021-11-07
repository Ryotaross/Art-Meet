import React from 'react';
import { useState,useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function Menu(props) {
  const [searchBox,setSearchBox] = useState(false);
  const [place,setPlace] = useState([{name:""}]);
  const [lat,setLat] = useState("");
  const [lng,setLng] = useState("");

  const ariaLabel = { 'aria-label': 'description' };

  const Menu = styled.div `
    width:300px;
    margin:30px auto;
    padding:15px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 70px;
    &:hover {
      cursor: pointer;
      border-radius: 20px;
      color: white;
    }
  `;

  const MenuItem = styled.div `
    display:flex;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
  `;

  const SearchItem = styled.div `
    display:flex;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
  `;

  const handleSearchBox = () => {
    if(searchBox){
      setSearchBox(false);
    }else{
      setSearchBox(true);
    }
  }

  function geocode() {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: place.name }, (results, status) => {
      if (status === 'OK') {
        setLat(results[0].geometry.location.lat()),
        setLng(results[0].geometry.location.lng());
        props.Searchlat(results[0].geometry.location.lat());
        props.Searchlng(results[0].geometry.location.lng());
        console.log(123);
      }
    });
  }

  const handleInput = (event) => {
    event.preventDefault();
    setPlace({ ...place, name: event.target.value });
  };

  return(
    <>
      <Menu>
        <MenuItem>
          <Link to='/create'><Button variant="text" >新規登録</Button></Link>
          {/*<Button variant="text" onClick={handleSearchBox}>マップ検索</Button>*/}
        </MenuItem>
          {searchBox?
            <>
            <Card SearchItem = {SearchItem} place = {place} handleInput={handleInput} geocode={geocode} />
            </>
          :''}
      </Menu>
      <LoadScript googleMapsApiKey={"AIzaSyC5wGBoyJ4BGGZETLXsqmdmbadXcSPaPCM"}>
      </LoadScript>
    </>
  );
}

export default Menu;

const Card = (props) => {
  return(
  <React.Fragment >
    <props.SearchItem>
      <Input placeholder="Placeholder" sx={{mr:2}} value={props.place.name} onChange={props.handleInput} />
      <Button variant="contained" size="small" onClick={props.geocode}>検索</Button>
    </props.SearchItem>
  </React.Fragment>
  )
};