import React from 'react'

const CopyrightNotice = () => {

    const date = new Date()
    
  return (
    <div className="bg-theme-black bg-fuchsia-50 h-10 flex items-center justify-center text-center">
      <p>Copyright © {date.getFullYear()} Strimit</p>
    </div>
  );
}

export default CopyrightNotice