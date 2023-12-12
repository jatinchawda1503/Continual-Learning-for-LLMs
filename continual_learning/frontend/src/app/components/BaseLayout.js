
import React from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

const BaseLayout = () => {
  return (
      <>
      <div className='columns-1 max-w-full w-3/12 relative'> 
        <Sidebar/>
      </div>
      <div className="columns-1 w-full relative p-3 bg-contentmain">
        <ChatArea/>
      </div>
      
      </>
  );
};

export default BaseLayout;
