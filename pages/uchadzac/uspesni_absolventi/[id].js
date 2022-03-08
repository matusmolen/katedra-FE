import {Breadcrumbs, Container, Typography,} from '@mui/material';
import React from 'react';
import AppLink from "../../../utils/AppLink";
import PersonPage from "../../../components/people/PersonPage";

export async function getStaticPaths() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/absolvents');
    const data = await res.json();

    const paths = data.map(absolvent => {
        return {
            params: {id: absolvent.id.toString()}
        }
    })

    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/absolvents/' + id);
    const data = await res.json();

    return {
        props: {absolvent: data},
        revalidate: 60
    }
}


export default function Absolvent({absolvent}) {

    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Typography>
                    Štúdium
                </Typography>
                <AppLink underline="hover" color="inherit" href="/uchadzac">
                    Uchádzač
                </AppLink>
                <AppLink
                    underline="hover"
                    color="inherit"
                    href="/uchadzac/uspesni_absolventi"
                >
                    Úspešní absolventi
                </AppLink>
                <Typography>{absolvent.name}</Typography>
            </Breadcrumbs>

            <PersonPage person={absolvent}/>
        </Container>
    );

}