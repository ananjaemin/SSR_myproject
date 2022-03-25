

export default function user({token}) {
    let ddd
    if(token != '' && token != 'none'){
      ddd =(
        <div>
          login
        </div>
      )
    }
      else{
        ddd=(
          <div>
            no login
          </div>
        )
    }

    return (
      <>
        <h1>token: {token}</h1>
        <div> {ddd} </div>
        <form>
          <input type="text" id="ttt" name="ttt"></input>
        </form>
        <button type="button" onClick={() => {
          //cookie.set("token","test",{expires:1/24});
           fetch("./api/login",{
             method:"POST",
             headers:{
               "Content-Type": "application/json",
             },
             body: JSON.stringify({token:`${tokenvalue()}`})
           })
          
          }}>login</button><br></br>
        <button type="button" onClick={() => {
          //cookie.remove("token");
          fetch("./api/logout",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({token:"none"})
          })
         
          
          }}>logout</button>
      </>
    )
}

export function tokenvalue(){
  var eee = document.getElementById("ttt").value;
  return eee
}

let cook

export function tokend(){
  return cook
}


export function getServerSideProps({req,res}) {
  cook = req.cookies.token
  return {props: { token: req.cookies.token || ""}};
}