import { useRouter } from "next/router";

export default function test(props) {
    const {hello} = props
    return <div>
        <h1>성공</h1><br></br>
        {
            hello.map(
                (item)=><>
                    <h2>{item.name}</h2>
                    <p>{item.createdtime}</p>
                    <p>{item.email}</p><br></br>
                </>
            )

        }
        <form method="POST" action="./api/join">
            name : <input name="name" className="text-black"></input> <br></br>
            email : <input name="email" className="text-black"></input> <br></br>
            password : <input name="password" type="password" className="text-black" ></input>  <br></br>
            <input type="submit"></input>
        </form>
    </div>
}


export async function getStaticProps(context){
    const res = await fetch("http://localhost:3000/api/hello");
    const hello = await res.json();
    
    return {
        props: {hello}
    };
}




