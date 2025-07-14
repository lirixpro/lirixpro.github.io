var posts=["hello-world/","ai-com/","hexo-blog-building/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };