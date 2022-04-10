// import Iron from '@hapi/iron'
// import { TOKEN_NAME,TOKEN_SECRET } from "./login_cookie"
// import { parse } from 'cookie'
// import { findUser } from "./join"
// import viewer from './login_user'
// export default async function handler(req,res){
//     try{
      
//       const session = await viewer(req,res)
//       const user = await findUser({email:session.email})
      
//       return res.json({name:user.email})
//     }
//     catch{
//         return res.status(200).json({name: '실패'});
//     }
// }
