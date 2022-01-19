import {Button, Checkbox, FormControlLabel, Grid, TextField} from '@mui/material'
import {useSnackbar} from "notistack";
import {useState} from "react";

function KontaktnyFormular() {
    const {enqueueSnackbar} = useSnackbar();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        const res = await fetch('https://katedra-dizajnu.herokuapp.com/contact_form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        if (res.ok) {
            resetForm()
            enqueueSnackbar('Vaša správa bola úspešne odoslaná', {variant: 'success'})
        } else {
            enqueueSnackbar('Nepodarilo sa odoslať vašu správu', {variant: 'error'})
        }
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
        setChecked(false)
    }
    return (
        <Grid container sx={{marginBottom: '2em'}}>
            <Grid item sm={12} md={8}>
                {/* <h2>Kontaktný formulár</h2> */}
                <form autoComplete="off" onSubmit={handleFormSubmit}>
                    <div>
                        <TextField
                            id="name"
                            type={'text'}
                            placeholder="Meno"
                            size="small"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <br/>
                    <div>
                        <TextField
                            id="email"
                            type={'email'}
                            placeholder="E-mail"
                            size="small"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="confirmation"
                                name="checkedC"
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                                required
                            />
                        }
                        label="Kliknutím súhlasíš so zasielaním emailových správ a so zásadami ochrany osobných údajov"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{borderRadius: 20, backgroundColor: "#000000", opacity: 0.6, color: "#ffffff"}}
                        type={'submit'}
                    >
                        Odoslať email
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default KontaktnyFormular