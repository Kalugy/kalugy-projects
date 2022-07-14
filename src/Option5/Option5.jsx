import {Face} from "./Face/Face"
import {range} from "d3"
import { MousePointer } from "./MousePointer/MousePointer";
import { Data } from "./MousePointer/Data";
import "./Option5.css"
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";

export const Option5= () => (
    <>
        <Header/>
        <Content/>
        <Footer/>
    </>
);
/*
const width=100;
const height=100;
const array=range(300)

export const Option5=() => array.map(()=>(
    <Face
        width={width}
        height={height}
        centerX={height/2}
        centerY={height/2}
        strokeWidth = {10 * Math.random()*2}
        eyeOffsetX = {15 * Math.random()*2}
        eyeOffsetY = {5 * Math.random()*2}
        eyeRadius = {7 * Math.random()*2}
        mouthWidth={2 * Math.random()*2}
        mouthRadius={4 * Math.random()*2}           
    />
));*/
