import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImagesControl from '../../components/imagesControl';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Start = () => {
  const [files, setFiles] = useState([]);
  return (
    <div className="home">
      <h1>Upload your images</h1>
      <input
        id="fileUpload"
        type="file"
        multiple
        accept="image/jpeg,image/png,image/gif"
        onChange={(event) => {
          let images = [];
          for (let i = 0; i < event.target.files.length; i++) {
            images.push(URL.createObjectURL(event.target.files[i]));
          }
          setFiles(images);
        }}
      />
      <Container fluid={true}>
        <Row>{files.length > 0 && <ImagesControl files={files} />}</Row>
        <Row style={{ padding: '10px' }}>
          {files.length > 0 && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                axios
                  .get(
                    'https://rendermefx.azurewebsites.net/api/MainHttpTrigger'
                  )
                  .then((res) => {
                    console.log('success', res);
                  })
                  .catch((err) => {
                    console.log('error!!!', err);
                  });
              }}
            >
              Start Training
            </Button>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Start;
