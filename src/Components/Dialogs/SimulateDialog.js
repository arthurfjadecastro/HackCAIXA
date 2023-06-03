import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import { Questionnaire } from '../Questionnaire';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimulateDialog({isOpen, setClose}) {
  const [page, setPage] = useState(1);
  console.log(page)

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => setClose(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setClose(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              SimuladorCred CAIXA
            </Typography>
            <Button autoFocus color="inherit" onClick={() => setPage(page + 1)}>
              continuar
            </Button>
          </Toolbar>
        </AppBar>
        <Box style={{display: "flex", height: "100%", padding: 45}}>
          <Questionnaire page={page}/>
        </Box>
      </Dialog>
    </div>
  );
}

export default SimulateDialog;