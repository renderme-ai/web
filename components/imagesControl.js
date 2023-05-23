import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export default function ImagesControl({ files }) {
  if (files.length === 0) return null;
  const imageSize = Math.min(512, window.innerWidth - 20);
  return (
    <Carousel interval={null} slide={false} fade={true}>
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
              <Image src={file} width={`${imageSize}px`} scale={1} />
              <Carousel.Caption>
                <h5>Pic # {index + 1}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}
