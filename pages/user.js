//import { viewer } from "./api/login_user" 
import Iron from '@hapi/iron'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'



const TOKEN_SECRET = process.env.TOKEN_SECRET





export default  function user(props,req,res){
    const router = useRouter();

    // const { data } = useSWR('./api/login_user',fetcher)

    return(
        <div className='w-full h-[650px] flex flex-col'>
          <div className='w-full flex items-center'>
            <div className='w-full h-[250px] bg-slate-800 flex items-center justify-center'>
              <div className='w-4/6 h-full flex items-center justify-center'>
                <div className='text-9xl text-slate-300'>
                  welcome
                </div>
              </div>
            </div>
          </div>

          <div className='w-full h-[100px] bg-slate-900 flex items-center justify-center shadow-2xl'>
            <div className='w-4/6 h-full flex items-center'>
              <div className='w-[200px] h-4/6 flex flex-col justify-center pl-4 border-l-[3px] border-l-stone-400 rounded-md'>
                <div className='text-xl'>
                  {props.user.name}
                </div>
                <div className='text-sm text-slate-100/40'>
                  {props.user.email}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}



export async function getServerSideProps(context){
    const cookie = context.req ? context.req.headers.cookie : "";
    const token = cookieStringToObject(cookie)

    const session = await Iron.unseal(token.token,TOKEN_SECRET,Iron.defaults)
    return {
        props: {
            token: token.token,
            user: session,
        }
    };

    


    //원래 의도는 세션에서 email가져와서 finduser로 db에있는 정보를 가져오는건데 
    //이건 세션에 있는 정보를 가져오는거네? 아 몰라 세션에 다 넣어버렷


    // const res = await fetch("http://localhost:3000/api/login_user");
    // const user = await res.json();

}

// export async function session(props){
//     const token = props.token
//     return
// }

export const cookieStringToObject = (cookieString) => {
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

