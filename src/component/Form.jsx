import { useState } from "react";
import { postData} from '../api/PostApi';
 export const Form =({data,setData})=>{
    const [addData,setAddData]=useState({
        title:"",
        body:"",
    })
    const handleInputChange=(e)=>{
     const name = e.target.name;
     const value = e.target.value;

     setAddData((prev)=>{
    return{
        ...prev,
        [name]:value,
    };
     });
    };
    const addPostData = async ()=>{
         const res = await postData(addData);
         console.log("res",res);    

         if(res.status == 201){
            setData([...data, res.data]);
            setAddData({title: "",body: ""});
         }
    };
    const handleFormSubmit=(e)=>{
      e.preventDefault();
      addPostData();
    };
    return(
        
        <section className="bg-blue-900 flex gap-5 mt-3 p-5 ">  
        <form action="" onSubmit={handleFormSubmit} className="flex gap-5 justify-center items-center">
            <div>
            <label htmlFor=""></label>
            <input type="text" placeholder="Add title" className="pl-3 rounded-lg" name="title" value={addData.title} onChange={handleInputChange}/>
            </div>
           <div>
           <label htmlFor=""></label>
           <input type="text" placeholder="Add body" className="pl-3 rounded-lg" name="body" value={addData.body} onChange={handleInputChange}/>
           </div>
           <button className="p-2 bg-green-400  rounded-lg hover:text-white hover:bg-green-700">ADD</button>
        </form>
      
     
      
        </section>
    );
}


export default Form;