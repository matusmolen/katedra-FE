import {Grid} from "@mui/material";
import React from "react";
import PostBox from "./ImageBox";


export default function PostGrid({items, route}) {
    return (
        <Grid
            container
            spacing={2}
        >
            {items.map((item, index) => (
                <PostBox
                    item={item}
                    route={route}
                    key={index}
                    fullWidth={items.length % 2 !== 0 && items.length === index + 1}
                />
            ))}
        </Grid>
    )
}