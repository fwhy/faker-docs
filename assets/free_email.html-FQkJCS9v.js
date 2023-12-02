import{_ as a,o as n,c as s,e as t}from"./app-yU-VTVEq.js";const e={},o=t(`<h1 id="freeemail" tabindex="-1"><a class="header-anchor" href="#freeemail" aria-hidden="true">#</a> freeEmail</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">freeEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> フリーメールアドレスを生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><p>なし</p><h3 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h3><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">freeEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;ymatsumoto@yahoo.co.jp&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">freeEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;cremin.adolfo@gmail.com&quot;</span>
</code></pre></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><div class="custom-container warning"><p class="custom-container-title">注意:</p><p>ドメインは &#39;gmail.com&#39;、&#39;yahoo.com&#39;、&#39;hotmail.com&#39;、&#39;mail.goo.ne.jp&#39;のいずれかになります。<br> また、 en_USロケールの場合は&#39;mail.goo.ne.jp&#39;を <strong>除く</strong> 、3種類のいずれかになります。</p></div>`,9),p=[o];function c(r,l){return n(),s("div",null,p)}const u=a(e,[["render",c],["__file","free_email.html.vue"]]);export{u as default};
