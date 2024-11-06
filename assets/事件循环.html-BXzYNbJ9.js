import{_ as n,o as a,c as s,e as t}from"./app-Bn7XLESk.js";const e="/imgs/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.png",l="/imgs/%E5%BC%82%E6%AD%A5.png",p={},i=t('<h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环"><span>事件循环</span></a></h1><h2 id="浏览器的进程" tabindex="-1"><a class="header-anchor" href="#浏览器的进程"><span>浏览器的进程</span></a></h2><h3 id="何为进程" tabindex="-1"><a class="header-anchor" href="#何为进程"><span>何为进程？</span></a></h3><p>程序运行需要有它自己专属的内存空间，可以把这块内存空间简单理解为进程。每个应用至少有一个进程，进程之间相互独立，即使要通信，也需要双方进行同意。</p><h3 id="何为线程" tabindex="-1"><a class="header-anchor" href="#何为线程"><span>何为线程？</span></a></h3><p>一个进程至少需要一个线程，所以在进程开启后会自动创建一个线程来运行代码，该线程称之为主线程。如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含很多个线程。</p><h3 id="浏览器有哪些进程和线程" tabindex="-1"><a class="header-anchor" href="#浏览器有哪些进程和线程"><span>浏览器有哪些进程和线程？</span></a></h3><p><strong>浏览器是一个多进程多线程的应用程序</strong><br> 浏览器内部工作极其复杂，为了避免相互影响，为了减少连环崩溃的几率，当启动浏览器后，它会自动启动多个进程。</p><blockquote><p>可以在浏览器的任务管理器中查看当前的所有进程</p></blockquote><p>其中，最主要的进程有：</p><ol><li>浏览器进程<br> 主要负责界面显示、用户交互、子进程管理。浏览器进程内部会启动多个线程处理不同的任务。</li><li>网络进程<br> 负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务。</li><li>渲染进程<br> 渲染进程启动后，会启动一个渲染主线程，主线程负责执行HTML、CSS、JS代码。默认情况下，浏览器会为每个标签页开启一个新的渲染进程，以保证不同的标签页之间不相互影响。</li></ol><h2 id="渲染主线程是如何工作的" tabindex="-1"><a class="header-anchor" href="#渲染主线程是如何工作的"><span>渲染主线程是如何工作的？</span></a></h2><p>渲染主线程是浏览器中最繁忙的线程，需要它处理的任务包括但不限于：</p><ul><li>解析 HTML</li><li>解析 CSS</li><li>计算样式</li><li>布局</li><li>处理图层</li><li>每秒把页面画60次 FPS</li><li>执行全局的JS代码</li><li>执行事件处理函数</li><li>执行计时器的回调函数</li><li>……</li></ul><blockquote><p>思考题：为什么渲染进程不适用多个线程来处理这些事情？</p></blockquote><p>要处理这么多的任务，主线程遇到了一个前所未有的难题：如何调度任务？</p><p>比如：</p><ul><li>我正在执行一个 JS 函数，执行到一半的时候用户点击了按钮，我该立即去执行点击事件的处理函数吗？</li><li>我正在执行一个 JS 函数，执行到一半的时候某个计时器到达了时间，我该立即去执行它的回调函数吗？</li><li>浏览器进程通知我“用户点击了按钮”，与此同时，某个计时器也到达了时间，我应该处理哪一个呢？</li><li>……</li></ul><p>渲染主线程想出了一个绝妙的主意来处理这个问题：排队</p><p><img src="'+e+'" alt="消息队列"></p><p><strong>事件循环（消息循环）</strong></p><ol><li>在最开始的时候，渲染主线程会进入一个无限循环</li><li>每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。</li><li>其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾。在添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务。</li></ol><h2 id="若干解释" tabindex="-1"><a class="header-anchor" href="#若干解释"><span>若干解释</span></a></h2><h3 id="何为异步" tabindex="-1"><a class="header-anchor" href="#何为异步"><span>何为异步？</span></a></h3><p>代码在执行的过程中，会遇到一些无法立即处理的任务，比如：</p><ul><li>计时完成后需要执行的任务 -- setTimeout、setInterval</li><li>网络通信完成后需要执行的任务 -- XHR、fetch</li><li>用户操作后需要执行的任务 -- addEventListener</li></ul><p>如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于【阻塞】的状态，从而导致浏览器【卡死】</p><p><strong>渲染主线程承担着及其重要的工作，无论如何都不能阻塞！</strong>，因此浏览器选择异步来解决这个问题。</p><p><img src="'+l+`" alt="异步"></p><p>使用异步的方式，渲染主线程永不阻塞</p><blockquote><p>面试题：如何理解 JS 的异步？</p><p>参考答案：<br> JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作，渲染页面、执行JS都在其中运行。如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样依赖，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。<br> 所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。</p></blockquote><h3 id="js为何会阻塞渲染" tabindex="-1"><a class="header-anchor" href="#js为何会阻塞渲染"><span>JS为何会阻塞渲染？</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> btn<span class="token operator">=</span>documnet<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// JS 延迟函数</span>
<span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>start <span class="token operator">&lt;</span> duration<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    h1<span class="token punctuation">.</span>textContent<span class="token operator">=</span><span class="token string">&#39;袁老师&#39;</span><span class="token punctuation">;</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息队列：Fn -&gt; delay -&gt; 绘制</p><h3 id="任务有优先级吗" tabindex="-1"><a class="header-anchor" href="#任务有优先级吗"><span>任务有优先级吗？</span></a></h3><p>在目前的Chrome的实现中，至少包含了下面的队列：</p><ul><li>延时队列：用于存放计时器到达后的回调任务，优先级【中】</li><li>交互队列：用于存放用户操作后产生的事件处理任务，优先级【高】</li><li>微任务队列：用户存放需要最快执行的任务，优先级【最高】</li></ul><blockquote><p>面试题：阐述一下 JS 的事件循环 <br> 参考答案：<br> 事件循环又叫消息循环，是浏览器渲染主线程的工作方式。在Chrome的源码中，它开启一个不会结束的for循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。过去把消息队列简单分为宏任务队列和微任务队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。<br> 根据W3C官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。</p></blockquote><blockquote><p>面试题：JS中的计时器能做到精确计时吗？为什么？</p><p>参考答案：不行，因为：</p><ol><li>计算机硬件没有原子钟，无法做到精确计时</li><li>操作系统的计时函数本身就有少量的偏差，由于JS的计时器最终调用的是操作系统的函数，也就携带了这些偏差。</li><li>按照W3C的标准，浏览器实现计时器时，如果嵌套层级超过了5层，则会带有4毫秒的最少时间，这样在计时时间少于4毫秒时有带来了偏差</li><li>受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此有带来了偏差。</li></ol></blockquote>`,39),o=[i];function c(u,r){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","事件循环.html.vue"]]),h=JSON.parse('{"path":"/advance/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html","title":"事件循环","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"浏览器的进程","slug":"浏览器的进程","link":"#浏览器的进程","children":[{"level":3,"title":"何为进程？","slug":"何为进程","link":"#何为进程","children":[]},{"level":3,"title":"何为线程？","slug":"何为线程","link":"#何为线程","children":[]},{"level":3,"title":"浏览器有哪些进程和线程？","slug":"浏览器有哪些进程和线程","link":"#浏览器有哪些进程和线程","children":[]}]},{"level":2,"title":"渲染主线程是如何工作的？","slug":"渲染主线程是如何工作的","link":"#渲染主线程是如何工作的","children":[]},{"level":2,"title":"若干解释","slug":"若干解释","link":"#若干解释","children":[{"level":3,"title":"何为异步？","slug":"何为异步","link":"#何为异步","children":[]},{"level":3,"title":"JS为何会阻塞渲染？","slug":"js为何会阻塞渲染","link":"#js为何会阻塞渲染","children":[]},{"level":3,"title":"任务有优先级吗？","slug":"任务有优先级吗","link":"#任务有优先级吗","children":[]}]}],"filePathRelative":"advance/事件循环.md","git":{"createdTime":1720540900000,"updatedTime":1720540900000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":1}]},"readingTime":{"minutes":6.78,"words":2035}}');export{k as comp,h as data};
