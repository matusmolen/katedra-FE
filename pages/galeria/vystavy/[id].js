import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';
import ImageSlider from '../../../components/ImageSlider';

function Detail ({ vystava }) {
  return (
    <>
      <div>
        <div style={{ position: 'relative', height: 'fit-content', paddingBottom: '150%' }}>
          <div style={{ marginLeft: 88 }}>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
              <Link underline="hover" color="inherit" href="/galeria/vystavy">
                Galeria vystav
              </Link>
              <Typography color="text.primary">{vystava.title}</Typography>
            </Breadcrumbs>
          </div>
          <div style={{ position: 'absolute', top: 60 }}>
            {/* <Image src={aktuality_obr1} alt="obrazok" /> */}
            <img src={vystava.pic1.url} width="50%" />
          </div>

          <div style={{ position: 'absolute', top: 225, right: 0, textAlign: 'right' }}>
            {/* <Image src={aktuality_obr3} alt="obrazok" /> */}
            <img src={vystava.pic2.url} width="50%" />
          </div>

          <div style={{ position: 'absolute', top: 650, left: 88 }}>
            {/* <Image src={aktuality_obr2} alt="obrazok" /> */}
            <img src={vystava.pic3.url} width="50%" />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 80,
              right: 44.5,
              width: 780,
              height: 38.5,
              backgroundColor: '#00FF0A',
              opacity: 0.85,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: 80,
              right: 44.5,
              width: 41.5,
              height: 1100,
              backgroundColor: '#00FF0A',
              opacity: 0.85,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: 118.5,
              right: 86,
              width: 739.5,
              height: 1061.5,
              backgroundColor: '#FFFFFF',
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
              textAlign: 'left',
            }}
          >
            <h1 style={{ fontSize: 100, fontWeight: 'normal' }}>
              {vystava.title}
            </h1>
          </div>

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
              {vystava.description}
            </h4>
          </div>
          <br />
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
              }}
            >
              {vystava.content}
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <h1
              style={{
                fontFamily: 'Technik',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 60,
                letterSpacing: '-1px',
                marginLeft: '84px',
              }}
            >
              Fotky z výstavy <ImageSlider galery={vystava.foto} />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas');
  const data = await res.json();

  const paths = data.map((vystava) => {
    return {
      params: { id: vystava.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas/' + id);
  const data = await res.json();

  return {
    props: { vystava: data },
  };
};

export default Detail
