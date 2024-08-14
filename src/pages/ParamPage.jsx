import { useParams } from "react-router-dom";

const data=[
     {id:1, name:'mari',age:33},
     {id:2, name:'nia',age:24},
     {id:3, name:'niko',age:20}
]
const ParamPage=()=>{
    const param =useParams()

    const user =data.find(user => user.id == param.id)
    if(!user){
        return<div>user not found</div>
    }
    return(
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
        </div>
    )
}

export default ParamPage;