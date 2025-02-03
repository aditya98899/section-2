import Button from '@/components/Button';
import Card from '@/components/Card';
import InputField from '@/components/Input';

import React from 'react'

const Home = () => {
  return (
    <div>

        <h1 className='text-center font-bold my-5 text-3xl'>Home Page</h1>
        <h2 style={{color : 'red', textAlign: 'center', fontSize: 30 }}>Welcome to React Using Next JS </h2>
        
        <input type="text" className='p-2 border border-gray-800' />
        <button className='global-btn'>Global Button </button>
        <img src="/next.svg" alt="" />

        <Button disabled={true}>My button</Button>
        <Button >Submite</Button>
        <Button disabled={true}>Nice</Button>

        <Card title={'my card title'}
        description={'this is a card description'}
        primaryText={'ok'}
        secondaryText= {'Cancle'}
        />
        
      <InputField></InputField> 
      value={'hello'} 
       placeholder={'Enter your name'} 
       type={'text'} 
       name={'name'} 
       id={'name'}   

       

    </div>
  )
}

export default Home;