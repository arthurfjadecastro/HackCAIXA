import React, { useEffect, useState } from "react";
import { Grid, styled } from "@mui/material";

import { TitleText } from "./Resources";
import {
  BackButton,
  ButtonCEF,
  ButtonGroup,
} from "../../Buttons";
import { LoanDetails } from "../../Frames";
import TooltipInfo from "../../Frames/TooltipInfo";
import Item from "../../Frames/Item";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";



const FourthPage = ({ handleBack, ETLData, handlePageChange, dispatch, response }) => {
  // const [activeButton, setActiveButton] = useState("PRICE");





  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <TitleText>
            Agora escolha a modalidade que cabe em seu bolso
          </TitleText>
        </Grid>
        {/* <Grid
          item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TooltipInfo titleInfo={titleInfo} />
        </Grid> */}
        {/* <Grid item style={{ marginBottom: 40 }}>
          <ButtonGroup activeButton={activeButton} handleType={handleType} />
        </Grid> */}
        <Grid item style={{ flex: 1, width: "100%", maxWidth: "400px" }}>
        <RenderIf predicate={(ETLData && ETLData.PRICE) === undefined || (ETLData && ETLData.PRICE) === null}>
          <FullScreenLoading />
        </RenderIf>
        {/* <RenderIf predicate={ETLData !== undefined && ETLData !== null}>
        <RenderIf predicate={activeButton === "PRICE"}>
            <RenderIf predicate={ETLData && ETLData.PRICE}>
              <Grid container flexDirection={"column"}>
                <Grid
                  Item
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "16px",
                  }}
                >
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[0]?.valorJuros
                        : null
                    }
                    installmentAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[0]?.valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.PRICE ? ETLData.PRICE[0]?.numero : null
                    }
                  />
                </Grid>
                <Grid Item style={{ width: "100%", height: "100%" }}>
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[ETLData.PRICE.length - 1].valorJuros
                        : null
                    }
                    installmentAmount={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[ETLData.PRICE.length - 1].valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.PRICE
                        ? ETLData.PRICE[ETLData.PRICE.length - 1].numero
                        : null
                    }
                  />
                </Grid>
              </Grid>
            </RenderIf>
          </RenderIf>
          <RenderIf predicate={activeButton === "SAC"}>
            <RenderIf predicate={ETLData && ETLData.SAC}>
              <Grid container flexDirection={"column"}>
                <Grid
                  Item
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "16px",
                  }}
                >
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.SAC ? ETLData.SAC[0]?.valorJuros : null
                    }
                    installmentAmount={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[0]?.valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.SAC ? ETLData.SAC[0]?.numero : null
                    }
                  />
                </Grid>
                <Grid
                  Item
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "16px",
                  }}
                >
                  <LoanDetails
                    interesetAmount={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[ETLData.SAC.length - 1].valorJuros
                        : null
                    }
                    installmentAmount={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[ETLData.SAC.length - 1].valorPrestacao
                        : null
                    }
                    numberInstallment={
                      ETLData && ETLData.SAC
                        ? ETLData.SAC[ETLData.SAC.length - 1].numero
                        : null
                    }
                  />
                </Grid>
              </Grid>
            </RenderIf>
          </RenderIf>
        </RenderIf> */}
       
        </Grid>

        <Grid item>
          <Item>
            <ButtonCEF
              buttonTitle={"Continuar"}
              handlePageChange={handlePageChange}
              isContinueButtonEnabled={true}
            />
          </Item>
          <Item>
            <BackButton handleClick={handleBack} textButton={"Voltar"} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default FourthPage;
