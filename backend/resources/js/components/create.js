import React from 'react';
import { useState } from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { blueGrey } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

function Create() {
  const[meat,setMeat] = useState({id: "",name: "",maker: "",materials: "",officialUrl: "",amazonUrl: "",rakutenUrl:"",startDay:""});
  const[image,setImage] = useState();
  const[errorCodes,setErrorCodes] = useState([])
  const[ErrorMessageJP,setErrorMessageJP] = useState([])
  const[ErrorMessageEN,setErrorMessageEN] = useState([])
  const[Error,setError] = useState(false)
  const[open, setOpen] = useState(false);
  const token = localStorage.getItem('token');
  const history = useHistory();

  const handleSubmit = () => {
    console.log(1);

    const file = new FormData()
    file.append("name", JSON.stringify(meat.name));
    file.append("maker", JSON.stringify(meat.maker));
    file.append("materials", JSON.stringify(meat.materials));
    file.append("officialUrl", JSON.stringify(meat.officialUrl));
    file.append("amazonUrl", JSON.stringify(meat.amazonUrl));
    file.append("rakutenUrl", JSON.stringify(meat.rakutenUrl));
    file.append("startDay", JSON.stringify(meat.startDay));
    file.append("image", image.files);

    axios
      .post('http://localhost/api/meat/create',{
        name:file.name,maker:file.maker,materials:file.materials,officialUrl:file.officialUrl,amazonUrl:file.amazonUrl,
        rakutenUrl:file.rakutenUrl,image:file.image,startDay:file.startDay
        },
        {
          headers: {
          'content-type': 'multipart/form-data',
          },
        }
      )
      .then(response => {
        console.log(response);
        console.log(2);
      })
      .catch(error => {
        console.log(error);
        console.log(3);
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const card = (
    <React.Fragment >
      <CardMedia sx={{ width:{ xs: 400, md: 800 },height:60,m:'auto',pt:2,fontSize: 20,bgcolor:blueGrey[800],color:grey[50]}}>
          新規作成２
      </CardMedia>
      <CardContent sx={{m:'auto',width:{ xs: 400, md: 800 },border:1,borderColor: 'grey.500',boxShadow: 1,bgcolor:grey[50]}}>
        <TextField
          fullWidth
          id="standard-required"
          label="商品名"
          variant="standard"
          sx={{my:2}}
          onChange={event => setMeat({ ...meat, name: event.target.value })}
        />
        <TextField
          fullWidth
          id="standard-required"
          label="販売メーカー"
          variant="standard"
          sx={{my:2}}
          onChange={event => setMeat({ ...meat, maker: event.target.value })}
        />
        <TextField
          fullWidth
          id="standard-required"
          label="原材料"
          variant="standard"
          sx={{my:2}}
          onChange={event => setMeat({ ...meat, materials: event.target.value })}
        />
        <TextField
          fullWidth
          id="standard-required"
          label="公式ページURL"
          variant="standard"
          sx={{my:2}}
          onChange={event => setMeat({ ...meat, officialUrl: event.target.value })}
        />
        <TextField
          fullWidth
          id="standard-required"
          label="AmazonURL"
          variant="standard"
          sx={{my:2}}
          onChange={event => setMeat({ ...meat, amazonUrl: event.target.value })}
        />
        <TextField
          fullWidth
          id="standard-required"
          label="楽天URL"
          variant="standard"
          sx={{my:2}}
          onChange={event => setMeat({ ...meat, rakutenUrl: event.target.value })}
        />
        <input type="date" 
        onChange={event => setMeat({ ...meat, startDay: event.target.value })}/>
        <input accept="image/*" multiple type="file" className="input" id="upload-img" 
        onChange={event => setImage(event.target.value)} />
        <Button variant="contained" sx={{m:1}} onClick={handleSubmit}>投稿</Button>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
        <div>
          <Box sx={{ minWidth: 275}} >
            <Card sx={{px:{ xs: 3, md: 10 },py:5}}>{card}</Card>
          </Box>
        </div>
    </>
  );
}

export default Create;