import { useCallback, useState } from "react";
import {csv , arc} from "d3"
import { useEffect } from "react";

const url = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"

/* Fetch Pyramid BAD
const promise = fetch(url)
promise.then(response => {
    response.text().then(text =>{
        console.log("te",text)
    })
})*/
/* Fetch ASYNC Good But d3 has already implement a fetch
const fetchText = async (url) => {
    const response = await fetch(url)
    return await response.text();
};  
fetchText(url).then(t => {
    const data = d3.csvParse(t) 
    let message = '';
    message = message+ data.length /1024 + 'kb'
    message = message+ data.length + 'rows'
    message = message+ data.columns.length + 'columns'
})*/

 
const message = data => {
    let message = '';
    message = message+ Math.round(data.length /1024) + 'kb'
    message = message+ data.length + 'rows'
    message = message+ data.columns.length + 'columns'
    console.log("mes",message)
    return message
}

const width ="960px"
const height ="600px"
const centerX=width/2
const centerY=height/2

const pieArc = arc()
        .innerRadius(0)
        .outerRadius(width)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI*3/2)


export const Data=()=>{
    const [data,setData]=useState(null);
    useEffect(()=>{
        csv(url).then(data=>{
            console.log("fetching")
            setData(data)
        });
    },[])

    if(!data){
        return <pre>Loading..</pre>
    }

    return (
        <svg width={width} heigh={height}>
            <g transform={`translate(5,5)`}>
            {
                data.map((d,i) => 
                    <path 
                        fill={d['RGB hex value']}
                        d={pieArc({
                            startAngle: i/data.length * 2 * Math.PI, 
                            endAngle: ((i+1)/data.length) * 2 * Math.PI
                        })}
                    ></path>        
                )
            }
            </g>
        </svg>
    );

};