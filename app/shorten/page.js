"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {

  const [url, seturl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState(false)

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setShorturl("")
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type="text" value={url} className='px-4 py-2 focus:outline-purple-600 bg-purple-50 rounded-lg' placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input type="text" value={shorturl} className='px-4 py-2 focus:outline-purple-600 bg-purple-50 rounded-lg' placeholder='Enter your prefered URL text' onChange={e => { setShorturl(e.target.value) }} />
        <div className='flex justify-center items-center mt-4'>
          <button onClick={generate} className='bg-purple-50 border-2 py-2 px-4 rounded-xl border-purple-700 hover:bg-purple-700 font-bold hover:text-white'>Generate</button>
        </div>
      </div>
      {generated && <>
        <span className='font-bold text-lg'>Your Link</span> <code> <Link className='hover:underline' target="_blank" href={generated}>{generated}</Link> 
        </code>
        </>}
    </div>
  )
}

export default page