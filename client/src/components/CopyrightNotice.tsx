import React from 'react'

const CopyrightNotice = () => {

    const date = new Date()
    
  return (
    <div className="bg-theme-black h-10 flex items-center justify-center text-center">
      <p>Copyright © {date.getFullYear()} LIVE</p>
    </div>
  );
}

export default CopyrightNotice