import { useState } from "react";
import Lists from "./Lists";
const Home = () =>
 {
    const [blog,setBlog]=useState(
    [
        {title:"Hope",
        Author:"Abdi",
        body:"lorem.................fff.............        ",
        id:1
       },
       {title:"Given Life ",
       Author:"Abinat",
       body:"lorem.rrrrrsssssssssssssssssssrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr..............................        ",
       id:2 
       },
       {title:"In christ",
        Author:"Naol",
        body:"lorem...hhhhhhhhhhhhhhhhh......ddddddddddddddddddddddddddddddddddddddddddddddddd....................        ",
        id:3
},
    ])
    const handleClick=(id)=>
    {
      const newItems = blog.filter(item => item.id !== id);
  setBlog(newItems);

    }
    return ( 
<div>
  <Lists lists={blog} 
  delete={handleClick}/>

</div>
     );
}
 
export default Home;