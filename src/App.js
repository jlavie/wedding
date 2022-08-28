import React, { Fragment, useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Fragment>
      <Navigation/>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </Fragment>
  );
}

export default App;
