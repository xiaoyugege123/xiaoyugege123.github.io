import{_ as n,o as s,c as a,e as p}from"./app-TTcMh5mr.js";const t={},e=p(`<h1 id="回溯算法🌽" tabindex="-1"><a class="header-anchor" href="#回溯算法🌽"><span>回溯算法🌽</span></a></h1><h2 id="_77-组合" tabindex="-1"><a class="header-anchor" href="#_77-组合"><span>77. 组合</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> reult <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">combineHelp</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> reult
    <span class="token comment">// 结合树形图去写题目！</span>
    <span class="token keyword">function</span> <span class="token function">combineHelp</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            reult<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token function">combineHelp</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_216-组合总和-iii" tabindex="-1"><a class="header-anchor" href="#_216-组合总和-iii"><span>216. 组合总和 III</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> path<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">targetSum<span class="token punctuation">,</span>k<span class="token punctuation">,</span>sum<span class="token punctuation">,</span>startIndex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sum<span class="token operator">&gt;</span>targetSum<span class="token punctuation">)</span><span class="token keyword">return</span><span class="token punctuation">;</span><span class="token comment">//剪枝操作</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>length<span class="token operator">==</span>k<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>targetSum<span class="token operator">==</span>sum<span class="token punctuation">)</span><span class="token punctuation">{</span>
                result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//剪枝操作</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>startIndex<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token operator">-</span><span class="token punctuation">(</span>k<span class="token operator">-</span>path<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>i
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>targetSum<span class="token punctuation">,</span>k<span class="token punctuation">,</span>sum<span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
            sum<span class="token operator">-=</span>i
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_39-组合总和" tabindex="-1"><a class="header-anchor" href="#_39-组合总和"><span>39. 组合总和</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candidates</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">candidates<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>path<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">j<span class="token punctuation">,</span>sum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sum<span class="token operator">&gt;</span>target<span class="token punctuation">)</span><span class="token keyword">return</span><span class="token punctuation">;</span><span class="token comment">//剪枝操作</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sum<span class="token operator">==</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>j<span class="token punctuation">;</span>i<span class="token operator">&lt;</span>candidates<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> num<span class="token operator">=</span>candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            sum<span class="token operator">+=</span>num
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>sum<span class="token punctuation">)</span>
            sum<span class="token operator">-=</span>num
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_78-子集" tabindex="-1"><a class="header-anchor" href="#_78-子集"><span>78. 子集</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_46-全排列" tabindex="-1"><a class="header-anchor" href="#_46-全排列"><span>46. 全排列</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">used</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>used<span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="老师给的一道题" tabindex="-1"><a class="header-anchor" href="#老师给的一道题"><span>老师给的一道题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>总体要求:传入二维数组，返回二维数组的所有排列组合
场景描述:
const arr = [
    [&#39;黑色&#39;, &#39;白色&#39;, &#39;金色&#39;],
    [&#39;16G&#39;, &#39;32G&#39;, &#39;256G&#39;, &#39;512G&#39;],
    [&#39;4.7&#39;, &#39;5.5&#39;, &#39;7.3&#39;],
];
arr 数组包含了一个多维数组，
第一个子数组 [&#39;黑色&#39;, &#39;白色&#39;, &#39;金色&#39;] 包含了手机颜色的选项。
第二个子数组 [&#39;16G&#39;, &#39;32G&#39;, &#39;256G&#39;, &#39;512G&#39;] 包含了手机存储容量的选项。
第三个子数组 [&#39;4.7&#39;, &#39;5.5&#39;, &#39;7.3&#39;] 包含了手机屏幕尺寸的选项。


编程输出所有可能的手机型号
[
  [ &#39;黑色&#39;, &#39;16G&#39;, &#39;4.7&#39; ],
  [ &#39;白色&#39;, &#39;16G&#39;, &#39;4.7&#39; ],
  [ &#39;金色&#39;, &#39;16G&#39;, &#39;4.7&#39; ],
  [ &#39;黑色&#39;, &#39;32G&#39;, &#39;4.7&#39; ],
  [ &#39;白色&#39;, &#39;32G&#39;, &#39;4.7&#39; ],
  [ &#39;金色&#39;, &#39;32G&#39;, &#39;4.7&#39; ],
  [ &#39;黑色&#39;, &#39;256G&#39;, &#39;4.7&#39; ],
  [ &#39;白色&#39;, &#39;256G&#39;, &#39;4.7&#39; ],
  ...
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getAllCombinations</span><span class="token punctuation">(</span><span class="token parameter">arrays</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//TODO:补充代码,建议用递归实现功能</span>
    <span class="token comment">// 常规的回溯算法！！！</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> arrays<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>temp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arrays<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arrays<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            temp<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;黑色&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;白色&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;金色&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;16G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;32G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;256G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;512G&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;4.7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5.5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7.3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> combinations <span class="token operator">=</span> <span class="token function">getAllCombinations</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>combinations<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
输出结果:

[
  [ &#39;黑色&#39;, &#39;16G&#39;, &#39;4.7&#39; ],
  [ &#39;白色&#39;, &#39;16G&#39;, &#39;4.7&#39; ],
  [ &#39;金色&#39;, &#39;16G&#39;, &#39;4.7&#39; ],
  [ &#39;黑色&#39;, &#39;32G&#39;, &#39;4.7&#39; ],
  [ &#39;白色&#39;, &#39;32G&#39;, &#39;4.7&#39; ],
  [ &#39;金色&#39;, &#39;32G&#39;, &#39;4.7&#39; ],
  [ &#39;黑色&#39;, &#39;256G&#39;, &#39;4.7&#39; ],
  [ &#39;白色&#39;, &#39;256G&#39;, &#39;4.7&#39; ],
  ...
]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","回溯算法🌽.html.vue"]]),r=JSON.parse('{"path":"/algorithm/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%F0%9F%8C%BD.html","title":"回溯算法🌽","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"77. 组合","slug":"_77-组合","link":"#_77-组合","children":[]},{"level":2,"title":"216. 组合总和 III","slug":"_216-组合总和-iii","link":"#_216-组合总和-iii","children":[]},{"level":2,"title":"39. 组合总和","slug":"_39-组合总和","link":"#_39-组合总和","children":[]},{"level":2,"title":"78. 子集","slug":"_78-子集","link":"#_78-子集","children":[]},{"level":2,"title":"46. 全排列","slug":"_46-全排列","link":"#_46-全排列","children":[]},{"level":2,"title":"老师给的一道题","slug":"老师给的一道题","link":"#老师给的一道题","children":[]}],"filePathRelative":"algorithm/回溯算法🌽.md","git":{"createdTime":1716817467000,"updatedTime":1716981015000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":2}]},"readingTime":{"minutes":2.06,"words":619}}');export{k as comp,r as data};
