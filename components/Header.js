// import classes from '../styles/Header.module.css';
import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Paper, Link, SvgIcon } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@material-ui/core';

function LogoIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M92.11,184.26H70.86v14a7.28,7.28,0,0,0,7.27,7.27h6.71a7.28,7.28,0,0,0,7.27-7.27ZM72,185.38H91V191H84.28v6.71H78.69V191H72Zm19,12.86a6.16,6.16,0,0,1-6.15,6.15H78.13A6.16,6.16,0,0,1,72,198.24v-6.15h5.59v6.71H85.4v-6.71H91v6.15Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M101.88,190.86h-2.6v2.35h-.93v-5.6h3.71v.81H99.28v1.64h2.6Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M105.36,193.21l0-.47a1.41,1.41,0,0,1-1.32.55,1.48,1.48,0,0,1-1.09-.34,1.27,1.27,0,0,1-.34-.93q0-1.29,1.53-1.29h1.16v-.32a.75.75,0,0,0-.86-.85,1.09,1.09,0,0,0-.65.17.49.49,0,0,0-.23.42v.07h-.83v-.07a1.15,1.15,0,0,1,.44-.92,2,2,0,0,1,1.3-.36c1.14,0,1.71.52,1.71,1.57v2.77Zm-1.12-.6a1,1,0,0,0,.77-.25.9.9,0,0,0,.25-.67v-.31h-1c-.52,0-.77.2-.77.61S103.72,192.61,104.24,192.61Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M108.1,192v1.22h-.88v-5.84h.88v3.48l1.7-1.89h1l-1.62,1.78,1.72,2.47h-1l-1.26-1.83Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M114.34,193.21l0-.56a1.4,1.4,0,0,1-1.3.65,1.42,1.42,0,0,1-1.09-.42,1.52,1.52,0,0,1-.4-1.1V189h.88v2.61c0,.63.29.94.88.94s1-.37,1-1.13V189h.88v4.25Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M117.14,193.21h-.89v-5.84h.89Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M120.56,192.47v.74H120a1.62,1.62,0,0,1-1.21-.36,1.41,1.41,0,0,1-.33-1v-2.19h-.58V189h.58v-1.08h.89V189h1.09v.68h-1.09v2.14a.67.67,0,0,0,.17.52.89.89,0,0,0,.62.16Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M123.87,193.21l0-.47a1.41,1.41,0,0,1-1.32.55,1.48,1.48,0,0,1-1.09-.34,1.31,1.31,0,0,1-.34-.93c0-.86.52-1.29,1.54-1.29h1.16v-.32a.76.76,0,0,0-.87-.85,1.09,1.09,0,0,0-.65.17.49.49,0,0,0-.23.42v.07h-.83v-.07a1.15,1.15,0,0,1,.44-.92,2,2,0,0,1,1.3-.36c1.14,0,1.72.52,1.72,1.57v2.77Zm-1.12-.6a1,1,0,0,0,.77-.25.9.9,0,0,0,.26-.67v-.31h-1c-.51,0-.77.2-.77.61S122.24,192.61,122.75,192.61Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M101.07,202.16l0-.56a1.39,1.39,0,0,1-1.3.64,1.45,1.45,0,0,1-1.1-.42,1.52,1.52,0,0,1-.4-1.09v-2.82h.88v2.61c0,.63.3.94.89.94s1-.38,1-1.13V197.9h.88v4.25h-.78Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M103.85,202.16H103v-4.25h.78l0,.56a1.37,1.37,0,0,1,1.29-.65,1.33,1.33,0,0,1,1.34.8A1.17,1.17,0,0,1,107,198a1.78,1.78,0,0,1,.89-.21,1.41,1.41,0,0,1,1.1.44,1.73,1.73,0,0,1,.39,1.18v2.72h-.87v-2.51c0-.7-.3-1.05-.89-1.05s-1,.38-1,1.13v2.43h-.88v-2.51c0-.7-.3-1.05-.89-1.05s-1,.38-1,1.13v2.43Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M113.87,200.93a1.38,1.38,0,0,1-.08.45,1.19,1.19,0,0,1-.25.41,1.17,1.17,0,0,1-.55.33,2.77,2.77,0,0,1-.87.12,2.47,2.47,0,0,1-.9-.14,1.3,1.3,0,0,1-.57-.4,1.59,1.59,0,0,1-.28-.53,2,2,0,0,1-.09-.61v-1a1.8,1.8,0,0,1,.44-1.21,1.75,1.75,0,0,1,1.39-.49,2.2,2.2,0,0,1,.85.14,1.34,1.34,0,0,1,.56.41,1.77,1.77,0,0,1,.29.54,2,2,0,0,1,.09.61v.76h-2.75v.37a1,1,0,0,0,.23.66.92.92,0,0,0,.73.26,1.09,1.09,0,0,0,.72-.2.62.62,0,0,0,.21-.47v-.06h.83v.09Zm-2.72-1.54v.24h1.9v-.24a.85.85,0,0,0-1-.9.94.94,0,0,0-.73.26A1,1,0,0,0,111.15,199.39Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M115.72,202.16h-.88v-4.25h.78l0,.57a1.65,1.65,0,0,1,2.45-.21,1.66,1.66,0,0,1,.4,1.17v2.72h-.88v-2.51c0-.7-.31-1.05-.91-1.05a.92.92,0,0,0-.78.31,1.37,1.37,0,0,0-.23.82v2.43Z"
        transform="translate(-70.86 -184.26)"
      />
      <path
        d="M120.5,202.16h-.89v-4.25h.89Zm.72-5.94-.82,1.15h-.72l.56-1.15Z"
        transform="translate(-70.86 -184.26)"
      />
    </SvgIcon>
  );
}

const useStyles = makeStyles({
  btn: {
    fontSize: '16px',
    fontFamily: 'Technik-200',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '15px',
    display: 'flex',
    // alignItems: 'center',
    // textAlign: 'justify',
    color: '#000000',
    marginLeft: '10px',

    '&:hover': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#00ff0a',
      // backgroundColor: '#ffffff',
    },
  },
  dropDownBtn: {
    width: '100%',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: '#00FF0A1A',
    },
  },
});

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElGaleria, setAnchorElGaleria] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleOpenGaleriaMenu = (e) => {
    setAnchorElGaleria(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseGaleriaMenu = () => {
    setAnchorElGaleria(null);
  };

  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <LogoIcon
            style={{ marginLeft: '4%' }}
            // viewBox="0 0 78 37"
          />
          <p
            style={{
              lineHeight: 0.8,
              fontSize: 12,
              marginLeft: '7px',
              userSelect: 'none',
              flexGrow: 1,
            }}
          >
            Fakulta <br /> umení
          </p>
          <Tab
            className={classes.btn}
            label="Úvod"
            href="/"
            onChange={handleClickTab}
            value={value}
          />
          <Tab
            onChange={handleClickTab}
            value={value}
            className={classes.btn}
            href="/okatedre"
            label="O katedre"
          />
          <Tab
            className={classes.btn}
            label="Aktuality"
            href="/aktuality"
            onChange={handleClickTab}
            value={value}
          />
          <Tab
            onChange={handleClickTab}
            value={value}
            className={classes.btn}
            onClick={handleOpenGaleriaMenu}
            label="Galéria"
          />
          <Tab
            onChange={handleClickTab}
            value={value}
            className={classes.btn}
            aria-controls="studium"
            onClick={handleOpenMenu}
            label="Štúdium"
          />
          <Tab
            onChange={handleClickTab}
            value={value}
            className={classes.btn}
            label="Kontakt"
            href="/kontakt"
          />
          <Tab
            onChange={handleClickTab}
            value={value}
            icon={<FacebookOutlinedIcon />}
            aria-label="facebook"
            href="https://www.facebook.com"
          />
          <Tab
            onChange={handleClickTab}
            value={value}
            style={{ marginLeft: -50 }}
            icon={<InstagramIcon />}
            aria-label="instagram"
            href="https://www.instagram.com"
          />
        </Toolbar>
      </AppBar>

      <Menu
        position="relative"
        id="studium"
        onClose={handleCloseMenu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        {' '}
        <Paper sx={{ width: '167px' }}>
          <MenuItem className={classes.dropDownBtn}>
            <Link underline="none" href="/studium" style={{ color: '#000000' }}>
              Študent
            </Link>
          </MenuItem>
          <br />
          <MenuItem className={classes.dropDownBtn}>
            <Link
              underline="none"
              href="/uchadzac"
              style={{ color: '#000000' }}
            >
              Uchádzač
            </Link>
          </MenuItem>
        </Paper>
      </Menu>
      <Menu
        position="relative"
        id="galeria"
        onClose={handleCloseGaleriaMenu}
        anchorEl={anchorElGaleria}
        open={Boolean(anchorElGaleria)}
      >
        {' '}
        <Paper sx={{ width: '167px' }}>
          <MenuItem className={classes.dropDownBtn}>
            <Link
              underline="none"
              href="/galeria/vystavy"
              style={{ color: '#000000' }}
            >
              Galéria výstav
            </Link>
          </MenuItem>
          <br />
          {/* <MenuItem className={classes.dropDownBtn}>
            <Link underline="none" href="/galeria" style={{ color: '#000000' }}>
              Galéria prác
            </Link>
          </MenuItem> */}
        </Paper>
      </Menu>
    </>
  );
}

export default Header;
