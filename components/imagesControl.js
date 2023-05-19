import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactCrop from 'react-image-crop';
import { Image } from 'react-bootstrap';

export default function ImagesControl({ files }) {
  const [crop, setCrop] = React.useState();
  if (files.length === 0) return null;
  return (
    <Carousel height={'75vh'} interval={null} slide={false} fade={true}>
      {files.length > 0 &&
        files.map((file, index) => {
          console.log(file);
          return (
            <Carousel.Item
              key={`${file}-${index}`}
              style={{
                height: '512px',
                background: '#2d2e29',
                textAlign: 'center',
              }}
            >
              <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                <Image src={file} width={'512px'} scale={1} />
              </ReactCrop>
              <Carousel.Caption>
                <h5>Pic # {index + 1}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}
