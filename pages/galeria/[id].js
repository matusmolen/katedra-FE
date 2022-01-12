import {Breadcrumbs, Button, Container, Grid, Typography} from "@mui/material";
import AppLink from "../../utils/AppLink";
import Masonry from "@mui/lab/Masonry";
import Stack from "@mui/material/Stack";
import * as React from "react";
import {styled} from "@mui/material/styles";
import GallerySlider from "../../components/GallerySlider";

export const CategoryButton = styled(Button)(({theme}) => ({
    borderRadius: 20,
    backgroundColor: '#000000',
    color: '#ffffff',
    '&.selected': {
        backgroundColor: theme.palette.primary.main,
        color: '#000000',
    }
}));


export default function GalleryCategory({year, galleries, categories}) {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    console.log(categories)
    console.log(year)

    const handleCategorySelection = (category) => {
        if (selectedCategory && selectedCategory.id === category.id) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" separator=">">
                    <AppLink underline="hover" color="inherit" href="../galeria/">
                        Galéria prác
                    </AppLink>
                    <Typography>2020/2021</Typography>
                </Breadcrumbs>

                <Grid
                    container
                    mt={1}
                    spacing={2}
                >
                    {categories.map((category, index) =>
                        <Grid item key={index}>
                            <CategoryButton
                                size="large"
                                variant="contained"
                                className={selectedCategory === category ? 'selected' : ''}
                                onClick={() => handleCategorySelection(category)}
                            >
                                {category.title}
                            </CategoryButton>
                        </Grid>
                    )}
                </Grid>

            </Container>
            <Container maxWidth='xl' sx={{marginTop: '2em'}}>
                <Masonry spacing={2} columns={{xs: 1, sm: 2, md: 3, lg: 4}} defaultSpacing={2} defaultColumns={4}>

                    {galleries
                        .filter((gallery) => {
                            if (selectedCategory === null) {
                                return true
                            }
                            return gallery.gallery_categories
                                .map((category) => category.id)
                                .includes(selectedCategory.id)
                        })
                        .map((gallery, index) => (
                            <Stack key={index}>
                                <GallerySlider gallery={gallery}/>
                            </Stack>
                        ))
                    }
                </Masonry>
            </Container>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/years');
    const data = await res.json();

    const paths = data.map(year => {
        return {
            params: {id: year.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const year = await (await fetch(`https://katedra-dizajnu.herokuapp.com/years/${params.id}`)).json();
    const galleries = await (await fetch(`https://katedra-dizajnu.herokuapp.com/galleries?_year=${params.id}`)).json();
    let categories = new Set();
    for (let gallery of galleries) {
        for (let category of gallery.gallery_categories) {
            categories.add(category);
        }
    }


    return {
        props: {
            year,
            galleries,
            categories: [...categories]
        },
    };
}