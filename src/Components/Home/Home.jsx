import React, { useState } from "react";
import { useMatchesSmartphone } from "../Breakpoints";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import Slider from "react-slick";
import { SimulateDialog } from "../Dialogs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}
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
                      src="/img/logonavbar.png"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        maxWidth: "96px",
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{
                      background: "#F39200",
                      color: "white",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      "&:hover": {
                        background: "#FFA726",
                      },
                    }}
                    onClick={() => setIsOpenDialog(true)}
                  >
                    Simular
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
                      Experimente o Aplicativo CAIXA e aproveite o{" "}
                      <span className="orange-text">crédito rápido</span>.
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
                      src="/img/logo1.png"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        maxWidth: "30%",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </div>
            {/* <div>
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
                    Solicite seu crédito na CAIXA com{" "}
                    <span className="orange-text"> facilidade e segurança</span>
                    .
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/img/logo3.svg"
                    alt="Slide 2"
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                      maxWidth: "60%",
                    }}
                  />
                </Grid>
              </Grid>
            </div> */}
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
              C150713 | Arthur de Castro
            </Typography>
          </Box>
        </Box>
      </Box>
      <SimulateDialog isOpen={isOpenDialog} setClose={setIsOpenDialog} />
    </>
  );
}

export default Home;
