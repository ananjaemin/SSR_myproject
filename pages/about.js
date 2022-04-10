//import { viewer } from "./api/login_user" 
import useSWR from "swr"
// import { parse } from "cookie";
import Iron from '@hapi/iron'

export default  function about(props){
    const {user} = props
    // const { data } = useSWR('./api/login_user',fetcher)

    return(
        <div>
            about<br></br>
            {user.name} 
        </div>
    )
}


export async function getServerSideProps(context){ 
    const cookie = context.req ? context.req.headers.cookie : "";
    const token = cookieStringToObject(cookie)
    
    //console.log(token.token)

    const res = await fetch("http://localhost:3000/api/login_user");
    const user = await res.json();
    return {
        props: {
            user,

        }
    };
}
const cookieStringToObject = (cookieString) => {
    if (!cookieString) {
      return "";
    } else {
    
      cookieString = cookieString.split("; ");
      let result = {};
      
      for (var i = 0; i < cookieString.length; i++) {
        var cur = cookieString[i].split("=");
        result[cur[0]] = cur[1];
      }
      return result;
    }
};

// export function parseCookies(req) {

//   if (req.cookies) {
//     return req.cookies
//   }

//   const cookie = req.headers?.cookie
//   return parse(cookie || '')
// }


// about.getInitialProps = async ctx => {
//     const res = await fetch('http://localhost:3000/api/login_user')
//     const json = await res.json()
//     return { name: json.name }
// }

