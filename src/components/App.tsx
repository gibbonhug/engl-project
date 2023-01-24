import React from 'react';
import Cited from './Cited';
import Layout from './Layout';
import Main from './Main';
import Media from './Media';

function App() {
  return (
    <>
      <Layout
        content1={<Main></Main>}
        content2={<Media text='lhdsfkasjdhgag'></Media>}
      ></Layout>
      <Cited></Cited>
    </>
  );
}

export default App;
