import{_ as n,o as a,c as s,e}from"./app-yU-VTVEq.js";const t={},p=e(`<h1 id="e164phonenumber" tabindex="-1"><a class="header-anchor" href="#e164phonenumber" aria-hidden="true">#</a> e164PhoneNumber</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">e164PhoneNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> E.164電話番号を生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><p>なし</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">e164PhoneNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;+3611313560448&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">e164PhoneNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;+2215808750085&quot;</span>
</code></pre></div>`,7),o=[p];function c(r,l){return a(),s("div",null,o)}const i=n(t,[["render",c],["__file","e164_phone_number.html.vue"]]);export{i as default};
