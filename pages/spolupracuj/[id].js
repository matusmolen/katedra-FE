import { Breadcrumbs } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import * as React from 'react';
import Image from 'next/image';
import aktuality_obr1 from '../../public/images/aktuality_obr1.png';
import aktuality_obr2 from '../../public/images/aktuality_obr2.png';
import aktuality_obr3 from '../../public/images/aktuality_obr3.png';

export const getStaticPaths = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops');
    const data = await res.json();

    const paths = data.map(spolupraca => {
        return {
            params: { id: spolupraca.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops/' + id);
    const data = await res.json();
    console.log(res)

    return {
        props: { spolupraca: data }
    }
}

export default function Details ({ spolupraca }) {
    return (
        <div>
            <div style={{ position: 'relative', height: 1200 }}>
                <div style={{ marginLeft: 88 }}>
                    <Breadcrumbs aria-label="breadcrumb" separator=">">
                        <Link underline="hover" color="inherit" href="../aktuality">
                            Spolupracuj
                        </Link>
                        <Typography color="primary">{spolupraca.title}</Typography>
                    </Breadcrumbs>
                </div>
                {/* <div style={{ position: 'absolute', top: 60 }}>
                    <Image src={aktuality_obr1} alt="obrazok" />
                </div>
                <div style={{ position: 'absolute', top: 650, left: 88 }}>
                    <Image src={aktuality_obr2} alt="obrazok" />
                </div>
                <div style={{ position: 'absolute', top: 225, right: 0 }}>
                    <Image src={aktuality_obr3} alt="obrazok" />
                </div> */}
                <div style={{ position: 'absolute', top: 60 }}>
                    {/* <Image src={aktuality_obr1} alt="obrazok" /> */}
                    <img src={spolupraca.pic1.url} width="50%"/>

                </div>
                <div style={{ position: 'absolute', top: 225, right: 0, textAlign: 'right' }}>
                    {/* <Image src={aktuality_obr3} alt="obrazok" /> */}
                    <img src={spolupraca.pic2.url} width="50%"/>
                </div>
                <div style={{ position: 'absolute', top: 650, left: 88 }}>
                    {/* <Image src={aktuality_obr2} alt="obrazok" /> */}
                    <img src={spolupraca.pic3.url } width="50%"/>
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
                        inlineSize: 500,
                        overflowWrap: 'break-word',
                        textAlign: 'right'
                    }}
                >
                    <h1 style={{ fontSize: 100, fontWeight: 'normal' }}>{spolupraca.title}</h1>
                </div>
                {/* <div
                    style={{
                        position: 'absolute',
                        top: 175,
                        left: 727,
                    }}
                >
                    <h1 style={{ fontSize: 100, fontWeight: 'normal' }}>spoluprace</h1>
                </div> */}
                <div
                    style={{
                        position: 'absolute',
                        top: 355,
                        left: 652,
                        maxWidth: '540px',
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
                        { spolupraca.description }
                    </h4>
                </div>
                
                <div
                    style={{
                        position: 'absolute',
                        top: 700,
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
                            whiteSpace: 'pre-wrap'
                        }}
                    >
                        {spolupraca.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

