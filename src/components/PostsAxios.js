// export default PostList = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching posts:', error);
//       })
//   }, []);

//   return (
//     <div>
//       <h2>Post List</h2>
//         <ul>
//           {posts.map(post => (
//             <li key={post.id}>
//               <h3>{post.title}</h3>
//               <p>{post.body}</p>
//             </li>
//           ))}
//         </ul>
//     </div>
//   );
// };

