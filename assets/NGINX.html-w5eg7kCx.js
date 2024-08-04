import{_ as l,r as d,o as a,c as r,a as n,b as e,d as s,e as c}from"./app-D3FNjmSm.js";const t={},v=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx"},[n("span",null,"Nginx")])],-1),o=n("p",null,[n("strong",null,"推荐文章")],-1),u={href:"https://www.kuangstudy.com/bbs/1353634800149213186",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1F5411J7vK?p=1&vd_source=bf3353ad677b1fdc2e25b9a255e71902",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1TZ421b7SD/?spm_id_from=333.337.search-card.all.click&vd_source=bf3353ad677b1fdc2e25b9a255e71902",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/qq_36551991/article/details/118612282",target:"_blank",rel:"noopener noreferrer"},x=c(`<h2 id="nginx常用命令" tabindex="-1"><a class="header-anchor" href="#nginx常用命令"><span>Nginx常用命令</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nginx -s reopen #重启Nginx

nginx -s reload #重新加载Nginx配置文件，然后以优雅的方式重启Nginx

nginx -s stop #强制停止Nginx服务

nginx -s quit #优雅地停止Nginx服务（即处理完所有请求后再停止服务）

nginx -t #检测配置文件是否有语法错误，然后退出

nginx -?,-h #打开帮助信息

nginx -v #显示版本信息并退出

nginx -V #显示版本和配置选项信息，然后退出

nginx -t #检测配置文件是否有语法错误，然后退出

nginx -T #检测配置文件是否有语法错误，转储并退出

nginx -q #在检测配置文件期间屏蔽非错误信息

nginx -p prefix #设置前缀路径(默认是:/usr/share/nginx/)

nginx -c filename #设置配置文件(默认是:/etc/nginx/nginx.conf)

nginx -g directives #设置配置文件外的全局指令

killall nginx #杀死所有nginx进程

Nginx在windows下常用命令：

启动：
直接点击Nginx目录下的nginx.exe 或者 cmd运行start nginx

关闭
nginx -s stop 或者 nginx -s quit

stop表示立即停止nginx,不保存相关信息

quit表示正常退出nginx,并保存相关信息

nginx -s stop 或者 nginx -s quit

nginx -s reload ：修改配置后重新加载生效

nginx -s reopen ：重新打开日志文件

nginx -t -c /path/to/nginx.conf 测试nginx配置文件是否正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(h,_){const i=d("ExternalLinkIcon");return a(),r("div",null,[v,o,n("p",null,[n("a",u,[e("Nginx快速入门——狂神说"),s(i)])]),n("p",null,[n("a",m,[e("Nginx哔站视频——狂神说"),s(i)])]),n("p",null,[n("a",b,[e("技术蛋老师——Nginx视频"),s(i)])]),n("p",null,[n("a",g,[e("万字带你搞懂nginx的配置文件"),s(i)])]),x])}const f=l(t,[["render",p],["__file","NGINX.html.vue"]]),k=JSON.parse('{"path":"/computer/NGINX.html","title":"Nginx","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Nginx常用命令","slug":"nginx常用命令","link":"#nginx常用命令","children":[]}],"filePathRelative":"computer/NGINX.md","git":{"createdTime":1722664659000,"updatedTime":1722664659000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404}}');export{f as comp,k as data};
