//import { viewer } from "./api/login_user" 
import useSWR from "swr"
import { parse } from "cookie";
import Iron from '@hapi/iron'

const TOKEN_SECRET = process.env.TOKEN_SECRET

export default  function about(props,req,res){
    // const { data } = useSWR('./api/login_user',fetcher)
    const {test} = props
    return(
        <div>
            {test.id}<br></br>
            {test.email}<br></br>
            {test.name} <br></br>
            {test.createdtime}
        </div>
    )
}


export async function getServerSideProps(context){ 
    const cookie = context.req ? context.req.headers.cookie : "";
    const token = cookieStringToObject(cookie)
    const session = await Iron.unseal(token.token,TOKEN_SECRET,Iron.defaults)


    //원래 의도는 세션에서 email가져와서 finduser로 db에있는 정보를 가져오는건데 
    //이건 세션에 있는 정보를 가져오는거네? 아 몰라 세션에 다 넣어버렷


    // const res = await fetch("http://localhost:3000/api/login_user");
    // const user = await res.json();
    return {
        props: {
            test:session,
        }
    };
}


// export async function dd(props){
//     const token = props.test
//     const session = await Iron.unseal(token,"eobikeobikeobikeobikeobikeobikqw", Iron.defaults)
//     return session
// }



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

