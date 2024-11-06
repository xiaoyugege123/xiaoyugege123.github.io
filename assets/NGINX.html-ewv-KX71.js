import{_ as a,r as l,o as d,c as r,a as n,b as i,d as s,e as t}from"./app-Bn7XLESk.js";const c={},o=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx"},[n("span",null,"Nginx")])],-1),v=n("p",null,[n("strong",null,"推荐文章")],-1),p={href:"https://www.kuangstudy.com/bbs/1353634800149213186",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1F5411J7vK?p=1&vd_source=bf3353ad677b1fdc2e25b9a255e71902",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1TZ421b7SD/?spm_id_from=333.337.search-card.all.click&vd_source=bf3353ad677b1fdc2e25b9a255e71902",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_36551991/article/details/118612282",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/BV1rG4y1e7BQ/?share_source=copy_web&vd_source=637a17631c58c283d29c16f50dab56a9",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="nginx常用命令" tabindex="-1"><a class="header-anchor" href="#nginx常用命令"><span>Nginx常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reopen <span class="token comment">#重启Nginx</span>

nginx <span class="token parameter variable">-s</span> reload <span class="token comment">#重新加载Nginx配置文件，然后以优雅的方式重启Nginx</span>

nginx <span class="token parameter variable">-s</span> stop <span class="token comment">#强制停止Nginx服务</span>

nginx <span class="token parameter variable">-s</span> quit <span class="token comment">#优雅地停止Nginx服务（即处理完所有请求后再停止服务）</span>

nginx <span class="token parameter variable">-t</span> <span class="token comment">#检测配置文件是否有语法错误，然后退出</span>

nginx -?,-h <span class="token comment">#打开帮助信息</span>

nginx <span class="token parameter variable">-v</span> <span class="token comment">#显示版本信息并退出</span>

nginx <span class="token parameter variable">-V</span> <span class="token comment">#显示版本和配置选项信息，然后退出</span>

nginx <span class="token parameter variable">-t</span> <span class="token comment">#检测配置文件是否有语法错误，然后退出</span>

nginx <span class="token parameter variable">-T</span> <span class="token comment">#检测配置文件是否有语法错误，转储并退出</span>

nginx <span class="token parameter variable">-q</span> <span class="token comment">#在检测配置文件期间屏蔽非错误信息</span>

nginx <span class="token parameter variable">-p</span> prefix <span class="token comment">#设置前缀路径(默认是:/usr/share/nginx/)</span>

nginx <span class="token parameter variable">-c</span> filename <span class="token comment">#设置配置文件(默认是:/etc/nginx/nginx.conf)</span>

nginx <span class="token parameter variable">-g</span> directives <span class="token comment">#设置配置文件外的全局指令</span>

<span class="token function">killall</span> nginx <span class="token comment">#杀死所有nginx进程</span>

Nginx在windows下常用命令：

启动：
直接点击Nginx目录下的nginx.exe 或者 cmd运行start nginx

关闭
nginx <span class="token parameter variable">-s</span> stop 或者 nginx <span class="token parameter variable">-s</span> quit

stop表示立即停止nginx,不保存相关信息

quit表示正常退出nginx,并保存相关信息

nginx <span class="token parameter variable">-s</span> stop 或者 nginx <span class="token parameter variable">-s</span> quit

nginx <span class="token parameter variable">-s</span> reload ：修改配置后重新加载生效

nginx <span class="token parameter variable">-s</span> reopen ：重新打开日志文件

nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /path/to/nginx.conf 测试nginx配置文件是否正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-nginx" tabindex="-1"><a class="header-anchor" href="#linux-nginx"><span>Linux &amp;&amp; Nginx</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看Nginx日志</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/nginx/error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx出错的地方" tabindex="-1"><a class="header-anchor" href="#nginx出错的地方"><span>Nginx出错的地方</span></a></h2><h3 id="nginx-403-forbidden-错误的原因及解决办法" tabindex="-1"><a class="header-anchor" href="#nginx-403-forbidden-错误的原因及解决办法"><span>nginx “403 Forbidden” 错误的原因及解决办法</span></a></h3><blockquote><p>Nginx 的 403 Forbidden errors 表示你在请求一个资源文件但是nginx不允许你查看。 403 Forbidden 只是一个HTTP状态码，像404,200一样不是技术上的错误。 哪些场景需要返回403状态码的场景？</p></blockquote><ol><li>网站禁止特定的用户访问所有内容，例：网站屏蔽某个ip访问。</li><li>访问禁止目录浏览的目录，例：设置autoindex off后访问目录。</li><li>用户访问只能被内网访问的文件。</li></ol><p>以上几种常见的需要返回 403 Forbidden 的场景。</p><p>由于服务器端的错误配置导致在不希望nginx返回403时返回403 Forbidden。</p><ol><li>权限配置不正确</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>这个是nginx出现403 forbidden最常见的原因。
为了保证文件能正确执行，nginx既需要文件的读权限,又需要文件所有父目录的可执行权限。
例如，当访问/usr/local/nginx/html/image.jpg时，nginx既需要image.jpg文件的可读权限，
也需要/, /usr,/usr/local,/usr/local/nginx,/usr/local/nginx/html的可以执行权限。

解决办法:设置所有父目录为755权限，设置文件为644权限可以避免权限不正确。

# 这个是nginx出现403 forbidden最常见的原因。
# 为了保证文件能正确执行，nginx既需要文件的读权限,又需要文件所有父目录的可执行权限。
# 解决办法：可以将权限修改为root，在nginx的nginx.conf 文件的顶部加上user root;指定操作的用户是root。
user root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>目录索引设置错误（index指令配置）</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>网站根目录不包含index指令设置的文件。

例如，运行PHP的网站，通常像这样配置index

index index.html index.htm index.php;

当访问该网站的时，nginx 会按照 index.html，index.htm ，index.php 的先后顺序在根目录中查找文件。如果这三个文件都不存在，那么nginx就会返回403 Forbidden。

如果index中不定义 index.php ，nginx直接返回403 Forbidden而不会去检查index.php是否存在。

同样对于如果运行jsp, py时也需要添加index.jsp,index.py到目录索引指令index中。

解决办法:添加首页文件到index指令，常见的是index.php，index.jsp，index.jsp或者自定义首页文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function h(k,f){const e=l("ExternalLinkIcon");return d(),r("div",null,[o,v,n("p",null,[n("a",p,[i("Nginx快速入门——狂神说"),s(e)])]),n("p",null,[n("a",m,[i("Nginx哔站视频——狂神说"),s(e)])]),n("p",null,[n("a",b,[i("技术蛋老师——Nginx视频"),s(e)])]),n("p",null,[n("a",u,[i("万字带你搞懂nginx的配置文件"),s(e)])]),n("p",null,[n("a",x,[i("nginx一小时入门精讲课程(干货纯享版)"),s(e)])]),g])}const N=a(c,[["render",h],["__file","NGINX.html.vue"]]),w=JSON.parse('{"path":"/computer/NGINX.html","title":"Nginx","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Nginx常用命令","slug":"nginx常用命令","link":"#nginx常用命令","children":[]},{"level":2,"title":"Linux && Nginx","slug":"linux-nginx","link":"#linux-nginx","children":[]},{"level":2,"title":"Nginx出错的地方","slug":"nginx出错的地方","link":"#nginx出错的地方","children":[{"level":3,"title":"nginx “403 Forbidden” 错误的原因及解决办法","slug":"nginx-403-forbidden-错误的原因及解决办法","link":"#nginx-403-forbidden-错误的原因及解决办法","children":[]}]}],"filePathRelative":"computer/NGINX.md","git":{"createdTime":1722664659000,"updatedTime":1723431776000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":2}]},"readingTime":{"minutes":3.4,"words":1020}}');export{N as comp,w as data};
