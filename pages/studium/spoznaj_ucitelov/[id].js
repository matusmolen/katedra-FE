import {Breadcrumbs, Container, Typography} from '@mui/material';
import React from 'react';
import AppLink from "../../../utils/AppLink";
import PersonPage from "../../../components/people/PersonPage";

export default function Ucitel({teacher}) {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/studium/">
                    Štúdium
                </AppLink>
                <AppLink underline="hover" color="inherit" href="/studium/">
                    Študent
                </AppLink>
                <AppLink
                    underline="hover"
                    color="inherit"
                    href="/studium/spoznaj_ucitelov"
                >
                    Spoznaj učiteľov
                </AppLink>
                <Typography>{teacher.name}</Typography>
            </Breadcrumbs>

            <PersonPage person={teacher}/>
        </Container>
    );

}

export async function getStaticPaths() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/teachers');
    const data = await res.json();

    const paths = data.map(teacher => {
        return {
            params: {id: teacher.id.toString()}
        }
    })

    return {
        paths,
        fallback: "blocking"
    }
}


export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/teachers/' + id);
    const data = await res.json();

    return {
        props: {teacher: data},
        revalidate: 60
    }
}

