import React from 'react';
import Cited from './Cited';
import Layout from './Layout';
import Main from './Main';
import Media from './Media';

function App() {
  return (
    <>
      <Layout
        content1={<Main class='layout1'></Main>}
        content2={<Media class='layout2' text='Item 1'></Media>}
      ></Layout>
      <Cited></Cited>
    </>
  );
}

export default App;
