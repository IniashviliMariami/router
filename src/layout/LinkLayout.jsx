import { Link,Outlet } from "react-router-dom"


const LinkLayout=()=>{
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/main'}>Main</Link>
            <Link to={'/About'}>About us</Link>

            <Outlet/>
        </div>
)
}
export default LinkLayout