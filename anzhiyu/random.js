var posts=["2025/01/18/GitHub/","2025/01/09/Prompt/","2025/01/09/EssayLayout/","2025/01/17/READ/","2025/01/17/MySQL/","2025/01/19/hello-world/","2025/01/17/LaTex/","2025/01/17/PythonEnv/","2025/01/18/PythonDevelopment/","2025/01/17/WebDeploy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };