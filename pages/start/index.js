const Start = () => (
  <div className="home">
    <h1>Upload your images</h1>
    <input
      id="fileUpload"
      type="file"
      multiple
      accept="image/jpeg,image/png,image/gif"
    />
  </div>
);

export default Start;
