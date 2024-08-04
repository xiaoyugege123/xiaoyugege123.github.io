import{_ as s,r as i,o as l,c as o,a as e,b as t,d as a,e as r}from"./app-D3FNjmSm.js";const c={},d=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git"},[e("span",null,"Git")])],-1),p={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),m={href:"https://blog.csdn.net/weixin_45565886/article/details/133798840",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),h={href:"https://blog.csdn.net/sunyctf/article/details/130587970",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="git常用场景" tabindex="-1"><a class="header-anchor" href="#git常用场景"><span>Git常用场景</span></a></h2><p><strong>配置相关</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 配置全局/局部的名字和邮箱，为了提交。</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xiaoyu&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;****@qq.com&quot;</span>

<span class="token function">git</span> config user.name <span class="token string">&quot;*****&quot;</span>
<span class="token function">git</span> config user.email <span class="token string">&quot;*****&quot;</span>

<span class="token comment"># 查看配置信息</span>
<span class="token function">git</span> config list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git合作开发场景" tabindex="-1"><a class="header-anchor" href="#git合作开发场景"><span>Git合作开发场景</span></a></h2><p><strong>使用 stash 的一个场景</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>问题场景:
甲和乙同时修改master分支代码。
甲修改了一部分，在本地，未提交
乙修改了一部分代码，提交到了远程
甲如何更新到乙修改的代码，同时本地修改保留?

解决:
1、执行git stash #暂存这些变更
2、git pull origin #拉取远程代码
3、git stash pop #重新应用储藏的变更
4、再次提交自己的代码到远程
    git commit -a -m &quot;提交说明&quot;
    git push origin master
</code></pre></div><p><strong>使用 stash 的另一个场景</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>问题场景:
甲同学在自己的分支上开发进行一半了。
但是代码还不想进行提交（切换分支要清空工作区）。
现在要修改别的分支问题的时候。

1、git stash：保存开发到一半的代码
2、git commit -m &#39;修改问题&#39;
3、git stash pop：将代码追加到最新的提交之后
</code></pre></div><h2 id="git特殊使用场景" tabindex="-1"><a class="header-anchor" href="#git特殊使用场景"><span>Git特殊使用场景</span></a></h2><blockquote><p>因为担心自己的代码会被其他人看到，有些问题，或者说自己看着自己做的git操作，给后来的自己整无语了，想进行相关的修缮操作。</p></blockquote><p><strong>篡改提交记录</strong></p><p>单条记录修改</p><p>Git提供了amend命令，可以用来修改最新的提交记录。<code>注意，这个命令只会修改最近一次的提交</code>，它能实现以下的功能：</p><ul><li>修改提交信息</li><li>添加漏掉的文件到上一次的提交中</li><li>修改之前提交的文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 替换用户名、邮箱信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;{username} &lt;{email}&gt;&quot;</span> --no-edit
<span class="token comment"># 如果已经修改了仓库的用户信息，直接执行命令重置</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> --reset-author --no-edit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量修改</p><p>Git官网提供了很多种修改提交记录信息的方法，这里主要介绍下filter-branch，它可以通过脚本的方式批量修改历史提交记录信息。</p><p>filter-branch 它能实现如下的功能，正好符合我们要批量修改历史提交记录中用户、邮箱的需求。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> filter-branch --commit-filter <span class="token string">&#39;
        if [ &quot;$GIT_AUTHOR_NAME&quot; = &quot;xiaofu&quot; ];
        then
                GIT_AUTHOR_NAME=&quot;程序员小富&quot;;
                GIT_AUTHOR_EMAIL=&quot;515361725@qq.com&quot;;
                git commit-tree &quot;$@&quot;;
        else
                git commit-tree &quot;$@&quot;;
        fi&#39;</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function b(f,k){const n=i("ExternalLinkIcon");return l(),o("div",null,[d,e("p",null,[e("a",p,[t("常用 Git 命令清单"),a(n)]),u,e("a",m,[t("git rebase与git merge图文详解"),a(n)]),g,e("a",h,[t("Git之GitFlow工作流 | Gitflow Workflow"),a(n)])]),v])}const q=s(c,[["render",b],["__file","Git.html.vue"]]),x=JSON.parse('{"path":"/computer/Git.html","title":"Git","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Git常用场景","slug":"git常用场景","link":"#git常用场景","children":[]},{"level":2,"title":"Git合作开发场景","slug":"git合作开发场景","link":"#git合作开发场景","children":[]},{"level":2,"title":"Git特殊使用场景","slug":"git特殊使用场景","link":"#git特殊使用场景","children":[]}],"filePathRelative":"computer/Git.md","git":{"createdTime":1715941349000,"updatedTime":1722664659000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":6}]},"readingTime":{"minutes":2.17,"words":652}}');export{q as comp,x as data};
