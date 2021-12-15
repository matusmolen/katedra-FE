import { Container, Breadcrumbs, Link, Typography, Button, Fab } from '@material-ui/core';
import React from 'react';
import obrazok from '../../public/images/aktuality.png';

export const getStaticPaths = async () => {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/news');
  const data = await res.json();

  const paths = data.map((aktualita) => {
    return {
      params: { id: aktualita.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/news/' + id);

  const data = await res.json();

  return {
    props: { aktualita: data },
  };
};

export default function AktDetail({ aktualita }) {

    return (
        <>
            <div>

                <div style={{ position: 'relative', height: 1200 }} maxWidth>
                    <div style={{ marginLeft: 88 }}>
                        <Breadcrumbs aria-label="breadcrumb" separator=">">
                            <Link underline="hover" color="inherit" href="../aktuality">
                                Aktuality
                            </Link>
                            <Typography color="primary">{aktualita.title}</Typography>
                        </Breadcrumbs>
                    </div>
                    <div style={{ position: 'absolute', top: 60 }}>
                        {/* <Image src={aktuality_obr1} alt="obrazok" /> */}
                        <img src={aktualita.pic1.url} width="50%"/>

                    </div>
                    <div style={{ position: 'absolute', top: 225, right: 0, textAlign: 'right' }}>
                        {/* <Image src={aktuality_obr3} alt="obrazok" /> */}
                        <img src={aktualita.pic2.url} width="50%"/>
                    </div>

                    <div style={{ position: 'absolute', top: 650, left: 88 }}>
                        {/* <Image src={aktuality_obr2} alt="obrazok" /> */}
                        <img src={aktualita.pic3.url} width="50%"/>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 110,
                            left: 571,
                            width: 780,
                            height: 1070,
                            backgroundColor: '#00FF0A',
                            opacity: 0.85,
                        }}
                    ></div>

                    <div
                        style={{
                            position: 'absolute',
                            top: 50,
                            left: 491,
                            inlineSize: 850,
                            overflowWrap: 'break-word',
                            textAlign: 'left'
                        }}
                    >
                        <h1 style={{ fontSize: 100, fontWeight: 'normal', marginBottom: '200px' }}>{aktualita.title}</h1>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: 355,
                            left: 652,
                            maxWidth: '540px',
                            marginTop: '40px'
                        }}
                    >
                        <h4
                            style={{
                                fontSize: 32,
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                lineHeight: '48px',
                                letterSpacing: '0.2px',
                            }}
                        >
                            {aktualita.description}
                        </h4>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: 540,
                            left: 733,
                            maxWidth: '455px',
                        }}
                    >
                        <div
                            style={{
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '18px',
                                lineHeight: '31px',
                                letterSpacing: '0.5px',
                                whiteSpace: 'pre-wrap',
                                marginTop: '50px'
                            }}
                        >
                            {aktualita.content}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
