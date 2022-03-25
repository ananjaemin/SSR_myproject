import cookie from 'cookie';
import { tokend } from '../pages/user';

export default function layout (){
    let hidden;
    console.log(tokend())
    if (tokend() === "none" && tokend() === ""){
        hidden= (
            <a href="/login" id="test" class="bg-[#2c4659] rounded-2xl py-[3px] px-[15px] text-center font-semibold">login</a>
        )
    }
    else{
        hidden= (
            <a href="/" id="test" class="bg-[#2c4659] rounded-2xl py-[3px] px-[15px] text-center font-semibold">logout</a>
        )

    }
    return(
        <div class="w-full h-12 bg-[#0C151C] flex justify-center items-center">
            <div class="w-11/12 h-full flex items-center justify-between">
                <a href="/" class="h-full text-[35px] font-semibold flex items-center ">
                    SSR
                </a>
                <div class="w-3/4 h-full flex items-center justify-between">
                    <div class="w-3/4 h-full flex items-center ">
                        <div class="w-3/4 h-full flex items-center justify-evenly">
                            <a href="/about" class="">
                                About
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

                    {hidden}




                </div>
            </div>
        </div>
    )
}

  

