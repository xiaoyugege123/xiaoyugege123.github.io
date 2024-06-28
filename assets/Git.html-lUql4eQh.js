import{_ as o,r as i,o as s,c as r,a as t,b as n,d as a,e as l}from"./app-TTcMh5mr.js";const c={},d=t("h1",{id:"git",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#git"},[t("span",null,"Git")])],-1),g={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},h=t("br",null,null,-1),p={href:"https://blog.csdn.net/weixin_45565886/article/details/133798840",target:"_blank",rel:"noopener noreferrer"},m=t("br",null,null,-1),_={href:"https://blog.csdn.net/sunyctf/article/details/130587970",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="git合作开发场景" tabindex="-1"><a class="header-anchor" href="#git合作开发场景"><span>Git合作开发场景</span></a></h2><p><strong>使用 stash 的一个场景</strong></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>问题场景:
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
</code></pre></div>`,5);function f(x,b){const e=i("ExternalLinkIcon");return s(),r("div",null,[d,t("p",null,[t("a",g,[n("常用 Git 命令清单"),a(e)]),h,t("a",p,[n("git rebase与git merge图文详解"),a(e)]),m,t("a",_,[n("Git之GitFlow工作流 | Gitflow Workflow"),a(e)])]),u])}const k=o(c,[["render",f],["__file","Git.html.vue"]]),v=JSON.parse('{"path":"/computer/Git.html","title":"Git","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Git合作开发场景","slug":"git合作开发场景","link":"#git合作开发场景","children":[]}],"filePathRelative":"computer/Git.md","git":{"createdTime":1715941349000,"updatedTime":1716817467000,"contributors":[{"name":"xiaoyu","email":"luoyu2003@outlook.com","commits":4}]},"readingTime":{"minutes":0.95,"words":284}}');export{k as comp,v as data};
