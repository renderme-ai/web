import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImagesControl from '../../components/imagesControl';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Start = () => {
  const [previews, setPreviews] = useState([]);
  const [blobs, setBlobs] = useState([]);
  const [email, setEmail] = useState('rickagz@gmail.com');
  const [settings, updateSettings] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.persist();
    const formData = new FormData(event.currentTarget);
    for (let i = 0; i < blobs.length; i++) {
      formData.append('files', blobs[i]);
    }

    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      'https://rendermefx.azurewebsites.net/api/UploadImages';
    const url = `${apiUrl}?email=${email}}`;

    const results = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <div className="home">
      <h1>Upload your images</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input
          id="fileUpload"
          name="file"
          type="file"
          multiple
          accept="image/jpeg,image/png,image/gif"
          onChange={(event) => {
            let images = [];
            for (let i = 0; i < event.target.files.length; i++) {
              images.push(URL.createObjectURL(event.target.files[i]));
            }
            const files = Array.from(event.target.files);
            setBlobs(files);
            setPreviews(images);
          }}
        />
        <Container fluid={true}>
          <Row>{previews.length > 0 && <ImagesControl files={previews} />}</Row>
          <Row style={{ padding: '10px' }}>
            {previews.length > 0 && (
              <Button variant="primary" size="lg" type="submit">
                Start Training!
              </Button>
            )}
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Start;
