var posts=["2025/01/18/EssayLayout/","2025/01/18/GitHub/","2025/01/18/Prompt/","2025/01/18/DatabaseNote/","2025/01/18/LaTex/","2025/01/18/MySQL/","2025/01/18/WebDeploy/","2025/01/18/READ/","2025/01/18/PythonEnv/","2025/01/18/PythonDevelopment/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };