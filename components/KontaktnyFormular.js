import { Container, Grid, TextField, FormControlLabel, Checkbox, Button, Box } from '@material-ui/core'

function KontaktnyFormular(){
    return(
        <Grid>
        <Grid item sm={8}>
            {/* <h2>Kontaktný formulár</h2> */}
            <form noValidate autoComplete="off" >
                <div>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        placeholder="Meno"
                        variant="outlined"  //nemam tucha co je toto variant :(
                        size="small"
                    />
                </div><br />
                <div>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        placeholder="E-mail"
                        variant="outlined"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-full-width outlined-multiline-static"
                        // label="Label"
                        // style={{ margin: 8 }}
                        placeholder="Napíšte správu"
                        // helperText="Full width!"
                        fullWidth
                        multiline
                        rows={8}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <FormControlLabel
                    control={<Checkbox name="checkedC" />}
                    label="Kliknutím súhlasíš so zasielaním emailových správ a so zásadami ochrany osobných údajov"
                />
            </form>
            {/* <Box borderRadius="50%"> */}
            <Button 
            variant="contained" 
            color="darkgrey" 
            style={{borderRadius: 20, backgroundColor:"#000000", opacity: 0.6, color: "#ffffff"}}>Odoslať email</Button>
            {/* </Box> */}
        </Grid>
    </Grid>
    )
}

export default KontaktnyFormular