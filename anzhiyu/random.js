var posts=["2025/01/18/AI/Prompt/","2025/01/18/GDUT/EssayLayout/","2025/01/18/GDUT/MySQL/","2025/01/20/Life/MacBook Pro(M3 Pro)分享/","2025/01/20/Skill/JavaDevelopment/","2025/01/18/GDUT/DatabaseNote/","2025/01/18/Skill/GitHub/","2025/01/18/Skill/LaTex/","2025/01/18/Skill/PythonDevelopment/","2025/01/18/Skill/READ/","2025/01/18/Skill/PythonEnv/","2025/01/18/Skill/WebDeploy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"靖","link":"https://jingz.us.kg/","avatar":"https://raw.githubusercontent.com/hhgzeng/Photos/refs/heads/main/Avatar/zongjie.jpg","descr":"保持热爱，奔赴山海","siteshot":"https://raw.githubusercontent.com/hhgzeng/Photos/refs/heads/main/HomePage/Friend/jing.png","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://raw.githubusercontent.com/hhgzeng/Photos/refs/heads/main/Avatar/Friend/fomalhaut.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://raw.githubusercontent.com/hhgzeng/Photos/refs/heads/main/HomePage/Friend/fomalhaut.png","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://raw.githubusercontent.com/hhgzeng/Photos/refs/heads/main/Avatar/Friend/fomalhaut.webp","descr":"Future is now 🍭🍭🍭","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };