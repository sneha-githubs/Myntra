import React from "react";
import { LayoutProvider } from "./LayoutProvider/LayoutProvider";
import { Slider } from "./Slider";
import { Category } from "./Category";

export const Home = () =>{
    return(
   <LayoutProvider>
    <Slider/>
    <Category/>
   </LayoutProvider>
    )
}