import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImagesControl from '../../components/imagesControl';
import { Button } from 'react-bootstrap';

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
            <Button variant="primary" size="lg">
              Start Training
            </Button>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Start;
