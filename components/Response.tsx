
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundBeamsDemo, BackgroundBeams } from './ui/background-beams';


interface ResponseProps {
    initialData: { [key: string]: string }[];
}


const Response: React.FC<ResponseProps> = ({ initialData }) => {
    const [data, setData] = useState<{ [key: string]: string }[]>(initialData);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('127.0.0.1:8000/', {
    //             method: 'POST',
    //             mode:"cors",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "url": "https://www.youtube.com/watch?v=zJNkIJCQohU&t=1s"
    //             })
    //         });
    
    //         if (!response.ok) {
    //             console.log(`HTTP error! status: ${response.status}`);
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    
    //         if (response.headers.get('content-type')?.includes('application/json')) {
    //             const data = await response.json();
    //             console.log('Received data:', data);  // Log the data received from the server
    //             setData(data);
    //         }
    //     };
    
    //     fetchData();
    // }, []);

    const allItems: [string, string][] = [];
        for (const item of data) {
        allItems.push(...Object.entries(item));
    }
    
    console.log(allItems);

    return (
        <div className="h-[100vh] bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="z-50 max-w-2xl mx-auto p-4">
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