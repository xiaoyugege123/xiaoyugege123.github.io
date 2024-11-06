import{_ as t,r as a,o as l,c as r,a as e,b as n,d as s,e as o}from"./app-Bn7XLESk.js";const d={},c=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git"},[e("span",null,"Git")])],-1),u={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),p={href:"https://blog.csdn.net/weixin_45565886/article/details/133798840",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),g={href:"https://blog.csdn.net/sunyctf/article/details/130587970",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h={href:"https://www.cnblogs.com/liuyuelinfighting/p/16788088.html",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),_={href:"https://www.cnblogs.com/liuyuelinfighting/p/16790887.html",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="git-常用场景" tabindex="-1"><a class="header-anchor" href="#git-常用场景"><span>Git 常用场景</span></a></h2><p><strong>配置相关</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 配置全局/局部的名字和邮箱，为了提交。</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xiaoyu&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;****@qq.com&quot;</span>

<span class="token function">git</span> config user.name <span class="token string">&quot;*****&quot;</span>
<span class="token function">git</span> config user.email <span class="token string">&quot;*****&quot;</span>

<span class="token comment"># 查看配置信息</span>
<span class="token function">git</span> config list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-合作开发场景" tabindex="-1"><a class="header-anchor" href="#git-合作开发场景"><span>Git 合作开发场景</span></a></h2><p><strong>使用 stash 的一个场景</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>问题场景:
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
</code></pre></div><p><strong>切换远程仓库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 查看当前远程仓库地址</span>
<span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>new url<span class="token operator">&gt;</span> <span class="token comment"># 修改远程地址为新的地址 &lt;new url&gt; 改为新的地址</span>

<span class="token comment"># git remote show origin # 再次查看当前仓库远程地址 确认是否发生改变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>切换远程分支</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.  查看远程所有分支

git branch -a

如：

* dev

  master

  remotes/origin/HEAD -&gt; origin/master

  remotes/origin/master

  remotes/origin/release/caigou_v1.0

2.  本机新建分支并切换到指定分支（指定的远程分支）

  git checkout -b dev origin/release/caigou_v1.0

该命令可以将远程git仓库里的指定分支拉取到本地，这样就在本地新建了一个dev分支，
并和指定的远程分支release/caigou_v1.0关联了起来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-特殊使用场景" tabindex="-1"><a class="header-anchor" href="#git-特殊使用场景"><span>Git 特殊使用场景</span></a></h2><blockquote><p>因为担心自己的代码会被其他人看到，有些问题，或者说自己看着自己做的 git 操作，给后来的自己整无语了，想进行相关的修缮操作。</p></blockquote><p><strong>篡改提交记录</strong></p><p>单条记录修改</p><p>Git 提供了 amend 命令，可以用来修改最新的提交记录。<code>注意，这个命令只会修改最近一次的提交</code>，它能实现以下的功能：</p><ul><li>修改提交信息</li><li>添加漏掉的文件到上一次的提交中</li><li>修改之前提交的文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 替换用户名、邮箱信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;{username} &lt;{email}&gt;&quot;</span> --no-edit
<span class="token comment"># 如果已经修改了仓库的用户信息，直接执行命令重置</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> --reset-author --no-edit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量修改</p><p>Git 官网提供了很多种修改提交记录信息的方法，这里主要介绍下 filter-branch，它可以通过脚本的方式批量修改历史提交记录信息。</p><p>filter-branch 它能实现如下的功能，正好符合我们要批量修改历史提交记录中用户、邮箱的需求。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> filter-branch --commit-filter <span class="token string">&#39;
        if [ &quot;$GIT_AUTHOR_NAME&quot; = &quot;xiaofu&quot; ];
        then
                GIT_AUTHOR_NAME=&quot;程序员小富&quot;;
                GIT_AUTHOR_EMAIL=&quot;515361725@qq.com&quot;;
                git commit-tree &quot;$@&quot;;
        else
                git commit-tree &quot;$@&quot;;
        fi&#39;</span> HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面相当于在重写.git 文件夹</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PS D:\\web前端工程\\WebDemo\\React\\happy-buy&gt; git filter-branch --commit-filter &#39;
&gt;&gt;         if [ &quot;$GIT_AUTHOR_NAME&quot; = &quot;xiaoyugege123&quot; ];
&gt;&gt;         then
&gt;&gt;                 GIT_AUTHOR_NAME=&quot;xiaoyu&quot;;
&gt;&gt;                 GIT_AUTHOR_EMAIL=&quot;luoyu2003@outlook.com&quot;;
&gt;&gt;                 git commit-tree &quot;$@&quot;;
&gt;&gt;         else
&gt;&gt;                 git commit-tree &quot;$@&quot;;
&gt;&gt;         fi&#39; HEAD
$@&quot;\\x3b\\x0a        else\\x0a                git commit-tree &quot;$@&quot;\\x3b\\x0a        fi&#39; HEAD;a6c62303-8523-46d7-a161-ece3222db78dWARNING: git-filter-branch has a glut of gotchas generating mangled history
         rewrites.  Hit Ctrl-C before proceeding to abort, then use an
         alternative filtering tool such as &#39;git filter-repo&#39;
         (https://github.com/newren/git-filter-repo/) instead.  See the
         filter-branch manual page for more details; to squelch this warning,
         set FILTER_BRANCH_SQUELCH_WARNING=1.
Proceeding with filter-branch...

Rewrite 1159a0efac5311581fc69968c1d7b955cc7b26c0 (39/40) (21 seconds passed, remaining 0 predicted)
Ref &#39;refs/heads/master&#39; was rewritten
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commit-规范" tabindex="-1"><a class="header-anchor" href="#commit-规范"><span>commit 规范</span></a></h2><ol><li><p>type</p><pre><code>- feat: 新功能
- fix: 修复问题
- docs: 修改文档
- style: 修改代码格式，不影响代码逻辑
- refactor: 重构代码，理论上不影响现有功能
- perf: 提升性能
- test: 增加修改测试用例
- chore: 修改工具相关（包括但不限于文档、代码生成等）
- deps: 升级依赖
</code></pre></li><li><p>scope</p><pre><code>- 修改文件的范围（包括但不限于 doc, middleware, proxy, core, config）
</code></pre></li><li><p>subject</p><pre><code>- 用一句话清楚的描述这次提交做了什么
</code></pre></li><li><p>body</p><pre><code>- 补充 subject，适当增加原因、目的等相关因素，也可不写。
</code></pre></li><li><p>footer</p><pre><code>- 当有非兼容修改时可在这里描述清楚
- 关联相关 issue，如 Closes #1, Closes #2, #3
- 如果功能点有新增或修改的，还需要关联 chair-handbook 和 chair-init 的 MR，如 chair/doc!123
</code></pre></li></ol>`,27);function x(q,G){const i=a("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[e("a",u,[n("常用 Git 命令清单"),s(i)]),m,e("a",p,[n("git rebase 与 git merge 图文详解"),s(i)]),v,e("a",g,[n("Git 之 GitFlow 工作流 | Gitflow Workflow"),s(i)]),n(),b,e("a",h,[n("Git 中的三种后悔药"),s(i)]),f,e("a",_,[n("Git 中的三种后悔药 二"),s(i)])]),k])}const A=t(d,[["render",x],["__file","Git.html.vue"]]),y=JSON.parse('{"path":"/computer/Git.html","title":"Git","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Git 常用场景","slug":"git-常用场景","link":"#git-常用场景","children":[]},{"level":2,"title":"Git 合作开发场景","slug":"git-合作开发场景","link":"#git-合作开发场景","children":[]},{"level":2,"title":"Git 特殊使用场景","slug":"git-特殊使用场景","link":"#git-特殊使用场景","children":[]},{"level":2,"title":"commit 规范","slug":"commit-规范","link":"#commit-规范","children":[]}],"filePathRelative":"computer/Git.md","git":{"createdTime":1715941349000,"updatedTime":1724948335000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":9}]},"readingTime":{"minutes":3.95,"words":1185}}');export{A as comp,y as data};
