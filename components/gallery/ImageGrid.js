import {Grid} from "@mui/material";
import React from "react";
import ImageBox from "./ImageBox";


export default function ImageGrid({items, route}) {
    return (
        <Grid
            container
            spacing={2}
        >
            {items.map((item, index) => (
                <ImageBox
                    item={item}
                    route={route}
                    key={index}
                    fullWidth={items.length % 2 !== 0 && items.length === index + 1}
                />
            ))}
        </Grid>
    )
}