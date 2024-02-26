import React from 'react'
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect'

const getKeysAndValues = (data: { [key: string]: string }[]): { key: string; value: string }[] => {
    const result: { key: string; value: string }[] = [];
  
    for (const dictionary of data) {
      for (const [key, value] of Object.entries(dictionary)) {
        result.push({ key, value });
      }
    }
  
    return result;
  
const Response=()=>{
    
    const data_result: { [key: string]: string }[] = [
        {
            "Using HDMX and Tailwind for Reactive UIs": "Using HDMX and Tailwind to build websites for side projects allows for building reactive UIs without needing to use React and styling with ease using Tailwind.",
            "Preference for Cotlin over Golang": "Exploring the benefits of using Cotlin with HDMX and Tailwind for creating clean and reactive UIs, showcasing features like string interpolation and extension functions.",
            "Custom Elements with Cotlin": "Creating custom HTML components using Cotlin extensions and leveraging its templating capabilities to abstract UI elements and build powerful dashboard layouts.",
            "Dependency-Free Development": "Highlighting the simplicity and joy of dependency-free development with Cotlin, enabling a streamlined workflow without additional dependencies or cross-compilation requirements."
          },
          {
            "Building Reactive UI with HDMX and Tailwind CSS": "The speaker discusses using HDMX and Tailwind CSS for building reactive user interfaces, highlighting the advantages of avoiding React while still achieving visually appealing designs. They emphasize the ease of building UI components with HDMX and using Tailwind for styling.",
            "Using Kotlin for Web Development": "The speaker explores the use of Kotlin for web development, showcasing features like string templating, extension functions, and trailing lambdas. They discuss the benefits of Kotlin's syntax for building custom HTML components and creating domain-specific languages.",
            "Advantages of Dependency-Free Development": "The speaker praises the simplicity of dependency-free development using Kotlin, HDMX, and Tailwind CSS. They appreciate the streamlined process of not needing additional dependencies for templating and styling, highlighting the joy of working solely within the language itself."
          }
    ];
    const allKeysAndValues = getKeysAndValues(data_result);
    return (
        <>
        <TextGenerateEffect/>
        </>
    )
}

export default Response;