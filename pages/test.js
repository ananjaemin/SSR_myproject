import { useRouter } from "next/router";
import { parse } from 'cookie'
import Iron from '@hapi/iron'


const TOKEN_NAME = 'token'
const TOKEN_SECRET = process.env.TOKEN_SECRET

const MAX_AGE = 60 * 60 * 8 


export default function test(req) {
    // const {hello} = props


    return <div>
        <h1>test</h1><br></br>  

        {/* <form method="POST" action="./api/join">
            name : <input name="name" className="text-black"></input> <br></br>
            email : <input name="email" className="text-black"></input> <br></br>
            password : <input name="password" type="password" className="text-black" ></input>  <br></br>
            <input type="submit"></input>
        </form> */}
    </div>
}




// export async function testss(req){
//     const cookies = parseCookies(req)
//     const token = cookies[TOKEN_NAME]
//     const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
//     return session
// }

// export function parseCookies(req) {

//     if (req.cookies) {
//       return req.cookies
//     }
  
//     const cookie = req.headers?.cookie
//     return parse(cookie || '')
// }

// export async function getStaticProps(context){
//     const res = await fetch("http://localhost:3000/api/hello");
//     const hello = await res.json();
    
//     return {
//         props: {hello}
//     };
// }






