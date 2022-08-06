import { useParams } from "react-router-dom";
import { Blog1 } from "./blog1/Blog1"
import { Blog2 } from "./blog2/Blog2"
import { Blog3 } from "./blog3/Blog3"
import {content} from "./content"

export const Blog =() => {
    let { id } = useParams("id");
    const LoadManager=()=>{
        switch(id){
            case "blog1": return <Blog1 id={content}/>; 
            case "blog2": return <Blog2 id={content}/>;
            case "blog2": return <Blog3 id={content}/>;
        }
    }
    return(
        <>
         {LoadManager()}
        </>
    )
}