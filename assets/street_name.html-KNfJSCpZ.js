import{_ as a,o as s,c as n,e as t}from"./app-yU-VTVEq.js";const e={},p=t(`<h1 id="streetname" tabindex="-1"><a class="header-anchor" href="#streetname" aria-hidden="true">#</a> streetName</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">streetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> 町名を生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><p>なし</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">streetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;中津川町&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">streetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Moen Fall&quot;</span>
</code></pre></div>`,7),o=[p];function c(r,l){return s(),n("div",null,o)}const i=a(e,[["render",c],["__file","street_name.html.vue"]]);export{i as default};