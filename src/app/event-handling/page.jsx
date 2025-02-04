'use client'
import React from 'react'

const EventHandling = () => {
const previwImage = (e) => {  
  //Access the  IMAGE file
  const file = e.target.files[0];
  // initialize the file object
  const reader = new FileReader();
  //add img to page when file is loaded
  reader.onload = (data) => {
    const img = document.createElement('img');
    img.src = data.target.result;
    document.body.appendChild(img);
  }
  //read the file
  reader.readAsDataURL(file);

}

  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-6'>Event Handling</h1>
        <hr />

        <button
        onClick={() => {alert('butto was clicked');}}
         className='border rounded-md p-3 bg-gray-200'>Click me</button>
        <input
        onChange={(e ) => {console.log(e.target.value);}}
         className='w-full p-3 py-1 border-2 mt-5' 
         type="text" />

         <input
         onChange={(e ) => {
          document.body.style.backgroundColor = e.target.value;
         }}
         className='mt-5' type="color" />

         <input 
         multiple
         accept='image/*'
         onChange={(e) =>  console.log(e.target.files)}

         type="file" />

         <input
         onChange={previwImage} 
         accept='image/*'
         type="file" /> 


    </div>
  )
}

export default EventHandling;
