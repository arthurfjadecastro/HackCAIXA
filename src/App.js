import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useMatchesNotebooks, useMatchesSmartphone } from "./Components/Breakpoints"
// import { Route, BrowserRouter, Routes, Outlet, useNavigate } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AppBar, Grid, IconButton, Toolbar, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./slick-list.css"
// import { Box, Typography } from "@mui/material";
import { Email, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import {SimulateDialog} from "./Components/Dialogs"



function Home() { 
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
    // centerMode: true,
  };


  const query = useMatchesSmartphone()
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden", marginTop: 0 }}>
        <AppBar position="absolute" style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
          <Toolbar style={{ minHeight: "65px !important" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
            <Button variant="outlined" onClick={() => setIsOpenDialog(true)}>
              Simular
            </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden" }}>
          <Slider pauseOnHover={false} {...settings} style={{ width: "100%", padding: 0, flex: 1, display: "flex" }}> 
             <div style={{ padding: 0, display: "flex", flexDirection: "row" }}>
              <img src="/Images/logo1.png" alt="Slide 2" style={{ height: "auto", marginRight: "32px", objectFit: "cover", width: "100%", maxWidth: 1280 }} />
            </div>
            <div style={{ padding: 0, display: "flex", flexDirection: "row" }}>
              <img src="/Images/fundo24.png" alt="Slide 2" style={{ height: "auto", marginRight: "32px", objectFit: "cover", width: "100%" }} />
            </div>
          </Slider>
          <div>
          </div>
        </Box>
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, width: "100%", background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
            <h1>footer</h1>
        <Box p={3} style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
          <h1>footer</h1> 
        </Box>
      </Box>
      <SimulateDialog isOpen={isOpenDialog} setClose={setIsOpenDialog} />
    </>
  );
}



function Layout() {
  return (
    <div>
      <Home></Home>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
