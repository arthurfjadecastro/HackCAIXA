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
import { Email, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import {SimulateDialog} from "./Components/Dialogs"



function Home() { 
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };


  const isMobile = useMatchesSmartphone()
  return (
    <>
    <Box sx={{ flexGrow: 1 }} mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden", marginTop: 0 }}>
      <AppBar position="absolute" style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
      <Toolbar style={{ minHeight: "65px !important" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
          <Grid
            flexDirection={isMobile ? "column" : "row"}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6" component="div">
                SimulaCred CAIXA
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{
        background: '#F39200',
        color: 'white',
        borderRadius: '8px',
        padding: '8px 16px',
        fontWeight: 'bold',
        fontSize: '16px',
        '&:hover': {
          background: '#FFA726',
        },
      }} onClick={() => setIsOpenDialog(true)}>
                Simular
              </Button>
            </Grid>
          </Grid>
        </Typography>
      </Toolbar>
    </AppBar>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Slider pauseOnHover={false} {...settings}>
        <div>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ background: settings.gradientColor, p: 2 }}>
              <Typography style={{fontSize: isMobile ? 22 : 36}} className="classText" textAlign="center" variant="body1" component="div">
                Experimente o Aplicativo CAIXA e aproveite a praticidade de solicitar <span className="orange-text">crédito rápido</span>.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src="/img/logo1.png" alt="Slide 2" style={{ height: 'auto', objectFit: 'cover', maxWidth: "60%" }} />
            </Box>
          </Grid>
        </Grid>
      </div>
          <div>
            <Grid container style={{height: isMobile ? "50%" : "100%"}} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6} style={{ background: settings.gradientColor }}>
                <Typography style={{fontSize: isMobile ? 22 : 36}} className="classText" textAlign="center" variant="body1" component="div">
                  Solicite seu crédito na CAIXA com <span className="orange-text"> facilidade e segurança</span>.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
                <img src="/img/logo3.svg" alt="Slide 2" style={{ height: 'auto',width: "100%", objectFit: 'cover', maxWidth: "60%" }} />
              </Grid>
            </Grid>
          </div>
        </Slider>
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
