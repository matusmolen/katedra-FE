import {Button, Checkbox, FormControlLabel, Grid, TextField} from '@mui/material'

function KontaktnyFormular() {
    return (
        <Grid container sx={{marginBottom: '2em'}}>
            <Grid item sm={12} md={8}>
                {/* <h2>Kontaktný formulár</h2> */}
                <form noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="name"
                            type={'text'}
                            placeholder="Meno"
                            size="small"
                            fullWidth
                        />
                    </div>
                    <br/>
                    <div>
                        <TextField
                            id="mail"
                            type={'email'}
                            placeholder="E-mail"
                            size="small"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            id="message"
                            placeholder="Napíšte správu"
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
                        control={<Checkbox name="checkedC"/>}
                        label="Kliknutím súhlasíš so zasielaním emailových správ a so zásadami ochrany osobných údajov"
                    />
                </form>
                {/* <Box borderRadius="50%"> */}
                <Button
                    variant="contained"
                    color="primary"
                    style={{borderRadius: 20, backgroundColor: "#000000", opacity: 0.6, color: "#ffffff"}}>Odoslať
                    email</Button>
                {/* </Box> */}
            </Grid>
        </Grid>
    )
}

export default KontaktnyFormular