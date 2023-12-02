import{_ as a,o as n,c as s,e as t}from"./app-yU-VTVEq.js";const e={},p=t(`<h1 id="randomdigit" tabindex="-1"><a class="header-anchor" href="#randomdigit" aria-hidden="true">#</a> randomDigit</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">randomDigit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">int</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> 0から9までの乱数を返します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><p>なし</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomDigit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomDigit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token number">0</span>
</code></pre></div>`,7),o=[p];function c(r,i){return n(),s("div",null,o)}const u=a(e,[["render",c],["__file","random_digit.html.vue"]]);export{u as default};
