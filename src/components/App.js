import React from 'react';
import {render} from 'react-dom';
import Header from './Header';
import MessageBox from './MessageBox';
import Footer from './Footer';
require('../styles/widget.css');

const App=()=>(

    <div className="index">
         <div className="widget-container opened">
           <Header />
           <MessageBox />
           <Footer />
         </div>
    </div>

)
export default App
