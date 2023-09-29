import React, { useState } from "react";
import { useMatchesSmartphone } from "../Breakpoints";
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import Slider from "react-slick";
import { SimulateDialog } from "../Dialogs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";


function Home() {
  // State to open Questionnaire
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  // Settings to Carousel header in Home Page
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  // Custom Hook that identifies whether the resolution is in mobile
  const isMobile = useMatchesSmartphone();

  return (
    <>
      {/* Layout Home page */}
      <Box
        sx={{ flexGrow: 1 }}
        mx="auto"
        maxWidth="100%"
        style={{ width: "100%", overflow: "hidden", marginTop: 0 }}
      >
        {/* Navbar */}
        <AppBar
          position="absolute"
          style={{ background: "linear-gradient(261deg, #FFC1CD 12.59%, #FDD2C1 24.88%, #FEC983 39%, #FFC59F 51.29%, #FFC4B6 64.49%, #FBA0BB 82.25%, #F99294 100%)"
          }}
        >
          <Toolbar style={{ minHeight: "65px !important" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex", width: "100%" }}
            >
              <Grid
                flexDirection={"row"}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h6" component="div">
                    <img
                      src="/img/logo4.png"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        maxWidth: "124px",
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{
                      background: "#d31145",
                      color: "white",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      border: "none",
                      "&:hover": {
                        border: "none",
                        background: "#d31149",
                      },
                    }}
                    onClick={() => setIsOpenDialog(true)}
                  >
                    Contratar
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Toolbar>
        </AppBar>
        {/* Header */}
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Slider pauseOnHover={false} {...settings}>
            <div>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} md={6}>
                  <Box sx={{ background: settings.gradientColor, p: 2 }}>
                  <Typography
  style={{ fontSize: isMobile ? 22 : 36 }}
  className="classText"
  textAlign="center"
  variant="body1"
  component="div"
>
Faça seu procedimento estético <br></br> com a{" "}
  <span className="orange-text">Dr. Laser</span>
 
</Typography>

                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/img/bggg.png"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid
                container
                style={{ height: isMobile ? "50%" : "100%" }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ background: settings.gradientColor }}
                >
               <Typography
  style={{ fontSize: isMobile ? 22 : 36 }}
  className="classText"
  textAlign="center"
  variant="body1"
  component="div"
>
Experimente o Aplicativo da{" "}
  <span className="orange-text">Dr.Laser</span>
  {" "} <br></br>
  e descubra a beleza em um clique.
</Typography>

                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/img/cellphone.png"
                    alt="Slide 2"
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                      maxWidth: "40%",
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </Slider>
          {/* Footer */}
          <Box
            sx={{
              marginBottom: 2,
              textAlign: "center",
              backgroundColor: "transparent",
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              color: "white",
            }}
          >
           <Typography variant="body2" color="white">
      
          <IconButton
          style={{margin: 8}}
              edge="start"
              color="inherit"
              // onClick={() => setClose(false)}
              aria-label="close"
            >
              <Facebook />
              Facebook
            </IconButton>
            <IconButton
             style={{margin: 8}}
              edge="start"
              color="inherit"
              // onClick={() => setClose(false)}
              aria-label="close"
            >
              <Instagram />
              Instagram
            </IconButton>
            <IconButton
             style={{margin: 8}}
              edge="start"
              color="inherit"
              // onClick={() => setClose(false)}
              aria-label="close"
            >
              <WhatsApp />
              WhatsApp
            </IconButton>
        </Typography>
        
        <Typography variant="body2" color="white">
          Dr.Laser © copyright 2023 
        </Typography>
          </Box>
        </Box>
      </Box>
      <SimulateDialog isOpen={isOpenDialog} setClose={setIsOpenDialog} />
    </>
  );
}

export default Home;
