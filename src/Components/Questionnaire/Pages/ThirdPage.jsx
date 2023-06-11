import React, { useState } from "react";
import { Grid,styled } from "@mui/material";
import { TableContainerInfo, TitleText } from "./Resources";
import { BackButton, ButtonCEF, ButtonGroup, Carousel } from "../../Buttons";
import Item from "../../Frames/Item";
import { isPositiveNumber } from "../../Buttons/Validations";
import TooltipInfo from "../../Frames/TooltipInfo";
import { RenderIf } from "../../Utils";
import FullScreenLoading from "./Resources/FullScreenLoading";

const ThirdPage = ({ state, dispatch, handlePageChange, handleBack, ETLData,activeButton, handleType, titleInfo, handleOptionClick,selectedOption }) => {

  const isContinueButtonEnabled = isPositiveNumber(state.installments);

  


  return (
    <>
      <RenderIf predicate={(ETLData && ETLData.PRICE) === undefined || (ETLData && ETLData.PRICE) === null}>
        <FullScreenLoading />
      </RenderIf>
      <RenderIf predicate={ETLData && ETLData.PRICE}>
      <Grid
        style={{ maxWidth: 600 }}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <TitleText>Escolha sua <span style={{ color: "#FF6600" }}>modalidade</span>  e <span style={{ color: "#FF6600" }}>parcelas</span> ideais.</TitleText>
        </Grid>
        <Grid
          item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TooltipInfo titleInfo={titleInfo} />
        </Grid>
        <Grid item style={{ flex: 2, width: "100%" }}>
          <Item>
          <Grid item style={{ marginBottom: 0}}>
            <ButtonGroup activeButton={activeButton} handleType={handleType} />
            <TableContainerInfo  activeButton={activeButton}/>
          </Grid>
          </Item>
        </Grid>
            <Carousel
              activeButton={activeButton}
              ETLData={ETLData}
              state={state}
              dispatch={dispatch}
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
            />
        <Grid item>
          <Item>
            <ButtonCEF
              buttonTitle={"Continuar"}
              isContinueButtonEnabled={isContinueButtonEnabled}
              handlePageChange={handlePageChange}
            />
          </Item>
          <Item>
            <BackButton handleClick={handleBack} textButton={"Voltar"} />
          </Item>
        </Grid>
      </Grid>
      </RenderIf>
    </>
  );
};

export default ThirdPage;
