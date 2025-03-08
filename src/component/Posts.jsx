import { useEffect, useState } from 'react';
import { getPost, deletePost} from '../api/PostApi';
import Form from './Form';

export const Posts =()=>{

    const[data,setData] = useState([]);
      console.log( getPost () );
        const getPostData = async () =>{
        const res= await getPost();
        console.log(res.data);
        setData(res.data);
        }
                             //USEFFECT HOOK
        useEffect(()=> {
         getPostData();
        },[]);
                     //  function for delete post
            
              const deleteHandler = async(id)=>{
                try{   
               const res = await deletePost(id);
               if(res.status === 200){
                 const newUpdatedPosts = data.filter((curPost)=>{
                  return curPost.id !== id;
                }) ;
                setData( newUpdatedPosts);
               }
               else{
                console.log("Failed to delete the post:",res.status);
               }
              } 
                catch (error){
                  console.log(error);
                }
              };
      return (
        <>
            <section className="ml-[50px] sm:px-6 md:px-8"><Form data={data} setData={setData}/></section>
     <section className='w-full max-w-screen-lg mx-auto mt-6 ml-10px'>
      <ol className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-decimal list-inside text-white'>
         {data.map((curElm) => {
          const { id, title, body } = curElm;
          return (
            <div  className='ml-[40px]'>
            <li key={id} className='bg-blue-950 rounded-lg p-4 shadow-black shadow-lg border-2 border-white'>
              <p className='text-white sm:text-base md:text-lg font-semibold'>Title: {title}</p>
              <p className='text-white'>Body: {body}</p>
              <div className='flex justify-center gap-4 mt-3 mb-3'>
                <button className='bg-blue-500 border-2 border-gray-300 text-white px-4 py-2 hover:bg-green-400 rounded-xl'>Edit</button>
                <button
                  className='bg-blue-500 border-2 border-gray-300 text-white px-3 py-2 hover:bg-red-400 rounded-xl'
                  onClick={() => deleteHandler(id)}
                >
                  Delete
                </button>
              </div>
            </li>
             </div>
          );
        })}
      </ol>
    </section>
        </>
    
      )  
}
