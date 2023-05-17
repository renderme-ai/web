import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function ImagesControl({ files }) {
  if (files.length === 0) return null;
  return (
    <Carousel height={'75vh'}>
      {files.length > 0 &&
        files.map((file, index) => (
          <Carousel.Item key={`${file}-${index}`} style={{ height: '75vh' }}>
            <Image
              className="d-block w-100"
              layout="fill"
              alt={`uploaded ${index + 1}`}
              src={file}
            />
            <Carousel.Caption>
              <h5>Pic # {index + 1}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
