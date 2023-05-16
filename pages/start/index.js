import { useState } from 'react';

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
      <div>
        {files.length > 0 &&
          files.map((file, index) => (
            <img key={`${file}-${index}`} alt={`uploaded ${index + 1}`} src={file} />
          ))}
      </div>
    </div>
  );
};

export default Start;
