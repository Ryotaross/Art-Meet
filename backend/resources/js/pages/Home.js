import React from 'react';
import ReactDOM from 'react-dom';
import '../style/common.css'
import Index from '../components/Index';

function Home() {
    return (
      <>
        <body>
		      <div class='sk-ab sk-index'>
            <div className='main'>
              <Index />
            </div>
		      </div>
	      </body>
      </>
    );
}

export default Home;