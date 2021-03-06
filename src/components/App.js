import React from 'react';
import ImputFormLocal from './ImputFormLocal';
import ImputFormRemote from './ImputFormRemote';
import {Button} from '@material-ui/core';

 const getMedia = async () => {
  const constraints = { audio: true, video: true };
  try {
    console.log("aaaa");
    /* ストリームを使用 */
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch(err) {
    /* エラーを処理 */
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