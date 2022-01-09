import {Grid} from "@mui/material";
import PersonBox from "./PersonBox";

export default function PeopleGrid({route, people, cols=2}) {
    return (
        <Grid container columnSpacing={{xs: 5, md:20}} rowSpacing={{xs: 2, md: 0}}>
            {people.map((person, index) =>
                <PersonBox key={index} route={route} person={person} topMargin={(index%cols)%2===cols%2} cols={cols}/>
            )}
        </Grid>
    )
}