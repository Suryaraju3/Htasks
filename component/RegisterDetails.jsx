'use client'
import { db } from '@/firebase';
import { addDoc, collection, doc, getDocs, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';


const RegisterDetails = () => {
    const [reviews, setReviews]=useState([]);
   
    const [details,setRegisterDetails]=useState({Name:"",Date:"",
  Age:"",Sex:"",Dateofbirth:"",Phonenumber:"",Address:""
});


const fetchReview = async()=>{  
  const querySnapshort = await getDocs(collection(db,"RegisterDetails"));

  const reviewData = querySnapshort.docs.map((doc)=>({
    id:doc.id,
    ...doc.data(),
  }));
  setReviews(reviewData);
}



const clicksave=async()=>{
  await addDoc(collection(db,"RegisterDetails"),{

    Name:details.Name,
    Date:details.Date,
    Age:details.Age,
    Sex:details.Sex,
    Dateofbirth:details.Dateofbirth,
    Phonenumber:details.Phonenumber,
    Address:details.Address,
     createAt: serverTimestamp(),

  })
   setReviews({Name:"",Date:"",
  Age:"",Sex:"",Dateofbirth:"",Phonenumber:"",Address:""
})
}
useEffect(()=>{
  fetchReview()
},[]);

console.log(reviews);

  return (
    <div className=''>
<div className=''>
 <form action="" className='w-252 ml-60  '>
  <div className='bg-sky-300  '>
    <div className='p-2 bg-blue-500'>
        <h2>RegisterDetails</h2>
    </div>
    <div className='p-3 flex justify-evenly '>

        <label htmlFor=''  className=''>Name:</label>
        <input type="text" className='border-2 rounded ' value={details.Name} onChange={(e)=>setRegisterDetails({
        ...details, Name:e.target.value
        })}/>

        
        <label htmlFor="num" className=''>Age:</label>
        <input type="num" className='border-2 rounded ' value={details.Age} onChange={(e)=>setRegisterDetails({
        ...details, Age:e.target.value
        })} />
        


        <label htmlFor=''>Date:</label>
        <input type="datetime-local" className='border-2 rounded' value={details.Date} onChange={(e)=>setRegisterDetails({
        ...details, Date:e.target.value
        })}></input>

    </div>

    <div className='p-2 flex justify-evenly'>
        <label htmlFor="text">Sex:</label>
        <input type="text"className='border-2 rounded ml-5' value={details.Sex} onChange={(e)=>setRegisterDetails({
        ...details, Sex:e.target.value
        })} />


        <label htmlFor="date">DOB:</label>
        <input type="date" className='border-2 rounded ' value={details.Dateofbirth} onChange={(e)=>setRegisterDetails({
        ...details, Dateofbirth:e.target.value
        })}/>

        <label htmlFor="tel">Phonenumber:</label>
        <input type="tel"  className='border-2 rounded mr-5 'value={details.Phonenumber} onChange={(e)=>setRegisterDetails({
        ...details, Phonenumber:e.target.value
        })} />


    </div>

    <div className='p-2 ml-8'>
        <label htmlFor="" className='flex'>Address</label>
        <textarea name="address" id="" className='border-2 rounded w-100 h-25 ' value={details.Address} onChange={(e)=>setRegisterDetails({
        ...details, Address:e.target.value
        })}></textarea>
    </div>

 <div className='flex justify-end p-3'>
     <button onClick={clicksave} className='border-2 rounded bg-emerald-500  cursor-pointer w-25 h-9 text-white hover:bg-green-300'>Save</button>
   </div>
</div>
   
</form>

<div className='p-30'>

  { 
    reviews.map((RegisterDetails)=>
      <div key={RegisterDetails.id} className=' flex flex-col border-2 gap-2 mt-3 bg-sky-300 '>
        <span>Name: {RegisterDetails.Name} </span>
        <span>Age:{RegisterDetails.Age}</span>
        <span>Sex:{RegisterDetails.Sex}</span>
        <span>Dateofbirth:{RegisterDetails.Dateofbirth}</span>
        <span>Phonenumber:{RegisterDetails.Phonenumber}</span>
        <span>Address:{RegisterDetails.Address}</span>
        <span>Date:{RegisterDetails.Date}</span>
      </div>
    )}
</div>
</div> 
  </div>
  )
}

export default RegisterDetails
