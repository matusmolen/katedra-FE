import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  obr: {
    flexGrow: 1,
  },
  headerText: {
    marginLeft: 38,
    textDecoration: 'none',
    color: '#000000',
    '&:hover': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#00FF0A',
    },
  },
  footer: {
    position: 'flex',
    backgroundColor: '#000000',
    height: 322,
  },
  footerText: {
    color: '#FFFFFF',
  },
  socials: {
    marginLeft: 80,
  },
  ig: {
    marginLeft: 15,
    marginRight: 50,
  },
  footerNewsettler: {
    color: '#00FF0A',
    marginTop: 38,
    fontSize: 34,
  },
  footerTextField: {
    backgroundColor: '#FFFFFF',
    marginTop: 26,
  },
  footerButton: {
    marginTop: 26,
    backgroundColor: '#00FF0A',
    color: '#000000',
    marginLeft: 48,
  },
  studiumButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: 20,
  },
  aktualityButton: {
    borderRadius: 20,
  },
});
export default useStyles;
