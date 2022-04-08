//import { viewer } from "./api/login_user" 
import useSWR from "swr"

export default  function about(props){
    // const {user} = props
    const { data } = useSWR('/api/login_user',fetch)

    return(
        <div>
            about<br></br>
            {/* {user.name}  */}
        </div>
    )
}


// export async function getServerSideProps(context){ 
//     const res = await fetch("http://localhost:3000/api/login_user");
//     const user = await res.json();
    
//     return {
//         props: {user}
//     };
// }

// about.getInitialProps = async ctx => {
//     const res = await fetch('http://localhost:3000/api/login_user')
//     const json = await res.json()
//     return { name: json.name }
// }

