import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    console.log('posts',posts)
    const allposts = posts.map((post)=>{
       return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return (
        <main>
            {allposts}
        </main>
    );

}

export default ArticleList