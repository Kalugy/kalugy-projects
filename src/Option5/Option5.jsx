import {Face} from "./Face/Face"
import {range} from "d3"
import { MousePointer } from "./MousePointer/MousePointer";
import { Data } from "./MousePointer/Data";
import "./Option5.css"
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";

import { StackButtom } from "../StackButtom/StackButton";
import data from "./Content.json"
export const Option5= () => (
    <div className="page-v5-main">
        <Header/>
        <Content/>
        <Footer/>
        <StackButtom content={data}></StackButtom>
    </div>
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
