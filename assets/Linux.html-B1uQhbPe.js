import{_ as l,r as t,o as i,c as o,a as s,b as a,d as e,e as c}from"./app-Bn7XLESk.js";const r={},d=s("h1",{id:"linux",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#linux"},[s("span",null,"Linux")])],-1),p=s("h2",{id:"如何利用-curl-进行接口调试",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#如何利用-curl-进行接口调试"},[s("span",null,"如何利用 curl 进行接口调试？")])],-1),u=s("p",null,[s("strong",null,"参考文章")],-1),m={href:"https://www.ruanyifeng.com/blog/2019/09/curl-reference.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://ruanyifeng.com/blog/2011/09/curl.html",target:"_blank",rel:"noopener noreferrer"},b=s("p",null,[s("strong",null,"简介")],-1),h={href:"https://curl.se/windows/",target:"_blank",rel:"noopener noreferrer"},g=c(`<ol><li>不带有任何参数时，curl 就是发出 GET 请求</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><code>-A</code>参数指定客户端的用户代理标头，即 User-Agent。curl 的默认用户代理字符串是 curl/[version]。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;Mozilla/5.0 (xiaoyu)&quot;</span> http://localhost:3000

<span class="token comment"># 下面命令会移除User-Agent标头</span>
<span class="token function">curl</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;&quot;</span> http://localhost:3000

<span class="token comment"># 也可以通过-H参数直接指定标头，更改User-Agent</span>
<span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;User-Agent: xiaoyu&quot;</span> http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>-b</code>参数用来向服务器发送 Cookie。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成一个标头Cookie: foo=bar，向服务器发送一个名为foo、值为bar的 Cookie</span>
<span class="token function">curl</span> <span class="token parameter variable">-b</span> <span class="token string">&quot;foo=bar&quot;</span> http://localhost:3000

<span class="token comment"># 读取本地文件cookies.txt，里面是服务器设置的 Cookie（参见-c参数），将其发送到服务器</span>
<span class="token function">curl</span> <span class="token parameter variable">-b</span> cookies.txt http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面从本地读取的文件内容有着一定的格式，和下面生成的格式一样！</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># Netscape HTTP Cookie File
# https://curl.se/docs/http-cookies.html
# This file was generated by libcurl! Edit at your own risk.

localhost	FALSE	/	FALSE	0	name	zhangsan

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>-c</code>参数将服务器设置的 Cookie 写入一个文件。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-c</span> cookies.txt http://localhost:3000
<span class="token comment"># 上面命令将服务器的 HTTP 回应所设置 Cookie 写入文本文件cookies.txt。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><code>-d</code>参数用于发送 POST 请求的数据体</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;login=emma&amp;password=123&quot;</span> <span class="token parameter variable">-X</span> POST http://localhost:3000/login
<span class="token comment"># or</span>
<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;login=emma&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;password=123&quot;</span> <span class="token parameter variable">-X</span> POST http://localhost:3000/login

<span class="token comment"># 使用-d参数以后，HTTP 请求会自动加上标头Content-Type : application/x-www-form-urlencoded。并且会自动将请求转为 POST 方法，因此可以省略-X POST。</span>
<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;login=emma&amp;password=123&quot;</span> http://localhost:3000/login

<span class="token comment"># 命令读取data.txt文件的内容，作为数据体向服务器发送</span>
<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;@data.txt&quot;</span> http://localhost:3000/login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><code>--data-urlencode</code>参数等同于-d，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;comment=hello world&quot;</span> http://localhost:3000/login
<span class="token comment"># 上面代码中，发送的数据hello world之间有一个空格，需要进行 URL 编码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li><code>-e</code>参数用来设置 HTTP 的标头 Referer，表示请求的来源。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 命令将Referer标头设为https://google.com?q=example</span>
<span class="token function">curl</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;https://google.com?q=example&quot;</span> http://localhost:3000

<span class="token comment"># -H参数可以通过直接添加标头Referer，达到同样效果</span>
<span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Referer:https://google.com?q=example&quot;</span> http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><code>-F</code>参数用来向服务器上传二进制文件。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;file=@photo.png&#39;</span> https://google.com/profile
<span class="token comment"># 上面命令会给 HTTP 请求加上标头Content-Type: multipart/form-data，然后将文件photo.png作为file字段上传。</span>

<span class="token comment"># -F参数可以指定 MIME 类型。</span>


<span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;file=@photo.png;type=image/png&#39;</span> https://google.com/profile
<span class="token comment"># 上面命令指定 MIME 类型为image/png，否则 curl 会把 MIME 类型设为application/octet-stream。</span>

<span class="token comment"># -F参数也可以指定文件名。</span>


<span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;file=@photo.png;filename=me.png&#39;</span> https://google.com/profile
<span class="token comment"># 上面命令中，原始文件名为photo.png，但是服务器接收到的文件名为me.png。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li><code>-G</code>参数用来构造 URL 的查询字符串。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 令会发出一个 GET 请求，实际请求的 URL 为https://google.com/search?q=kitties&amp;count=20。如果省略-G，会发出一个 POST 请求</span>
<span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;q=kitties&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;count=20&quot;</span> http://localhost:3000

<span class="token comment"># 如果数据需要 URL 编码，可以结合--data-urlencode参数。</span>
<span class="token function">curl</span> <span class="token parameter variable">-G</span> --data-urlencode <span class="token string">&quot;q=kitties&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;count=20&quot;</span> http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li><code>-H</code>参数添加 HTTP 请求的标头。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept-Language: en-US&quot;</span> http://localhost:3000
<span class="token comment"># 上面命令添加 HTTP 标头Accept-Language: en-US。</span>


<span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept-Language: en-US&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Secret-Message: xyzzy&quot;</span> http://localhost:3000
<span class="token comment"># 上面命令添加两个 HTTP 标头。</span>


<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;{<span class="token entity" title="\\&quot;">\\&quot;</span>name<span class="token entity" title="\\&quot;">\\&quot;</span>:<span class="token entity" title="\\&quot;">\\&quot;</span>xiaoyu<span class="token entity" title="\\&quot;">\\&quot;</span>}&quot;</span> <span class="token parameter variable">-H</span>  <span class="token string">&quot;Content-Type: application/json&quot;</span> http://localhost:3000/login
<span class="token comment"># 上面命令添加 HTTP 请求的标头是Content-Type: application/json，然后用-d参数发送 JSON 数据。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li><code>-i</code>参数打印出服务器回应的 HTTP 标头。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码</span>
<span class="token function">curl</span> <span class="token parameter variable">-i</span> http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li><code>-I</code>参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-I</span> http://localhost:3000

<span class="token comment"># --head参数等同于-I。</span>
<span class="token function">curl</span> <span class="token parameter variable">--head</span> http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li><code>-k</code>参数指定跳过 SSL 检测。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://www.example.com
<span class="token comment"># 上面命令不会检查服务器的 SSL 证书是否正确。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14"><li><code>-L</code>参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;tweet=hi&#39;</span> https://api.twitter.com/tweet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="15"><li><code>--limit-rate</code>用来限制 HTTP 请求和回应的带宽，模拟慢网速的环境。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> --limit-rate 1b http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="16"><li><code>-o</code>参数将服务器的回应保存成文件，等同于 wget 命令。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-o</span> hello.txt http://localhost:3000
<span class="token comment"># 上面命令将保存成hello.txt。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17"><li><code>-O</code>参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-O</span> https://www.example.com/foo/bar.html
<span class="token comment"># 上面命令将服务器回应保存成文件，文件名为bar.html。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="18"><li><code>-s</code>参数将不输出错误和进度信息。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://www.example.com
<span class="token comment"># 上面命令一旦发生错误，不会显示错误信息。不发生错误的话，会正常显示运行结果</span>

<span class="token comment"># 如果想让 curl 不产生任何输出，可以使用下面的命令。</span>
<span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-o</span> /dev/null https://google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="19"><li><code>-S</code> 参数指定只输出错误信息，通常与-s 一起使用</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-o</span> /dev/null https://google.com
<span class="token comment">## 上面命令没有任何输出，除非发生错误。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="20"><li><code>-u</code>参数用来设置服务器认证的用户名和密码。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-u</span> <span class="token string">&quot;bob:12345&quot;</span> https://google.com/login
<span class="token comment"># 上面命令设置用户名为bob，密码为12345，然后将其转为 HTTP 标头Authorization: Basic Ym9iOjEyMzQ1</span>

<span class="token function">curl</span> https://bob:12345@google.com/login
<span class="token comment"># 上面命令能够识别 URL 里面的用户名和密码，将其转为上个例子里面的 HTTP 标头</span>

<span class="token function">curl</span> <span class="token parameter variable">-u</span> <span class="token string">&#39;bob&#39;</span> https://google.com/login
<span class="token comment"># 上面命令只设置了用户名，执行后，curl 会提示用户输入密码。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="21"><li><code>-v</code>参数输出通信的整个过程，用于调试</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-v</span>  http://localhost:3000

<span class="token comment"># --trace参数也可以用于调试，还会输出原始的二进制数据。</span>
<span class="token function">curl</span> <span class="token parameter variable">--trace</span> - http://localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="22"><li><code>-x</code>参数指定 HTTP 请求的代理。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-x</span> socks5://james:cats@myproxy.com:8080 https://www.example.com
<span class="token comment"># 上面命令指定 HTTP 请求通过myproxy.com:8080的 socks5 代理发出。</span>

<span class="token comment"># 如果没有指定代理协议，默认为 HTTP。</span>
<span class="token function">curl</span> <span class="token parameter variable">-x</span> james:cats@myproxy.com:8080 https://www.example.com
<span class="token comment"># 上面命令中，请求的代理使用 HTTP 协议。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="23"><li><code>-X</code>参数指定 HTTP 请求的方法。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://www.example.com
<span class="token comment"># 上面命令对https://www.example.com发出 POST 请求。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,48);function k(f,x){const n=t("ExternalLinkIcon");return i(),o("div",null,[d,p,u,s("ul",null,[s("li",null,[s("a",m,[a("阮一峰--curl 的用法指南"),e(n)])]),s("li",null,[s("a",v,[a("阮一峰--curl 网站开发指南"),e(n)])])]),b,s("blockquote",null,[s("p",null,[a("curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。它的功能非常强大，命令行参数多达几十种。如果熟练的话，完全可以取代 Postman 这一类的图形界面工具。一般这个工具存在于 Linux/Mac 系统上，window 上没有，需要自行安装。安装地址："),s("a",h,[a("curl 8.9.1 for Windows"),e(n)])])]),g])}const q=l(r,[["render",k],["__file","Linux.html.vue"]]),w=JSON.parse('{"path":"/computer/Linux.html","title":"Linux","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"如何利用 curl 进行接口调试？","slug":"如何利用-curl-进行接口调试","link":"#如何利用-curl-进行接口调试","children":[]}],"filePathRelative":"computer/Linux.md","git":{"createdTime":1715780535000,"updatedTime":1723822576000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":2}]},"readingTime":{"minutes":5.76,"words":1728}}');export{q as comp,w as data};
