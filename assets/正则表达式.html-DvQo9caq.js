import{_ as e,r as t,o as p,c as l,a as n,b as o,d as c,e as s}from"./app-Bn7XLESk.js";const i={},r=s(`<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h1><h2 id="正则表达式速查" tabindex="-1"><a class="header-anchor" href="#正则表达式速查"><span>正则表达式速查</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>匹配模式：
    i:忽略大小写
    g:执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
    m:执行多行匹配。


正则表达式模式
方括号：（好像里面不能写括号）
    [abc]:查找方括号之间的任何字符。
    [0-9]:查找任何从 0 至 9 的数字。
    (x|y):查找由 | 分隔的任何选项。
    [a-z]:查找任何小写的字母。[A-z]:字母
    [^ ]:除了。。。
    [^0-9]:除了数字
量词：(只对前面的一个内容起作用，内容可以用()括号圈起来为一个)
    n+	匹配任何包含至少一个 n 的字符串。
    n*	匹配任何包含零个或多个 n 的字符串。
    n?	匹配任何包含零个或一个 n 的字符串。（要么没有，要么就一个）
    n{X}	匹配包含 X 个 n 的序列的字符串。
    n{X,Y}	匹配包含 X 至 Y 个 n 的序列的字符串。
    n{X,}	匹配包含至少 X 个 n 的序列的字符串。
    n$	匹配任何结尾为 n 的字符串。
    ^n	匹配任何开头为 n 的字符串。
    ?=n	匹配任何其后紧接指定字符串 n 的字符串。有点像以什么结尾的一样
    ?!n	匹配任何其后没有紧接指定字符串 n 的字符串。


元字符：
    .	查找单个字符，除了换行和行结束符。
    \\w	查找单词字符。
    \\W	查找非单词字符。
    \\d	查找数字。
    \\D	查找非数字字符。
    \\s	查找空白字符。
    \\S	查找非空白字符。
    \\b	匹配单词边界。
    \\B	匹配非单词边界。
    \\0	查找 NUL 字符。
    \\n	查找换行符。
    \\f	查找换页符。
    \\r	查找回车符。
    \\t	查找制表符。
    \\v	查找垂直制表符。
    \\xxx	查找以八进制数 xxx 规定的字符。
    \\xdd	查找以十六进制数 dd 规定的字符。
    \\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
注意点：
    \\w 匹配包括下划线的任何单词字符，等同于[A-Za-z0-9_]
    \\W 匹配任何非单词字符，等同于[^A-Za-z0-9_]

    \\s 匹配空格、换行、tab缩进等所有的空白
    \\S 匹配非空白，跟\\s刚好相反。

    &quot;gssghs&quot;    \\w  true
    &quot;123433&quot;    \\w  true
    &quot;_&quot;         \\w  true
    &quot;     &quot;     \\s  true    



RegExp 对象方法：
    test():它通过模式来搜索字符串，然后根据结果返回 true 或 false。
    exec():	检索字符串中指定的值。返回找到的值，并确定其位置。
        -返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
        -  此数组的第 0 个元素是与正则表达式相匹配的文本，后续捕获组。


支持正则表达式的 String 对象的方法:
split()
    -可以将一个字符串拆分为一个数组
    -方法中可以传递一个正则表达式作为一个参数，这样方法会根据正则表达式去拆分字符串
search()
    -可以搜索字符串是否含有指定内容
    -如果搜索到指定内容，则会返回第一次出现的索引，如果没有返回-1
    -也可以接受一个正则表达式，根据去查找
    -search()只会查找第一个，即使设置全局匹配也是这样
match()
    -根据正则表达式，从一个字符串中将符合条件的内容提取出来
    -默认情况下，我们match只会找到第一个符合条件的内容，找到以后停止搜索，
        我们可以设置正则表达式全局匹配，这样就能匹配到所有符合要求的
        可以设置多个匹配模式，模式顺序任意
    -match()匹配到的内容会封装到一个数组中返回
replace()
    -可以将字符串指定的内容替换为新的内容
    -参数：1、被替换的内容，可以接受一个正则表达式作为一个参数。2、新的内容
    -默认只会替换一个


汉字：[\\u4e00-\\u9fa5]
</code></pre></div><p><strong>推荐文章</strong></p>`,4),u={href:"https://juejin.cn/post/6844903943684751368",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="正则应用" tabindex="-1"><a class="header-anchor" href="#正则应用"><span>正则应用</span></a></h2><p><strong>信息脱敏</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> phone<span class="token operator">=</span><span class="token string">&quot;13212345678&quot;</span>
<span class="token keyword">const</span> phoneReg<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\\d{3})(?:\\d{5})(\\d{3})$</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 这里用了捕获组和非捕获组</span>

<span class="token keyword">const</span> str<span class="token operator">=</span>phone<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>phoneReg<span class="token punctuation">,</span><span class="token string">&quot;$1*****$2&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token comment">// 132*****678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Markdown图片格式转H5 img标签</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 正则 + repalce方法</span>
<span class="token keyword">let</span> str<span class="token operator">=</span><span class="token string">&quot;![图片](./images/md.jpg)&quot;</span>
<span class="token keyword">let</span> imgReg<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^!\\[(.*)\\]\\((.*)\\)$</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// 除了字符串，还能函数！！！</span>
<span class="token keyword">const</span> result<span class="token operator">=</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>imgReg<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span>alt<span class="token punctuation">,</span>src</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&#39;![图片](./images/md.jpg)&#39; </span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;img src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; alt=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>alt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&lt;img src=&quot;./images/md.jpg&quot; alt=&quot;图片&quot;&gt; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正则引用——子表达式</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引用: 后面可以用\\1引用编号为1的子表达式，依次类推，比如:</span>
<span class="token keyword">var</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(A|B)(\\d{5})not([o-9])\\1\\2</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span><span class="token comment">//pattern在最后引用了第一个和第二个子表达式。</span>
<span class="token comment">// 注意:这里的引用是对与子表达式匹配的字符串的引用，而不是简单的对子表达式的引用。例如:</span>
<span class="token keyword">var</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([0-9])AA\\1</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// pattern不等价于正则表达式([0-9])AA[0-9]，</span>
<span class="token comment">// 而是指字符串AA后面的数字必须和前面的相同，即形如1AA1这样的字符串！</span>

<span class="token comment">//特殊正则匹配</span>
<span class="token keyword">let</span> str<span class="token operator">=</span><span class="token string">&quot;A12345not7A12345&quot;</span>
<span class="token keyword">var</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(A|B)(\\d{5})not([o-9])\\1\\2</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pattern<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//[&#39;A12345not7A12345&#39; , &#39;A&#39; , &#39;12345&#39; , &#39; 7 &#39; , index: 0,input: &#39;A12345not7A12345&#39; ,groups: undefined ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>贪婪匹配和非贪婪匹配</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> sanitizedwithoutScript <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;script[^&gt;]*&gt;.*?&lt;\\/script&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>非贪婪匹配(non-greedy matching)是正则表达式中的一个概念，与贪婪匹配相对。</p><ul><li>在贪婪匹配中，正则引擎会尽可能多地匹配字符，直到达到最长的可能匹配。</li><li>而非贪婪匹配则尽可能少地匹配字符，直到达到最短的可能匹配。</li></ul><p>例如，考虑正则表达式a+b。</p><blockquote><p>如果用于贪婪匹配，它会匹配尽可能多的a字符，直到遇到一个b字符。如果用于非贪婪匹配，它会匹配尽可能少的a字符，直到遇到一个b字符。</p></blockquote><ul><li>在大多数现代正则表达式引擎中，可以通过在量词后面添加一个问号来实现非贪婪匹配，例如a+?、*?、+?等。</li><li>在您提供的正则表达式中，.*?就是一个非贪婪的量词，它会尽可能少地匹配字符，直到遇到下一个&lt;或&lt;/script&gt;。</li></ul><blockquote><p>非贪婪匹配和贪婪匹配的主要区别在于它们在匹配字符串时的优先级和范围。<br><br> 在贪婪模式下，匹配器会尽可能多地匹配符合要求的字符，直到不能再匹配为止。<br> 例如，正则表达式a.<em>b在匹配字符串&quot;abbcab&quot;时，会匹配整个字符串&quot;abbcab&quot;，而不是期望的&quot;ab&quot;。<br><br> 而非贪婪模式则相反，匹配器会尽可能少地匹配符合要求的字符，直到满足要求为止。<br> 例如，正则表达式a.</em>?b在匹配相同字符串&quot;abbcab&quot;时，只会匹配到第一个&quot;ab&quot;，而不是整个字符串。简而言之，贪婪模式尝试匹配尽可能多的字符，而非贪婪模式则尝试匹配尽可能少的字符。</p></blockquote><p><strong>js相同的正则多次调用test()返回的值却不同的问题</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[345678][0-9]{9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">15328044636</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">15328044636</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题原因</p><blockquote><p>这是因为正则reg的g属性，设置的全局匹配。RegExp有一个lastIndex属性，来保存索引开始位置。上面的问题，第一次调用的lastIndex值为0，到了第二次调用，值变成了11。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[345678][0-9]{9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">,</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">15328044636</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">,</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">15328044636</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//打印的值</span>
<span class="token number">0</span> <span class="token boolean">true</span>
<span class="token number">11</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方案</p><ul><li>第一种方案是将g去掉，关闭全局匹配。</li><li>第二种就是在每次匹配之前将lastIndex的值设置为0。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[345678][0-9]{9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">,</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">15328044636</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reg<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">,</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">15328044636</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//打印的值</span>
<span class="token number">0</span> <span class="token boolean">true</span>
<span class="token number">0</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正则方法 exec()</strong><br></p><ul><li>如果匹配失败，exec() 方法返回 null，并将正则表达式的 lastIndex 重置为 0。</li><li>如果匹配成功，exec() 方法返回一个数组，并更新正则表达式对象的 lastIndex 属性。</li><li>完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应一个匹配的捕获组。</li><li>当正则表达式设置 g 标志位时，可以多次执行 exec 方法来查找同一个字符串中的成功匹配。当你这样做时，查找将从正则表达式的 lastIndex 属性指定的位置开始。 （test() 也会更新 lastIndex 属性）。注意，即使再次查找的字符串不是原查找字符串时，lastIndex 也不会被重置，它依旧会从记录的 lastIndex 开始</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 旧的知识有新的学法——正则exec()</span>
<span class="token keyword">const</span> myRe <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ab*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;abbcdefabh&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myArray<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>myArray <span class="token operator">=</span> myRe<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  msg <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Next match starts at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myRe<span class="token punctuation">.</span>lastIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Found abb. Next match starts at 3</span>
<span class="token comment">// Found ab. Next match starts at 9</span>

<span class="token comment">// ####  使用命名组!!!,注意这里比较重要</span>
<span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">姓氏：李，名字：雷
姓氏：韩，名字：梅梅</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">let</span> regexpNames <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">姓氏：(?&lt;first&gt;.+)，名字：(?&lt;last&gt;.+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> match <span class="token operator">=</span> regexpNames<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>match <span class="token operator">=</span> regexpNames<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Hellow 李 雷</span>
<span class="token comment">// Hellow 韩 梅梅</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八个常用的正则" tabindex="-1"><a class="header-anchor" href="#八个常用的正则"><span>八个常用的正则</span></a></h2><h5 id="手机号码" tabindex="-1"><a class="header-anchor" href="#手机号码"><span>手机号码</span></a></h5><ul><li>前两位一般是 13 / 14 / 15 / 17 / 18</li><li>号码总长为 11 位</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[34578]\\d{9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="qq-号码" tabindex="-1"><a class="header-anchor" href="#qq-号码"><span>QQ 号码</span></a></h5><ul><li>首先第一个数不为 0</li><li>5-10 位的 QQ 号码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9][0-9]{4,9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="十六进制颜色" tabindex="-1"><a class="header-anchor" href="#十六进制颜色"><span>十六进制颜色</span></a></h5><ul><li>第一个符号 # 可有可无</li><li>十六进制 0-9a-f</li><li>#49D1CC 和 #0AB</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="邮箱" tabindex="-1"><a class="header-anchor" href="#邮箱"><span>邮箱</span></a></h5><ul><li>允许输入的邮箱名称包含所有大小写字母、所有数字、以及_-.三个符号</li><li>luoyu2003@outlook.com</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([A-Za-z0-9_\\-\\.]+)@([A-Za-z0-9_\\-\\.]+)\\.([A-Za-z]{2,6})$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>URL</span></a></h5><ul><li>协议的几种类型，协议可有可无</li><li>域名 顶级域名 和 根域名（特殊情况 com.cn）</li><li>path 路径</li><li>最后可能以 / 结尾</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^((https?|ftp|file):\\/\\/)?([\\da-z\\.\\-]+)\\.([a-z\\.]{2,6})([\\/\\w\\.\\-]*)*\\/?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="html-标签" tabindex="-1"><a class="header-anchor" href="#html-标签"><span>HTML 标签</span></a></h5><p><strong>?:出现在括号的开头表示不需要捕获该组！！！</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^&lt;([a-z]+)([^&gt;]+)*(?:(.*)&lt;\\/\\1&gt;|\\s+\\/&gt;)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="ipv4-地址" tabindex="-1"><a class="header-anchor" href="#ipv4-地址"><span>IPV4 地址</span></a></h5><ul><li>地址是由 4 组 0-255 的数字组成</li><li>每一组 0-255 我们需要进行数字范围拆分（正则没有直接表示数字范围的代码）</li><li>我们可以分为 0-199 | 200-249 | 250-255 三种范围</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\\.){3}([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="日期-yyyy-mm-dd" tabindex="-1"><a class="header-anchor" href="#日期-yyyy-mm-dd"><span>日期 YYYY-mm-dd</span></a></h5><ul><li>注意格式</li><li>月份、日两位,不足前面补零</li><li>日有三种情况 0-9 | 10-29 | 30-31</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,51);function k(g,m){const a=t("ExternalLinkIcon");return p(),l("div",null,[r,n("p",null,[n("a",u,[o("位置匹配 理解正则中的(?=p)、(?!p)、(?<=p)、(?<!p)"),c(a)])]),d])}const x=e(i,[["render",k],["__file","正则表达式.html.vue"]]),b=JSON.parse('{"path":"/base/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html","title":"正则表达式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"正则表达式速查","slug":"正则表达式速查","link":"#正则表达式速查","children":[]},{"level":2,"title":"正则应用","slug":"正则应用","link":"#正则应用","children":[]},{"level":2,"title":"八个常用的正则","slug":"八个常用的正则","link":"#八个常用的正则","children":[]}],"filePathRelative":"base/正则表达式.md","git":{"createdTime":1716436918000,"updatedTime":1716981015000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":2}]},"readingTime":{"minutes":9.25,"words":2774}}');export{x as comp,b as data};
