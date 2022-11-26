import{_ as s,c as a,o as n,e as o}from"./app.c5917f2e.js";const _=JSON.parse('{"title":"SSL","description":"","frontmatter":{},"headers":[],"relativePath":"discord-dashboard/v2/optional-config/ssl.md","lastUpdated":1669483744000}'),l={name:"discord-dashboard/v2/optional-config/ssl.md"},p=o(`<h1 id="ssl" tabindex="-1">SSL <a class="header-anchor" href="#ssl" aria-hidden="true">#</a></h1><p>If you want to use the https protocol, you must provide us with a certificate and an SSL key String. This can also be <code>fs.readFileSync</code>.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">SSL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">enabled</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">key</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">cert</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div>`,3),e=[p];function t(c,r,F,i,y,d){return n(),a("div",null,e)}const C=s(l,[["render",t]]);export{_ as __pageData,C as default};
