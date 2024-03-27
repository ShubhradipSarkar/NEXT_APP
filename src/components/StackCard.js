import React from 'react';
import Image from 'next/image';
function StackCard() {
  const colours = ['#5c100b', '#7d1710', '#a62017', '#d62c20', '#fa3628'];
  return (
    <div>
      <p style={{ color: 'white'}}> Tree Plantation </p>
    
      <div style={{position: 'relative', height: '180px', width: '240px'  }}>
        {colours.map((color, idx) => (
          <div
            key={idx}
            
          >
            <Image src="/riki1.jpeg" alt="Image" width={200} height={150} style={{
              backgroundColor: `${color}`,
              position: 'absolute',
              width: '200px',
              height: '150px',
              top: `${idx * 5 + 5}px`,
              left: `${idx * 5 + 5}px`,
              borderRadius: '15px'
            }}/>
          </div>
        ))}

        
      </div>
    </div>
  );
}

export default StackCard;
