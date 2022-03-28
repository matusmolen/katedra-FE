import {Box, Button, Grid} from "@mui/material";
import React from "react";
import AppLink from "../../utils/AppLink";
import Image from 'next/image'

export default function PostBox({item, fullWidth = false, route}) {
    console.log(item)
    return (
        <Grid item sm={fullWidth ? 12 : 6} xs={12}>
            <Box sx={{position: 'relative', height: '20em'}}>
                <Image
                    src={item.preview_img.url}
                    alt={`obrazok ${item.title}`}
                    layout='fill'
                    objectFit='cover'
                    // blurDataURL={item.preview_img.formats.small.url}
                    // placeholder='blur'
                />

                <AppLink
                    href={`${route}/${item.id}`}
                    underline='none'
                    sx={{
                        position: 'absolute',
                        bottom: '32px',
                        right: '32px',
                        width: '100%',
                        textAlign: 'right',
                        zIndex: 1,
                    }}
                >
                    <Button
                        sx={{borderRadius: 20}}
                        variant="contained"
                        color="primary"
                    >
                        Zobraziť viac
                    </Button>
                </AppLink>
            </Box>
            <h4 style={{marginTop: '24px'}}>{item.title}</h4>
        </Grid>
    )
}
