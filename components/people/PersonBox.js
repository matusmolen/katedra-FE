import {Box, Button, Grid} from "@mui/material";
import React from "react";
import AppLink from "../../utils/AppLink";
import Image from "next/image"

export default function PersonBox({topMargin, route, person, cols}) {
    return (
        <Grid item
              key={person.id}
              xs={12} md={6} lg={12/cols}
              flexDirection='column'
              display='flex'
              alignItems='center'
              justifyContent='start'
              marginTop={{
                  xs: 0,
                  md: topMargin ? '10em' : 0
              }}
        >
            <Box position='relative' display='flex' justifyContent='center' width={{xs: '75%', md: '80%'}}>
                <Image
                    src={person.profile.url}
                    alt={`profilovy obrazok ${person.name}`}
                    height={person.profile.height}
                    width={person.profile.width}
                    blurDataURL={person.profile.formats.small?.url || person.profile.url}
                    placeholder='blur'
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
            <h5 style={{fontSize:'1.3em'}}>
                {person.name}
            </h5>
        </Grid>
    )
}