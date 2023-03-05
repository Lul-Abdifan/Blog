import { useState } from "react";
const Home = () =>
 {
    const [blog,setBlog]=useState(
    [
        {title:"Hope",
        Author:"Abdi",
        body:"lorem..............................        ",
        id:1
       },
       {title:"Given Life ",
       Author:"Abinat",
       body:"lorem.rrrrrsssssssssssssssssssrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr..............................        ",
       id:1   
       },
       {title:"In christ",
        Author:"Naol",
        body:"lorem...hhhhhhhhhhhhhhhhh......ddddddddddddddddddddddddddddddddddddddddddddddddd....................        ",
        id:3
},
    ])
    return ( 
<div>
  {
    blog.map((list)=>(
     
<div class="flex items-center justify-center mt-5">
  <div class="bg-gray-300 p-5 rounded-lg mt-2 w-300">
        <h1 class="font-bold text-2xl bg-purple text-red-600 ">{list.title}</h1>
        <h2 class="text-red-500 text-bold pb-2">Written By {list.Author}</h2>
        <p class="w-80 text break-words">{list.body}</p>
       </div>
       </div>
    ))
  }


</div>
     );
}
 
export default Home;