import React from 'react';
import Resume from '../components/cards/Resume';
import TextFrame from '../components/text/TextFrame';
import ImageCard from '../components/cards/ImageCard';

const Home = () => {
  return (
    <header className="App-header">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '40px',
        }}
      >
        <ImageCard>
          <img src="/photos/me.jpeg" height={425} width={320} />
        </ImageCard>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextFrame>
            <h1>Joseph Paris</h1>
          </TextFrame>
          <h3>Software Engineer</h3>
          <Resume />
        </div>
      </div>
    </header>
  );
};

export default Home;
