import { useEffect } from "react";


export function SimpleUseEffect(){

    useEffect(() => {
        console.log("Component Mounted");

        // fetcj (url  , options    ).then(success).catch(error
     
        // promise based syntax
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // data is going to be an array of posts.
          // Handle the data
        })
        .catch(error => {
          // Handle errors
        });
      

        // to get the data from back end 

        // i want to fetch the data from back end and display it in the page.
        // i need to have some thing called amazon which gives me the data.
        // there are dummy rest api providers which gives you the data.
        // fetch the data from the api.
        // display the data in the page.
        // we are going to call posts from the json placeholder api. and display it in the page.
        // https://jsonplaceholder.typicode.com/posts
        // we will fetch the posts and display in the UI. title and body of the post.


        // this code is going to get executed when ever component is mounted. 
    },[]);




    return(
        <div>
            {/* title and body of the post here with map method. */}
            <h1>Simple Use Effect</h1>
        </div>
    )

}