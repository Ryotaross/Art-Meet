import React from 'react';
import ReactDOM from 'react-dom';
import '../style/common.css'
import Index from '../components/Index';

function Home() {
    return (
      <>
        <main>
		      <div className='sk-ab sk-index'>
            <div className='main'>
              <Index />
            </div>
		      </div>
	      </main>
      </>
    );
}

export default Home;