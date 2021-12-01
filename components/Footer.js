import { Button, Container, Grid, TextField } from '@material-ui/core';
import classes from '../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <h3>
              Katedra dizajnu <br /> Fakulta umeni Kosice
            </h3>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <i className="bi bi-geo-alt"></i>
              </Grid>
              <Grid item xs={11}>
                Watsonova 4, <br />
                Kosice <br />
                <a className={classes.stranka} target="_blank" href="https://fu.tuke.sk/wps/portal/fu/katedry/katedra-dizajnu">
                  <strong>www.futuke.sk</strong>
                </a>
                <br />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <h3 className={classes.green}>NEWSLETTER</h3>
            <form>
              <TextField
                // label="Size"
                id="outlin ed-size-small"
                placeholder="Zadajte email"
                variant="outlined"
                size="small"
                style={{ borderRadius: 20, width: 270 }}
                className={classes.biela}
              />

              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 20, marginLeft: 45 }}
              >
                Odoslať
              </Button>
            </form>
            <p>
              Nezmeškaj žiadne novinky! Odoberaj newsletter <br />a buď
              informovaný ako prvý.
            </p>
            <p>
              <Link href="../spolupracuj">Spolupracuj s katedrou dizajnu</Link>
            </p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
