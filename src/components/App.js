import React from 'react';
import ImputFormLocal from './ImputFormLocal';
import ImputFormRemote from './ImputFormRemote';
import {Button} from '@material-ui/core';

 const getMedia = async () => {
  const constraints = { audio: true, video: true };
  try {
    console.log("aaaa");
    /* �X�g���[�����g�p */
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch(err) {
    /* �G���[������ */
    console.error(err);
  }
};

getMedia();

const App = () => {
  /*return <Button color="primary" variant='outlined'>Hello, React!</Button>;*/
  return (
    <>
        <ImputFormLocal />
        <ImputFormRemote />
    </>
  );
}

export default App;