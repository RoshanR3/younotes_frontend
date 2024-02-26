
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundBeamsDemo, BackgroundBeams } from './ui/background-beams';
import { FaArrowTurnDown } from "react-icons/fa6";



interface ResponseProps {
    initialData: { [key: string]: string }[];
}

const data = [
  {
    "1": [
      "Getting Started",
      "To start using Google Drive, visit google.com/driv…ve can be accessed on both PCs and mobile phones.",
    ],
  },
  {
    "2": [
      "File Management",
      "You can upload files or folders, organize them int…others by specifying different permission levels.",
    ],
  },
  {
    "3": [
      "Additional Features",
      "Google Drive offers features like advanced search,… like Google Calendar, Keep, Tasks, and Contacts.",
    ],
  },
  {
    "4": [
      "Storage and Upgrade Options",
      "Google Drive provides 15 GB of free storage, with … up devices is available on both iOS and Android.",
    ],
  },
  {
    "5": [
      "Collaboration and Sharing",
      "Google Drive enables easy sharing of files with ot…o allows importing photos and videos from iCloud.",
    ],
  },
  {
    "6": [
      "Advanced Tools",
      "In addition to file management, Google Drive offer…roductivity and organization within Google Drive.",
    ],
  },
  {
    "7": [
      "Customization and Organization",
      "Users can customize their Google Drive by color-co…for tasks and notes directly within Google Drive.",
    ],
  },
  {
    "8": [
      "Conclusion",
      "Google Drive is a versatile tool for file storage,…fies managing and accessing files across devices.",
    ],
  },
  {
    "9": [
      "Google Drive Tutorial",
      "Learn how to get started with Google Drive for eff…ools and optimizing your Google Drive experience.",
    ],
  },
  {
    "10": [
      "Google Drive Tutorial",
      "In this tutorial, we will learn how to get started…ffers 15 GB of free storage in its basic version.",
    ],
  },
  {
    "11": [
      "Accessing Google Drive",
      "To access Google Drive, go to google.com/drive, si…tures available on both web and mobile platforms.",
    ],
  },
  {
    "12": [
      "Uploading Files and Folders",
      "You can upload files and folders to Google Drive b…and folders can be organized and accessed easily.",
    ],
  },
  {
    "13": [
      "Sharing Files and Folders",
      "Google Drive allows you to share files and folders…s levels include viewer, commentator, and editor.",
    ],
  },
  {
    "14": [
      "Organizing Data",
      "You can organize your data in Google Drive by crea…ght control panel for tasks, notes, and contacts.",
    ],
  },
  {
    "15": [
      "Backup and Storage Options",
      "Google Drive can be used for backups on both mobil… users who need more than the free 15 GB storage.",
    ],
  },
  {
    "16": [
      "Integration with Google Ecosystem",
      "Google Drive integrates seamlessly with other Goog…ng a comprehensive and connected user experience.",
    ],
  },
];


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
      <div className="h-[100%] bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="z-50 mx-[5%] py-[5%] w-[80%] ">
          <h1 className="text-[4vh] sm:text-[5vh] md:text-[7vh] lg:text-[8.6vh] xl:text-[10.6vh] 2xl:text-[15vh] font-semibold w-[90%] mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Here Are Your notes
          </h1>
          {allItems.map(([title, description], index) => (
            <React.Fragment key={index}>
              <div className="flex">
                <FaArrowTurnDown className="text-[2vh] invert mt-[6%] sm:mt-[5%] md:text-[3vh] md:mt-[4%] 2xl:text-[4vh] 2xl:mt-[2.3%]  mr-[1%]" />
                <TextGenerateEffect
                  words={title}
                  className="text-[3vh] sm:text-[3.5vh] md:text-[4vh] lg:text-[5vh] xl:text-[6vh]"
                />
              </div>
              <TextGenerateEffect
                words={description}
                className="text-[2vh] mb-[4%] lg:text-[3vh] 2xl:text-[4vh]"
              />
              <div className="h-[0.2%] w-[80%] bg-white"></div>
            </React.Fragment>
          ))}
        </div>
        <BackgroundBeams />
      </div>
    );
}

export default Response;