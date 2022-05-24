import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

const App = () => {
   const [posts, setPosts] = useState([
      {id: 1, title: 'x', body: 'c'},
      {id: 2, title: 'y', body: 'a'},
      {id: 3, title: 'w', body: 'd'}
   ]);
   const [selectedSort, setSelectedSort] = useState("")

   function createPost(newPost) {
      setPosts([...posts, newPost])
   }

   function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   function sortPosts(sort) {
      setSelectedSort(sort);
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
   }

   return (
     <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}} />
        <div>
           <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Sorted By:"
              options={[
                 {value: 'title', name: 'by name'},
                 {value: 'body', name: 'by description'},

              ]}
           />
        </div>
        {posts.length
           ?
           <PostList remove={removePost} posts={posts} title={"Post List 1"}/>
           :
           <h1 style={{textAlign: "center"}} >
              Posts not found
           </h1>
        }
     </div>
  );
};

export default App;

