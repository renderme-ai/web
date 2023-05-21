/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImagesControl from '../../components/imagesControl';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PrettyBackground from '../../components/PrettyBackground';
import styled from '@emotion/styled';

const EmailInput = styled.input`
  width: 360px;
  text-align: center;
  padding: 10px;
  font-size: 20px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
  margin-left: 20%;
`;

const Start = () => {
  const [previews, setPreviews] = useState([]);
  const [blobs, setBlobs] = useState([]);
  const [email, setEmail] = useState('');

  const scrollToTrainingButton = () => {
    const el = document.getElementById('training-button');
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

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
    const url = `${apiUrl}?email=${email}`;

    const results = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <PrettyBackground className="home">
      <h1>Woo! Let's get started!</h1>
      <hr />
      <h3>
        <p>
          Upload some photos of yourself and we'll start working on training
          your AI model with them.
        </p>
        <p>
          We'll send you an email with a link to a professional-level UI with
          your trained model once it's ready.
        </p>
      </h3>
      <p>First, what is your email?</p>
      <EmailInput
        type="text"
        value={email}
        placeholder={'yourbeautifulself@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <p>Please upload between 10 and 20 photos of yourself.</p>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <FileInput
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

            scrollToTrainingButton();
          }}
        />
        <Container fluid={true}>
          <Row>{previews.length > 0 && <ImagesControl files={previews} />}</Row>
          <Row style={{ padding: '10px', marginBottom: '200px' }}>
            {previews.length > 0 && (
              <Button
                id="training-button"
                variant="primary"
                size="lg"
                type="submit"
                className={'button-training'}
              >
                Start Training!
              </Button>
            )}
          </Row>
        </Container>
      </form>
    </PrettyBackground>
  );
};

export default Start;
