import{_ as a,o as s,c as n,e as t}from"./app-yU-VTVEq.js";const e={},p=t(`<h1 id="passthrough" tabindex="-1"><a class="header-anchor" href="#passthrough" aria-hidden="true">#</a> passthrough</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">passthrough</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">mixed</span>
</code></pre></div><p>🇯🇵 🇺🇸<br><code>$value</code>をそのまま返します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> <code>$value</code></h3><p>返したい値。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">passthrough</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;日本語&#39;</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;日本語&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">passthrough</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
     <span class="token string double-quoted-string">&quot;a&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;A&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
</code></pre></div>`,8),o=[p];function c(r,l){return s(),n("div",null,o)}const i=a(e,[["render",c],["__file","passthrough.html.vue"]]);export{i as default};
