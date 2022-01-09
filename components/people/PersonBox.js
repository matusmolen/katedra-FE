import {Box, Button, Grid} from "@mui/material";
import React from "react";
import AppLink from "../../utils/AppLink";


export default function PersonBox({topMargin, route, person, cols}) {
    return (
        <Grid item
              key={person.id}
              xs={12} md={12/cols}
              flexDirection='column'
              display='flex'
              alignItems='center'
              justifyContent='start'
              marginTop={{
                  xs: 0,
                  md: topMargin ? '10em' : 0
              }}
        >
            <Box position='relative' display='flex' justifyContent='center' width={{xs: '75%', md: '100%'}}>
                <img
                    src={person.profile.url}
                    alt={`profilovy obrazok ${person.name}`}
                    width="100%"
                    height="auto"
                    style={{borderRadius: '100%'}}
                />
                <AppLink href={`${route}/${person.id}`} sx={{display:'block', position:'absolute', bottom: '3em'}}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{borderRadius: 15}}
                    >
                        Zobraziť profil
                    </Button>
                </AppLink>
            </Box>
            <h3>
                {person.name}
            </h3>
        </Grid>
    )
}