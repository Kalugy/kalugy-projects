import "./Content.css"
import {Data} from "../MousePointer/Data"
import Photo from '../../Photo.jpg';
import { useEffect } from "react";
import {Router} from "../Router/router"
import {PATHS} from "../Router/routes"



export const Content=()=>{

    let Router2 = new Router(PATHS);
    useEffect(()=>{
        //Routerr.loadSubroutes('blogone')
    },[])
    
    return(
   <>
    <main className="main-div-v5">
            
    </main>
    </>)
};