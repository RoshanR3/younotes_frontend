
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundBeamsDemo, BackgroundBeams } from './ui/background-beams';

  
const Response=()=>{
    const [data, setData] = useState<{ [key: string]: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                mode:"cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "url": "https://www.youtube.com/watch?v=zJNkIJCQohU&t=1s"
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
                setData(data);
            }
        };
    
        fetchData();
    }, []);

    const allItems: [string, string][] = [];
        for (const item of data) {
        allItems.push(...Object.entries(item));
    }
    
    console.log(allItems);

    return (
        <div c>
        <div className='z-50 absolute'>
        {allItems.map(([title, description], index) => (
            <React.Fragment key={index}>
            <TextGenerateEffect words={title}/>
            <TextGenerateEffect words={description}/>
            </React.Fragment>
        ))}
        </div>
        <BackgroundBeams />
        </div>
    )
}

export default Response;