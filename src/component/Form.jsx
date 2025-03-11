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
   
    return (
        <section className="flex flex-col md:flex-row gap-5 mt-3 p-5 md:p-10 justify-center items-center">
          <form
            action=""
            onSubmit={handleFormSubmit}
            className="flex flex-col md:flex-row gap-5 justify-center items-center w-full"
          >
            <div>
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="Add title"
                name="title"
                value={addData.title}
                onChange={handleInputChange}
                className="bg-gray-300 p-2 pl-3 rounded-lg w-full md:w-auto"
              />
            </div>
            <div>
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="Add body"
                name="body"
                value={addData.body}
                onChange={handleInputChange}
                className="bg-gray-300 p-2 pl-3 rounded-lg w-full md:w-auto"
              />
            </div>
            <span className="p-2 bg-green-400 rounded-lg hover:text-white hover:bg-green-700 md:w-auto">
              ADD
            </span>
          </form>
        </section>
      );
    }
export default Form;
