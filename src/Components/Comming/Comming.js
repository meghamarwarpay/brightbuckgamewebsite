import React from 'react';
import Header from '@/Layout/Header';
import Footer from '@/Layout/Footer';
import img from '../../assets/image/comming.jpg';
import Image from 'next/image';

function Comming() {
  return (
    <div>
      <Header />
      <div>
        <Image 
          src={img} 
          alt="Coming soon" 
          
          style={{ width:'100%' ,height:'600px',marginTop:'20px' }}  
        />
      </div>
      <Footer />
    </div>
  );
}

export default Comming;
