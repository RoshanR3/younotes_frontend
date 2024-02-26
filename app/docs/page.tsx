"use client";
import React from "react";
import Response from "@/components/Response";
import useStore from '@/store';


const Docs = () => {
    const { data } = useStore();
    return ( 
        <Response initialData={data}/>
    );
}
 
export default Docs;