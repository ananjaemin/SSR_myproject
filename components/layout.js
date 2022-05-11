

export default function layout (){

    return(
        <div className="w-full h-12 bg-[#0C151C] flex justify-center items-center ">
            <div className="w-11/12 h-full flex items-center justify-between">  
                <a href="/" className="h-full text-[35px] font-semibold flex items-center ">
                    SSR
                </a>
                <div className="w-3/4 h-full flex items-center justify-between">
                    <div className="w-3/4 h-full flex items-center ">
                        <div className="w-3/4 h-full flex items-center justify-evenly">
                            <a href="/user" className="">
                                user
                            </a>
                            <a href="/">
                                none
                            </a>
                            <a href="/">
                                none
                            </a>
                            <a href="/">
                                none
                            </a>
                        </div>

                    </div>


                    <a href="/login" className="bg-[#2c4659] rounded-2xl py-[3px] px-[15px] text-center font-semibold">login</a>



                </div>
            </div>
        </div>
    )
}




