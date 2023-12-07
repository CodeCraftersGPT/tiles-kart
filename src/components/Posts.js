import React,{useState,useEffect} from 'react';

export default function Posts() {
    const [posts,setPosts] = useState([]);// string,number,boolean,array,object
  
    useEffect( () => {

          // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          //   const data = await response.json();
          //   console.log(data);
          //   setPosts(data);

      // fetch api in async/await
       try
       {
        const fetchData =  async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            setPosts(data);
          }
          fetchData();
       }
       catch(error)
       {
        console.error('Error:', error);
       }
       finally
        {
  
        }
    },[])
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}