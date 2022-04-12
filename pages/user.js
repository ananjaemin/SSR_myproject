//import { viewer } from "./api/login_user" 
import Iron from '@hapi/iron'



const TOKEN_SECRET = process.env.TOKEN_SECRET



export default  function user(props){
    const {admin} = props;
    if (typeof props.tokend === "string"){
      return<div>
        로그인해 주세요
      </div>
    }else if(props.user.id === "13fcf6f2-d9d0-4fc6-9f52-c810b93f450c"){
      return(
          <div className='w-full flex flex-col'>
            <div className='w-full flex items-center'>
              <div className='w-full h-[250px] bg-slate-800 flex items-center justify-center'>
                <div className='w-4/6 h-full flex items-center justify-center'>
                  <div className='text-9xl text-slate-300'>
                    admin
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full h-[100px] bg-slate-900 flex items-center justify-center shadow-2xl'>
              <div className='w-4/6 h-full flex items-center justify-between'>
                <div className='w-[200px] h-4/6 flex flex-col justify-center pl-4 border-l-[3px] border-l-stone-400 rounded-md'>
                  <div className='text-xl'>
                    {props.user.name}
                  </div>
                  <div className='text-sm text-slate-100/40'>
                    {props.user.email}
                  </div>
                </div>

                <div className='w-[260px] h-full flex justify-end items-center text-slate-100/60'>
                  <div>
                    - 회원가입일 : {props.user.createdtime} -
                  </div>
                </div>

              </div>
            </div>
            <div className='w-full flex justify-end '>
              <form method='POST' action='./api/logout'>
                <button className='text-slate-100/60'>logout</button>
              </form>
            </div>
            <div className='w-full h-[700px] flex items-center justify-center'>
              <div className='w-[1100px] h-[600px] bg-slate-800/70 rounded-2xl flex'>
                <div className='w-full h-full flex flex-col p-3 items-center overflow-auto overflow-x-hidden scrollbar-hide'>
                  {
                    admin.map((item)=>
                      <>
                        <div className='w-full h-[40px] bg-slate-600 rounded-3xl m-2 flex items-center'>
                          <div className='w-[80px] h-full flex items-center justify-center bg-slate-800/70 rounded-l-2xl text-slate-200 font-bold'>
                             {item.name} 
                          </div>
                          <div className='w-[250px] h-[30px] flex items-center justify-center text-slate-300 border-r-4  border-slate-700'>
                            {item.email}
                          </div>
                          <div className='w-[330px] h-[30px] flex items-center justify-center text-slate-300 border-r-4  border-slate-700'>
                            {item.id}
                          </div>
                          <div className='w-[330px] h-[30px] flex items-center justify-center text-slate-300 border-r-4  border-slate-700'>
                            {item.createdtime}
                          </div>
                        </div>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
        </div>
      )
    }
    else{
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
            <div className='w-4/6 h-full flex items-center justify-between'>
              <div className='w-[200px] h-4/6 flex flex-col justify-center pl-4 border-l-[3px] border-l-stone-400 rounded-md'>
                <div className='text-xl'>
                  {props.user.name}
                </div>
                <div className='text-sm text-slate-100/40'>
                  {props.user.email}
                </div>
              </div>

              <div className='w-[260px] h-full flex justify-end items-center text-slate-100/60'>
                <div>
                  - 회원가입일 : {props.user.createdtime} -
                </div>
              </div>

            </div>
          </div>

          <div className='w-full flex justify-end '>
            <form method='POST' action='./api/logout'>
              <button className='text-slate-100/60'>logout</button>
            </form>
          </div>
        </div>
      )
    }

}



export async function getServerSideProps(context){
    const cookie = context.req ? context.req.headers.cookie : "";
    const res = await fetch("http://localhost:3000/api/adminpage")
    const admin = await res.json()
    if (typeof cookie === "undefined"){
      return{
        props:{
          tokend: "undefined"
        }
      }
    }else{
      const token = cookieStringToObject(cookie)
      const session = await Iron.unseal(token.token,TOKEN_SECRET,Iron.defaults)
      return {
          props: {
            user: session,
            admin
          }
      };
    }


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

