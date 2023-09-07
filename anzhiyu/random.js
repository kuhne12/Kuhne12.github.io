var posts=["posts/22673bc3.html","posts/c2452c30.html","posts/e7188b37.html","posts/8d037627.html","posts/a6d8a9c3.html","posts/3b91aa4a.html","posts/165b6b1f.html","posts/51cb83d8.html","posts/4eaebf01.html","posts/3a825668.html","posts/af3fbdec.html","posts/427694ff.html","posts/73da8444.html","posts/c2997c1d.html","posts/c201a194.html","posts/7bb8d9fa.html","posts/32818c6e.html","posts/ca4a049e.html","posts/aee2e3bf.html","posts/37f9b718.html","posts/cdcf21cf.html","posts/96074ef.html","posts/4a818336.html","posts/1af2ae7a.html","posts/1819e07.html","posts/3fc42b2c.html","posts/2609eb73.html","posts/dc7d8d44.html","posts/90deef5.html","posts/39060a00.html","posts/1a38dfab.html","posts/2b39f1b0.html","posts/f92c422d.html","posts/9357609.html","posts/e3683629.html","posts/f94b1129.html","posts/dbe65f84.html","posts/d737595d.html","posts/e1342ca3.html","posts/478844cc.html","posts/34a996a1.html","posts/c81fb0eb.html","posts/3e0f996d.html","posts/6c870ab2.html","posts/a98625e0.html","posts/a163a00e.html","posts/de811576.html","posts/40e580d5.html","posts/af5d191f.html","posts/da1a8524.html","posts/38d2ff3.html","posts/7093a5b8.html","posts/37e2b043.html","posts/ab9b07d3.html","posts/aeebe1f9.html","posts/a42f2ba5.html","posts/77f9e3da.html","posts/99832f47.html","posts/ca7bdea1.html","posts/3ff5aa6e.html","posts/35f005cb.html","posts/5feed73c.html","posts/cd76bf5a.html","posts/446bb724.html","posts/b15fd53c.html","posts/8f343fbd.html","posts/e0bdd197.html","posts/9011cf07.html","posts/f1f2cec5.html","posts/2fd4c35c.html","posts/16512831.html","posts/b47dd26d.html","posts/a44dbdc4.html","posts/b175afbf.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱"}];
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

      while (friend_link_list.length && count < 1) {
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