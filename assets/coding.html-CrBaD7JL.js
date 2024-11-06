import{_ as t,r as l,o as d,c,a as e,b as n,d as a,e as i}from"./app-Bn7XLESk.js";const r={},o=i(`<h1 id="项目的编码规范" tabindex="-1"><a class="header-anchor" href="#项目的编码规范"><span>项目的编码规范</span></a></h1><h2 id="前端代码规范" tabindex="-1"><a class="header-anchor" href="#前端代码规范"><span>前端代码规范</span></a></h2><blockquote><p>规范的目的是为了编写高质量的代码，让你的团队成员每天得心情都是愉悦的，大家在一起是快乐的。<br> 引自《阿里规约》的开头片段: <br> ---现代软件架构的复杂性需要协同开发完成，如何高效地协同呢?无规矩不成方圆，无规范难以协同，比如，制订交通法规表面上是要限制行车权，实际上是保障公众的人身安全，试想如果没有限速，没有红绿灯，谁还敢上路行驶。对软件来说，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。代码的字里行间流淌的是软件系统的血液，质量的提升是尽可能少踩坑，杜绝踩重复的坑，切实提升系统稳定性，码出质量。</p></blockquote><h2 id="一-编程规约" tabindex="-1"><a class="header-anchor" href="#一-编程规约"><span>一．编程规约</span></a></h2><h3 id="一-命名规范" tabindex="-1"><a class="header-anchor" href="#一-命名规范"><span>(一) 命名规范</span></a></h3><h4 id="_1-1-1-项目命名" tabindex="-1"><a class="header-anchor" href="#_1-1-1-项目命名"><span>1.1.1 项目命名</span></a></h4><p>全部采用小写方式，以中线分隔。</p><blockquote><p>正：<code>mall-management-system</code> <br> 反：<code>mall_management-system / mallManagementSystem</code></p></blockquote><h4 id="_1-1-2-目录命名" tabindex="-1"><a class="header-anchor" href="#_1-1-2-目录命名"><span>1.1.2 目录命名</span></a></h4><p>全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。</p><blockquote><p>正例: <code>scripts/styles/components/images/utils/layouts/demo-styles/demo-scripts/img/doc</code> <br> 反例: <code>script/style/demo_scripts/demoStyles/imgs/docs</code> <br> 【特殊】VUE的项目中的components中的组件目录，使用kebab-case命名。<br> 正例: <code>head-search/page-loading/authorized/notice-icon</code> <br> 反例: <code>HeadSearch/PageLoading</code> <br> 【特殊】VUE的项目中的除components组件目录外的所有目录也使用kebab-case命名。 <br> 正例: <code>page-one/shopping-car/user-management</code><br> 反例: <code>ShoppingCar/UserManagement</code></p></blockquote><h4 id="_1-1-3-js、css、scss、html、png-文件命名" tabindex="-1"><a class="header-anchor" href="#_1-1-3-js、css、scss、html、png-文件命名"><span>1.1.3 JS、CSS、SCSS、HTML、PNG 文件命名</span></a></h4><p>全部采用小写方式， 以中划线分隔。</p><blockquote><p>正例: <code>render-dom.js /signup.css/index.html/company-logo.png</code> <br> 反例: <code>renderDom.js/UserManagement.html</code></p></blockquote><h4 id="_1-1-4-命名严谨性" tabindex="-1"><a class="header-anchor" href="#_1-1-4-命名严谨性"><span>1.1.4 命名严谨性</span></a></h4><p>代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用</p><blockquote><p>正例:<code>henan/luoyang/rmb等国际通用的名称，可视同英文</code> <br> 反例:<code>DazhePromotion[打折]/ getPingfenByName()[评分]/ int某变量= 3</code></p></blockquote><p>杜绝完全不规范的缩写，避免望文不知义：</p><blockquote><p>反例: <code>AbstractClass“缩写&quot;命名成 AbsClass ;</code> <br><code> condition“缩写&quot;命名成condi，此类随意缩写严重降低了代码的可阅读性。</code></p></blockquote><h3 id="二-html-规范-vue-template-同样适用" tabindex="-1"><a class="header-anchor" href="#二-html-规范-vue-template-同样适用"><span>(二) HTML 规范 （Vue Template 同样适用）</span></a></h3><h4 id="_1-2-1-html-类型" tabindex="-1"><a class="header-anchor" href="#_1-2-1-html-类型"><span>1.2.1 HTML 类型</span></a></h4><p>推荐使用 HTML5 的文档类型申明：(建议使用text/html格式的 HTML。避免使用XHTML。XHTML 以及它的属性，比如application/xhtml+xml在浏览器中的应用支持与优化空间都十分有限)。</p><ul><li>规定字符编码</li><li>IE兼容模式</li><li>规定字符编码</li><li>doctype大写</li></ul><p><strong>正例：</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span> 
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=Edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> 
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/company-logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Company<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-缩进" tabindex="-1"><a class="header-anchor" href="#_1-2-2-缩进"><span>1.2.2 缩进</span></a></h4><p>缩进使用 2 个空格（一个 tab）；</p><p>嵌套的节点应该缩进。</p><h4 id="_1-2-3-分块注释" tabindex="-1"><a class="header-anchor" href="#_1-2-3-分块注释"><span>1.2.3 分块注释</span></a></h4><p>在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。</p><h4 id="_1-2-4-语义化标签" tabindex="-1"><a class="header-anchor" href="#_1-2-4-语义化标签"><span>1.2.4 语义化标签</span></a></h4><p>HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标 签。</p><p><strong>正例</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-5-引号" tabindex="-1"><a class="header-anchor" href="#_1-2-5-引号"><span>1.2.5 引号</span></a></h4><p>使用双引号(&quot; &quot;) 而不是单引号(&#39; &#39;) 。</p><blockquote><p>正例:<code>&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;</code> <br> 反例:<code>&lt;div class=&#39;box&#39;&gt;&lt;/div&gt;</code></p></blockquote><h3 id="三-css-规范" tabindex="-1"><a class="header-anchor" href="#三-css-规范"><span>(三) CSS 规范</span></a></h3><h4 id="_1-3-1-命名" tabindex="-1"><a class="header-anchor" href="#_1-3-1-命名"><span>1.3.1 命名</span></a></h4><ul><li>类名使用小写字母，以中划线分隔</li><li>id采用驼峰式命名</li><li>scss中的变量、函数、混合、placeholder采用驼峰式命名</li></ul><blockquote><p>ID和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称。</p></blockquote><p><strong>不推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.fw-800</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 800<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.red</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> 
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐:</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.heavy</span> <span class="token punctuation">{</span>
   <span class="token property">font-weight</span><span class="token punctuation">:</span> 800<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token selector">.important</span> <span class="token punctuation">{</span> 
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-2-选择器" tabindex="-1"><a class="header-anchor" href="#_1-3-2-选择器"><span>1.3.2 选择器</span></a></h4><h5 id="_1-css-选择器中避免使用标签名" tabindex="-1"><a class="header-anchor" href="#_1-css-选择器中避免使用标签名"><span>1) css 选择器中避免使用标签名</span></a></h5><blockquote><p>从结构、表现、行为分离的原则来看，应该尽量避免css中出现HTML标签，并且在css选择器中出现标签名会存在潜在的问题。</p></blockquote><h5 id="_2-使用直接子选择器" tabindex="-1"><a class="header-anchor" href="#_2-使用直接子选择器"><span>2) 使用直接子选择器</span></a></h5><blockquote><p>很多前端开发人员写选择器链的时候不使用直接子选择器（注:直接子选择器和后代选择器的区别)。有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下，这是一个非常不好的做法。如果你不写很通用的，需要匹配到DOM末端的选择器，你应该总是考虑直接子选择器。</p></blockquote><p><strong>不推荐:</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.content .title</span> <span class="token punctuation">{</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐:</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.content &gt; .title</span> <span class="token punctuation">{</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-3-尽量使用缩写属性" tabindex="-1"><a class="header-anchor" href="#_1-3-3-尽量使用缩写属性"><span>1.3.3 尽量使用缩写属性</span></a></h4><p><strong>不推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">border-top-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> 
<span class="token property">font-family</span><span class="token punctuation">:</span> palatino<span class="token punctuation">,</span> georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span> 
<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span> 
<span class="token property">padding-bottom</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span> 
<span class="token property">padding-left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
 <span class="token property">padding-right</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> 
 <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">border-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> 
<span class="token property">font</span><span class="token punctuation">:</span> 100%/1.6 palatino<span class="token punctuation">,</span> georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span> 
<span class="token property">padding</span><span class="token punctuation">:</span> 0 1em 2em<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-4-每个选择器及属性独占一行" tabindex="-1"><a class="header-anchor" href="#_1-3-4-每个选择器及属性独占一行"><span>1.3.4 每个选择器及属性独占一行</span></a></h4><p><strong>不推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span> 
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> 
	<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #00a0e9<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #00a0e9<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-5-省略-0-后面的单位" tabindex="-1"><a class="header-anchor" href="#_1-3-5-省略-0-后面的单位"><span>1.3.5 省略 0 后面的单位</span></a></h4><p><strong>不推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code> <span class="token selector">div</span> <span class="token punctuation">{</span>
	 <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span> 
	 <span class="token property">margin</span><span class="token punctuation">:</span> 0em<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> 
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-6-避免使用-id-选择器及全局标签选择器防止污染全局样式" tabindex="-1"><a class="header-anchor" href="#_1-3-6-避免使用-id-选择器及全局标签选择器防止污染全局样式"><span>1.3.6 避免使用 ID 选择器及全局标签选择器防止污染全局样式</span></a></h4><p><strong>不推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
 <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span> 
 <span class="token property">margin</span><span class="token punctuation">:</span> 0em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.header</span> <span class="token punctuation">{</span> 
	<span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span> 
	<span class="token property">margin</span><span class="token punctuation">:</span> 0em<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四-less-规范" tabindex="-1"><a class="header-anchor" href="#四-less-规范"><span>(四) LESS 规范</span></a></h3><h4 id="_1-4-1-代码组织" tabindex="-1"><a class="header-anchor" href="#_1-4-1-代码组织"><span>1.4.1 代码组织</span></a></h4><h5 id="_1-将公共-less-文件放置在-style-less-common-文件夹" tabindex="-1"><a class="header-anchor" href="#_1-将公共-less-文件放置在-style-less-common-文件夹"><span>1) 将公共 less 文件放置在 style/less/common 文件夹</span></a></h5><p>例: // color.less,common.less</p><h5 id="_2-按以下顺序组织" tabindex="-1"><a class="header-anchor" href="#_2-按以下顺序组织"><span>2) 按以下顺序组织</span></a></h5><p>1、@import; <br> 2、变量声明; <br> 3、样式声明; <br></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;mixins/size.less&quot;</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@default-text-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span> 
<span class="token selector">.page</span> <span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span> 
 <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-2-避免嵌套层级过多" tabindex="-1"><a class="header-anchor" href="#_1-4-2-避免嵌套层级过多"><span>1.4.2 避免嵌套层级过多</span></a></h4><blockquote><p>将嵌套深度限制在3级。对于超过4级的嵌套，给予重新评估。这可以避免出现过于详实的CSS 选择器。避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于20行的嵌套规则出现。</p></blockquote><p><strong>不推荐：</strong></p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code> <span class="token selector">.main</span> <span class="token punctuation">{</span>
   <span class="token selector">.title</span> <span class="token punctuation">{</span> 
      <span class="token selector">.name</span> <span class="token punctuation">{</span> 
           <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>  
         <span class="token punctuation">}</span> 
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐：</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.main-title</span> <span class="token punctuation">{</span>
   <span class="token selector">.name</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五-javascript-规范" tabindex="-1"><a class="header-anchor" href="#五-javascript-规范"><span>(五) Javascript 规范</span></a></h3><h4 id="_1-5-1-命名" tabindex="-1"><a class="header-anchor" href="#_1-5-1-命名"><span>1.5.1 命名</span></a></h4><h5 id="_1-采用小写驼峰命名-lowercamelcase-代码中的命名均不能以下划线-也不能以下划线或美元符号结束" tabindex="-1"><a class="header-anchor" href="#_1-采用小写驼峰命名-lowercamelcase-代码中的命名均不能以下划线-也不能以下划线或美元符号结束"><span>1) 采用小写驼峰命名 lowerCamelCase，代码中的命名均不能以下划线， 也不能以下划线或美元符号结束</span></a></h5><p><strong>反例：</strong> _name / name_ / name$</p><h5 id="_2-方法名、参数名、成员变量、局部变量都统一使用-lowercamelcase-风-格-必须遵从驼峰形式" tabindex="-1"><a class="header-anchor" href="#_2-方法名、参数名、成员变量、局部变量都统一使用-lowercamelcase-风-格-必须遵从驼峰形式"><span>2) 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风 格，必须遵从驼峰形式</span></a></h5><p><strong>正例：</strong> localValue / getHttpMessage() / inputUserId <br><strong>其中 method 方法命名必须是 动词 或者 动词+名词 形式</strong> <br><strong>正例：</strong> saveShopCarData /openShopCarInfoDialog <br><strong>反例：</strong> save / open / show / go <br><strong>特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他（目的是为了统一各个端）</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>add / update / delete / detail / get 
附： 函数方法常用的动词: 
get 获取/set 设置, 
add 增加/remove 删除, 
create 创建/destory 销毁, 
start 启动/stop 停止, 
open 打开/close 关闭, 
read 读取/write 写入, 
load 载入/save 保存,
begin 开始/end 结束, 
backup 备份/restore 恢复,
import 导入/export 导出, 
split 分割/merge 合并,
inject 注入/extract 提取,
attach 附着/detach 脱离, 
bind 绑定/separate 分离, 
view 查看/browse 浏览, 
edit 编辑/modify 修改,
select 选取/mark 标记, 
copy 复制/paste 粘贴,
undo 撤销/redo 重做, 
insert 插入/delete 移除,
add 加入/append 添加, 
clean 清理/clear 清除,
index 索引/sort 排序,
find 查找/search 搜索, 
increase 增加/decrease 减少, 
play 播放/pause 暂停, 
launch 启动/run 运行, 
compile 编译/execute 执行, 
debug 调试/trace 跟踪, 
observe 观察/listen 监听,
build 构建/publish 发布,
input 输入/output 输出,
encode 编码/decode 解码, 
encrypt 加密/decrypt 解密, 
compress 压缩/decompress 解压缩, 
pack 打包/unpack 解包,
parse 解析/emit 生成,
connect 连接/disconnect 断开,
send 发送/receive 接收, 
download 下载/upload 上传, 
refresh 刷新/synchronize 同步,
update 更新/revert 复原, 
lock 锁定/unlock 解锁, 
check out 签出/check in 签入, 
submit 提交/commit 交付, 
push 推/pull 拉,
expand 展开/collapse 折叠, 
enter 进入/exit 退出,
abort 放弃/quit 离开, 
obsolete 废弃/depreciate 废旧, 
collect 收集/aggregate 聚集
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-常量命名全部大写-单词间用下划线隔开-力求语义表达完整清楚-不要嫌名字长" tabindex="-1"><a class="header-anchor" href="#_3-常量命名全部大写-单词间用下划线隔开-力求语义表达完整清楚-不要嫌名字长"><span>3) 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长</span></a></h5><p><strong>正例：</strong> MAX_STOCK_COUNT <strong>反例：</strong> MAX_COUNT</p><h4 id="_1-5-2-代码格式" tabindex="-1"><a class="header-anchor" href="#_1-5-2-代码格式"><span>1.5.2 代码格式</span></a></h4><h5 id="_1-使用-2-个空格进行缩进" tabindex="-1"><a class="header-anchor" href="#_1-使用-2-个空格进行缩进"><span>1) 使用 2 个空格进行缩进</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (x &lt; y) {
 x += 10;
  } else {
   x += 1; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以-提升可读性" tabindex="-1"><a class="header-anchor" href="#_2-不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以-提升可读性"><span>2) 不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以 提升可读性</span></a></h5><p>说明：任何情形，没有必要插入多个空行进行隔开。</p><h4 id="_1-5-3-字符串" tabindex="-1"><a class="header-anchor" href="#_1-5-3-字符串"><span>1.5.3 字符串</span></a></h4><p>统一使用单引号(‘)，不使用双引号(“)。这在创建 HTML 字符串非常有好处： <strong>正例:</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   let str = &#39;foo&#39;;
   let testDiv = &#39;&lt;div id=&quot;test&quot;&gt;&lt;/div&gt;&#39;; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>let str = &#39;foo&#39;; 
let testDiv = &quot;&lt;div id=&#39;test&#39;&gt;&lt;/div&gt;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-4-对象声明" tabindex="-1"><a class="header-anchor" href="#_1-5-4-对象声明"><span>1.5.4 对象声明</span></a></h4><h5 id="_1-使用字面值创建对象" tabindex="-1"><a class="header-anchor" href="#_1-使用字面值创建对象"><span>1) 使用字面值创建对象</span></a></h5><p><strong>正例：</strong> <code>let user = {};</code><strong>反例：</strong> <code>let user = new Object();</code></p><h5 id="_2-使用字面量来代替对象构造器" tabindex="-1"><a class="header-anchor" href="#_2-使用字面量来代替对象构造器"><span>2) 使用字面量来代替对象构造器</span></a></h5><p><strong>正例：</strong> <code>var user = { age: 0, name: 1, city: 3 };</code><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var user = new Object(); 
user.age = 0; 
user.name = 0; 
user.city = 0; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-5-使用-es6" tabindex="-1"><a class="header-anchor" href="#_1-5-5-使用-es6"><span>1.5.5 使用 ES6+</span></a></h4><blockquote><p>必须优先使用ES6+中新增的语法糖和函数。这将简化你的程序，并让你的代码更加灵活和可复用。比如箭头函数、await/async，解构,let , for ...of 等等。</p></blockquote><h4 id="_1-5-6-括号" tabindex="-1"><a class="header-anchor" href="#_1-5-6-括号"><span>1.5.6 括号</span></a></h4><blockquote><p>下列关键字后必须有大括号（即使代码块的内容只有一行) : if, else, for,while, do, switch,try,catch, finally, with。</p></blockquote><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (condition) { 
doSomething();
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (condition) doSomething();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-5-7-undefined-判断" tabindex="-1"><a class="header-anchor" href="#_1-5-7-undefined-判断"><span>1.5.7 undefined 判断</span></a></h4><p>永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。</p><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> if (typeof person === &#39;undefined&#39;) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (person === undefined) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-5-8-条件判断和循环最多三层" tabindex="-1"><a class="header-anchor" href="#_1-5-8-条件判断和循环最多三层"><span>1.5.8 条件判断和循环最多三层</span></a></h4><blockquote><p>条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过3层请抽成函数，并写清楚注释。</p></blockquote><h4 id="_1-5-9-this-的转换命名" tabindex="-1"><a class="header-anchor" href="#_1-5-9-this-的转换命名"><span>1.5.9 this 的转换命名</span></a></h4><blockquote><p>对上下文this的引用只能使用&#39;self来命名。</p></blockquote><h4 id="_1-5-10-慎用-console-log" tabindex="-1"><a class="header-anchor" href="#_1-5-10-慎用-console-log"><span>1.5.10 慎用 console.log</span></a></h4><blockquote><p>因console.log大量使用会有性能问题，所以在非webpack项目中谨慎使用log 功能。</p></blockquote><h2 id="二、vue-项目规范" tabindex="-1"><a class="header-anchor" href="#二、vue-项目规范"><span>二、Vue 项目规范</span></a></h2><h3 id="一-vue-编码基础" tabindex="-1"><a class="header-anchor" href="#一-vue-编码基础"><span>(一) Vue 编码基础</span></a></h3>`,137),p={href:"https://cn.vuejs.org/v2/style-guide/%5D",target:"_blank",rel:"noopener noreferrer"},u=e("em",null,"请仔仔细细阅读 Vue 官方规范，切记，此为第一步。",-1),v=i(`<h4 id="_2-1-1-组件规范" tabindex="-1"><a class="header-anchor" href="#_2-1-1-组件规范"><span>2.1.1. 组件规范</span></a></h4><h5 id="_1-组件名为多个单词。" tabindex="-1"><a class="header-anchor" href="#_1-组件名为多个单词。"><span>1) 组件名为多个单词。</span></a></h5><p>组件名应该始终是多个单词组成（大于等于 2），且命名规范为KebabCase格式。 这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。</p><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export default {
  name: &#39;TodoItem&#39;
  // ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
export default {
  name: &#39;Todo&#39;,
  // ...
}
export default {
  name: &#39;todo-item&#39;,
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-组件文件名为-pascal-case-格式" tabindex="-1"><a class="header-anchor" href="#_2-组件文件名为-pascal-case-格式"><span>2) 组件文件名为 pascal-case 格式</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
|- my-component.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
|- myComponent.vue
|- MyComponent.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-基础组件文件名为-base-开头-使用完整单词而不是缩写。" tabindex="-1"><a class="header-anchor" href="#_3-基础组件文件名为-base-开头-使用完整单词而不是缩写。"><span>3) 基础组件文件名为 base 开头，使用完整单词而不是缩写。</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-和父组件紧密耦合的子组件应该以父组件名作为前缀命名" tabindex="-1"><a class="header-anchor" href="#_4-和父组件紧密耦合的子组件应该以父组件名作为前缀命名"><span>4) 和父组件紧密耦合的子组件应该以父组件名作为前缀命名</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- UProfOpts.vue （使用了缩写）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-在-template-模版中使用组件-应使用-pascalcase-模式-并且使用自闭合组件。" tabindex="-1"><a class="header-anchor" href="#_5-在-template-模版中使用组件-应使用-pascalcase-模式-并且使用自闭合组件。"><span>5) 在 Template 模版中使用组件，应使用 PascalCase 模式，并且使用自闭合组件。</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 在单文件组件、字符串模板和 JSX 中 --&gt;
&lt;MyComponent /&gt;
&lt;Row&gt;&lt;table :column=&quot;data&quot;/&gt;&lt;/Row&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;my-component /&gt; &lt;row&gt;&lt;table :column=&quot;data&quot;/&gt;&lt;/row&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6-组件的-data-必须是一个函数" tabindex="-1"><a class="header-anchor" href="#_6-组件的-data-必须是一个函数"><span>6) 组件的 data 必须是一个函数</span></a></h5><blockquote><p>当在组件中使用data属性的时候(除了new Vue外的任何地方)，它的值必须是返回一个对象的函数。因为如果直接是一个对象的话，子组件之间的属性值会互相影响。</p></blockquote><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export default {
  data () {
    return {
      name: &#39;jack&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export default {
  data: {
    name: &#39;jack&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-prop-定义应该尽量详细" tabindex="-1"><a class="header-anchor" href="#_7-prop-定义应该尽量详细"><span>7) Prop 定义应该尽量详细</span></a></h5><ul><li>必须使用 camelCase 驼峰命名</li><li>必须指定类型</li><li>必须加上注释，表明其含义</li><li>必须加上 required 或者 default，两者二选其一</li><li>如果有业务需要，必须加上 validator 验证 <strong>正例：</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> props: {
  // 组件状态，用于控制组件的颜色
   status: {
     type: String,
     required: true,
     validator: function (value) {
       return [
         &#39;succ&#39;,
         &#39;info&#39;,
         &#39;error&#39;
       ].indexOf(value) !== -1
     }
   },
    // 用户级别，用于显示皇冠个数
   userLevel：{
      type: String,
      required: true
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-为组件样式设置作用域" tabindex="-1"><a class="header-anchor" href="#_8-为组件样式设置作用域"><span>8) 为组件样式设置作用域</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;button class=&quot;btn btn-close&quot;&gt;X&lt;/button&gt;
&lt;/template&gt;
&lt;!-- 使用 \`scoped\` 特性 --&gt;
&lt;style scoped&gt;
  .btn-close {
    background-color: red;
  }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;button class=&quot;btn btn-close&quot;&gt;X&lt;/button&gt;
&lt;/template&gt;
&lt;!-- 没有使用 \`scoped\` 特性 --&gt;
&lt;style&gt;
  .btn-close {
    background-color: red;
  }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_9-如果特性元素较多-应该主动换行。" tabindex="-1"><a class="header-anchor" href="#_9-如果特性元素较多-应该主动换行。"><span>9) 如果特性元素较多，应该主动换行。</span></a></h5><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;MyComponent foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot;
    foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot;
    foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot;
 /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;MyComponent foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot; foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-2-模板中使用简单的表达式" tabindex="-1"><a class="header-anchor" href="#_2-1-2-模板中使用简单的表达式"><span>2.1.2. 模板中使用简单的表达式</span></a></h4><p>组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。</p><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;p&gt;{{ normalizedFullName }}&lt;/p&gt;
&lt;/template&gt;
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(&#39; &#39;).map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(&#39; &#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;p&gt;
       {{
          fullName.split(&#39; &#39;).map(function (word) {
             return word[0].toUpperCase() + word.slice(1)
           }).join(&#39; &#39;)
        }}
  &lt;/p&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-指令都使用缩写形式" tabindex="-1"><a class="header-anchor" href="#_2-1-3-指令都使用缩写形式"><span>2.1.3 指令都使用缩写形式</span></a></h4><p>指令推荐都使用缩写形式，(用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)</p><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;input
  @input=&quot;onInput&quot;
  @focus=&quot;onFocus&quot;
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;input
  v-on:input=&quot;onInput&quot;
  @focus=&quot;onFocus&quot;
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-标签顺序保持一致" tabindex="-1"><a class="header-anchor" href="#_2-1-4-标签顺序保持一致"><span>2.1.4 标签顺序保持一致</span></a></h4><p>单文件组件应该总是让标签顺序保持为</p><p><strong>正例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;...&lt;/template&gt;
&lt;script&gt;...&lt;/script&gt;
&lt;style&gt;...&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;...&lt;/template&gt;
&lt;style&gt;...&lt;/style&gt;
&lt;script&gt;...&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-必须为-v-for-设置键值-key" tabindex="-1"><a class="header-anchor" href="#_2-1-5-必须为-v-for-设置键值-key"><span>2.1.5 必须为 v-for 设置键值 key</span></a></h4><h4 id="_2-1-6-v-show-与-v-if-选择" tabindex="-1"><a class="header-anchor" href="#_2-1-6-v-show-与-v-if-选择"><span>2.1.6 v-show 与 v-if 选择</span></a></h4><p>如果运行时，需要非常频繁地切换，使用 v-show ；如果在运行时，条件很少改变，使用 v-if。</p><h4 id="_2-1-7-script-标签内部结构顺序" tabindex="-1"><a class="header-anchor" href="#_2-1-7-script-标签内部结构顺序"><span>2.1.7 script 标签内部结构顺序</span></a></h4><p>components &gt; props &gt; data &gt; computed &gt; watch &gt; filter &gt; 钩子函数（钩子函数按其执行顺序） &gt; methods</p><h4 id="_2-1-8-vue-router-规范" tabindex="-1"><a class="header-anchor" href="#_2-1-8-vue-router-规范"><span>2.1.8 Vue Router 规范</span></a></h4><h5 id="_1-页面跳转数据传递使用路由参数" tabindex="-1"><a class="header-anchor" href="#_1-页面跳转数据传递使用路由参数"><span>1) 页面跳转数据传递使用路由参数</span></a></h5><p>页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，而不是将需要传递的数据保存 vuex，然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。 正例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>let id = &#39; 123&#39;;
this.$router.push({ name: &#39;userCenter&#39;, query: { id: id } });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-使用路由懒加载-延迟加载-机制" tabindex="-1"><a class="header-anchor" href="#_2-使用路由懒加载-延迟加载-机制"><span>2) 使用路由懒加载（延迟加载）机制</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    path: &#39;/uploadAttachment&#39;,
    name: &#39;uploadAttachment&#39;,
    meta: {
      title: &#39;上传附件&#39;
    },
    component: () =&gt; import(&#39;@/view/components/uploadAttachment/index.vue&#39;)
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3) router 中的命名规范</strong> path、childrenPoints 命名规范采用kebab-case命名规范（尽量vue文件的目录结构保持一致，因为目录、文件名都是kebab-case，这样很方便找到对应的文件） name 命名规范采用KebabCase命名规范且和component组件名保持一致！（因为要保持keep-alive特性，keep-alive按照component的name进行缓存，所以两者必须高度保持一致）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 动态加载
export const reload = [
  {
    path: &#39;/reload&#39;,
    name: &#39;reload&#39;,
    component: Main,
    meta: {
      title: &#39;动态加载&#39;,
      icon: &#39;icon iconfont&#39;
    },
    children: [
      {
        path: &#39;/reload/smart-reload-list&#39;,
        name: &#39;SmartReloadList&#39;,
        meta: {
          title: &#39;SmartReload&#39;,
          childrenPoints: [
            {
              title: &#39;查询&#39;,
              name: &#39;smart-reload-search&#39;
            },
            {
              title: &#39;执行reload&#39;,
              name: &#39;smart-reload-update&#39;
            },
            {
              title: &#39;查看执行结果&#39;,
              name: &#39;smart-reload-result&#39;
            }
          ]
        },
        component: () =&gt;
          import(&#39;@/views/reload/smart-reload/smart-reload-list.vue&#39;)
      }
    ]
  }
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-router-中的-path-命名规范" tabindex="-1"><a class="header-anchor" href="#_4-router-中的-path-命名规范"><span>4) router 中的 path 命名规范</span></a></h5><p>path除了采用kebab-case命名规范以外，必须以 / 开头，即使是children里的path也要以 / 开头。如下示例 <strong>目的：</strong> 经常有这样的场景：某个页面有问题，要立刻找到这个vue文件，如果不用以/开头，path为parent和children组成的，可能经常需要在router文件里搜索多次才能找到，而如果以/开头，则能立刻搜索到对应的组件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    path: &#39;/file&#39;,
    name: &#39;File&#39;,
    component: Main,
    meta: {
      title: &#39;文件服务&#39;,
      icon: &#39;ios-cloud-upload&#39;
    },
    children: [
      {
        path: &#39;/file/file-list&#39;,
        name: &#39;FileList&#39;,
        component: () =&gt; import(&#39;@/views/file/file-list.vue&#39;)
      },
      {
        path: &#39;/file/file-add&#39;,
        name: &#39;FileAdd&#39;,
        component: () =&gt; import(&#39;@/views/file/file-add.vue&#39;)
      },
      {
        path: &#39;/file/file-update&#39;,
        name: &#39;FileUpdate&#39;,
        component: () =&gt; import(&#39;@/views/file/file-update.vue&#39;)
      }
    ]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-vue-项目目录规范" tabindex="-1"><a class="header-anchor" href="#二-vue-项目目录规范"><span>(二) Vue 项目目录规范</span></a></h3><h4 id="_2-2-1-基础" tabindex="-1"><a class="header-anchor" href="#_2-2-1-基础"><span>2.2.1 基础</span></a></h4><p>vue 项目中的所有命名一定要与后端命名统一。 比如权限：后端 privilege, 前端无论 router , store, api 等都必须使用 privielege 单词！ <strong>2.2.2 使用 Vue-cli 脚手架</strong> 使用 vue-cli3 来初始化项目，项目名按照上面的命名规范。 <strong>2.2.3 目录说明</strong> 目录名按照上面的命名规范，其中 components 组件用大写驼峰，其余除 components 组件目录外的所有目录均使用 kebab-case 命名。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>src                                  源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- directives                       自定义指令
|-- filters                          过滤器，全局工具
|-- datas                            模拟数据，临时存放
|-- lib                              外部引用的插件存放及修改文件
|-- mock                             模拟接口，临时存放
|-- plugins                          插件，全局使用
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- themes                           自定义样式主题
|-- views                            视图目录
|   |-- role                                 role模块名
|   |-- |-- role-list.vue                    role列表页面
|   |-- |-- role-add.vue                     role新建页面
|   |-- |-- role-update.vue                  role更新页面
|   |-- |-- index.less                       role模块样式
|   |-- |-- components                       role模块通用组件文件夹
|   |-- employee                             employee模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>api 目录 文件、变量命名要与后端保持一致。 此目录对应后端 API 接口，按照后端一个 controller 一个 api js 文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。 api 中的方法名字要与后端 api url 尽量保持语义高度一致性。 对于 api 中的每个方法要添加注释，注释与后端 swagger 文档保持一致。 <strong>正例：</strong> 后端 url： EmployeeController.java</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/employee/add
/employee/delete/{id}
/employee/update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端： employee.js</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  // 添加员工
  addEmployee: (data) =&gt; {
    return postAxios(&#39;/employee/add&#39;, data)
  },
  // 更新员工信息
  updateEmployee: (data) =&gt; {
    return postAxios(&#39;/employee/update&#39;, data)
  },
    // 删除员工
  deleteEmployee: (employeeId) =&gt; {
    return postAxios(&#39;/employee/delete/&#39; + employeeId)
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-assets-目录" tabindex="-1"><a class="header-anchor" href="#_2-assets-目录"><span>2) assets 目录</span></a></h5><p>assets 为静态资源，里面存放 images, styles, icons 等静态资源，静态资源命名格式为 kebab-case</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>|assets
|-- icons
|-- images
|   |-- background-color.png
|   |-- upload-header.png
|-- styles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-components-目录" tabindex="-1"><a class="header-anchor" href="#_3-components-目录"><span>3) components 目录</span></a></h4><p>此目录应按照组件进行目录划分，目录命名为 KebabCase，组件命名规则也为 KebabCase</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>|components
|-- error-log
|   |-- index.vue
|   |-- index.less
|-- markdown-editor
|   |-- index.vue
|   |-- index.js
|-- kebab-case
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-constants-目录" tabindex="-1"><a class="header-anchor" href="#_4-constants-目录"><span>4) constants 目录</span></a></h5>`,95),m={href:"https://www.npmjs.com/package/vue-enum",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>|constants
|-- index.js
|-- role.js
|-- employee.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子： employee.js</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export const EMPLOYEE_STATUS = {
  NORMAL: {
    value: 1,
    desc: &#39;正常&#39;
  },
  DISABLED: {
    value: 1,
    desc: &#39;禁用&#39;
  },
  DELETED: {
    value: 2,
    desc: &#39;已删除&#39;
  }
};
export const EMPLOYEE_ACCOUNT_TYPE = {
  QQ: {
    value: 1,
    desc: &#39;QQ登录&#39;
  },
  WECHAT: {
    value: 2,
    desc: &#39;微信登录&#39;
  },
  DINGDING: {
    value: 3,
    desc: &#39;钉钉登录&#39;
  },
  USERNAME: {
    value: 4,
    desc: &#39;用户名密码登录&#39;
  }
};
export default {
  EMPLOYEE_STATUS,
  EMPLOYEE_ACCOUNT_TYPE
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-router-与-store-目录" tabindex="-1"><a class="header-anchor" href="#_5-router-与-store-目录"><span>5) router 与 store 目录</span></a></h4><p>这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。 router 尽量按照 views 中的结构保持一致 store 按照业务进行拆分不同的 js 文件</p><h5 id="_6-views-目录" tabindex="-1"><a class="header-anchor" href="#_6-views-目录"><span>6) views 目录</span></a></h5><p>命名要与后端、router、api 等保持一致 components 中组件要使用 PascalCase 规则</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>|-- views                                    视图目录
|   |-- role                                 role模块名
|   |   |-- role-list.vue                    role列表页面
|   |   |-- role-add.vue                     role新建页面
|   |   |-- role-update.vue                  role更新页面
|   |   |-- index.less                      role模块样式
|   |   |-- components                      role模块通用组件文件夹
|   |   |   |-- role-header.vue             role头部组件
|   |   |   |-- role-modal.vue              role弹出框组件
|   |-- employee                            employee模块
|   |-- behavior-log                        行为日志log模块
|   |-- code-generator                      代码生成器模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2.4 注释说明 整理必须加注释的地方</p><p>公共组件使用说明 api 目录的接口 js 文件必须加注释 store 中的 state, mutation, action 等必须加注释 vue 文件中的 template 必须加注释，若文件较大添加 start end 注释 vue 文件的 methods，每个 method 必须添加注释 vue 文件的 data, 非常见单词要加注释</p><h4 id="_2-2-5-其他" tabindex="-1"><a class="header-anchor" href="#_2-2-5-其他"><span>2.2.5 其他</span></a></h4><h5 id="_1-尽量不要手动操作-dom" tabindex="-1"><a class="header-anchor" href="#_1-尽量不要手动操作-dom"><span>1) 尽量不要手动操作 DOM</span></a></h5><p>因使用 vue 框架，所以在项目开发中尽量使用 vue 的数据驱动更新 DOM，尽量（不到万不得已）不要手动操作 DOM，包括：增删改 dom 元素、以及更改样式、添加事件等。</p><h5 id="_2-删除无用代码" tabindex="-1"><a class="header-anchor" href="#_2-删除无用代码"><span>2) 删除无用代码</span></a></h5><p>因使用了 git/svn 等代码版本工具，对于无用代码必须及时删除，例如：一些调试的 console 语句、无用的弃用功能代码。</p><h3 id="前后端分离必备的接口规范" tabindex="-1"><a class="header-anchor" href="#前后端分离必备的接口规范"><span>前后端分离必备的接口规范</span></a></h3><blockquote><p>没有任何接口约定规范情况下各自干各自的，导致我们在产品项目开发过程中，前后端的接口联调对接工作量占比在30%-50%左右，甚至会更高，往往前后端接口联调对接及系统间的联调对接都是整个产品项目研发的软肋。 本文的主要初衷就是规范约定先行，尽量避免沟通联调产生的不必要的问题，让大家身心愉快地专注于各自擅长的领域。</p></blockquote>`,17),g={href:"https://zhuanlan.zhihu.com/p/334809573",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/508570164",target:"_blank",rel:"noopener noreferrer"};function x(k,f){const s=l("ExternalLinkIcon");return d(),c("div",null,[o,e("p",null,[n("vue 项目规范以 Vue 官方规范 （"),e("a",p,[n("https://cn.vuejs.org/v2/style-guide/"),a(s)]),n("） 中的 A 规范为基础，在其上面进行项目开发，故所有代码均遵守该规范。 "),u]),v,e("p",null,[n("此目录存放项目所有常量，如果常量在 vue 中使用，请使用 vue-enum 插件("),e("a",m,[n("https://www.npmjs.com/package/vue-enum"),a(s)]),n(") 目录结构：")]),b,e("p",null,[e("a",g,[n("一文搞懂什么是RESTful API"),a(s)]),e("a",h,[n("前后端接口规范 - RESTful 版"),a(s)])])])}const q=t(r,[["render",x],["__file","coding.html.vue"]]),y=JSON.parse('{"path":"/interview/coding.html","title":"项目的编码规范","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前端代码规范","slug":"前端代码规范","link":"#前端代码规范","children":[]},{"level":2,"title":"一．编程规约","slug":"一-编程规约","link":"#一-编程规约","children":[{"level":3,"title":"(一) 命名规范","slug":"一-命名规范","link":"#一-命名规范","children":[]},{"level":3,"title":"(二) HTML 规范 （Vue Template 同样适用）","slug":"二-html-规范-vue-template-同样适用","link":"#二-html-规范-vue-template-同样适用","children":[]},{"level":3,"title":"(三) CSS 规范","slug":"三-css-规范","link":"#三-css-规范","children":[]},{"level":3,"title":"(四) LESS 规范","slug":"四-less-规范","link":"#四-less-规范","children":[]},{"level":3,"title":"(五) Javascript 规范","slug":"五-javascript-规范","link":"#五-javascript-规范","children":[]}]},{"level":2,"title":"二、Vue 项目规范","slug":"二、vue-项目规范","link":"#二、vue-项目规范","children":[{"level":3,"title":"(一) Vue 编码基础","slug":"一-vue-编码基础","link":"#一-vue-编码基础","children":[]},{"level":3,"title":"(二) Vue 项目目录规范","slug":"二-vue-项目目录规范","link":"#二-vue-项目目录规范","children":[]},{"level":3,"title":"前后端分离必备的接口规范","slug":"前后端分离必备的接口规范","link":"#前后端分离必备的接口规范","children":[]}]}],"filePathRelative":"interview/coding.md","git":{"createdTime":1715780535000,"updatedTime":1715780535000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":1}]},"readingTime":{"minutes":17.78,"words":5335}}');export{q as comp,y as data};
