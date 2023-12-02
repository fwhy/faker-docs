import{_ as a,o as n,c as s,e as t}from"./app-yU-VTVEq.js";const e={},p=t(`<h1 id="ean13" tabindex="-1"><a class="header-anchor" href="#ean13" aria-hidden="true">#</a> ean13</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">ean13</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> 13桁のEANコードを生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><p>なし</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ean13</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;0841227604363&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ean13</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;6898719036045&quot;</span>
</code></pre></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><div class="custom-container warning"><p class="custom-container-title">注意:</p><p>日本語ロケールを指定しても日本の国コード（先頭2桁が&quot;49&quot;または&quot;45&quot;）になるわけではありません。</p></div>`,9),o=[p];function c(r,l){return n(),s("div",null,o)}const u=a(e,[["render",c],["__file","ean13.html.vue"]]);export{u as default};
