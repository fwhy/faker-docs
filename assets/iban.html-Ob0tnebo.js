import{_ as a,o as n,c as s,e as t}from"./app-yU-VTVEq.js";const e={},p=t(`<h1 id="iban" tabindex="-1"><a class="header-anchor" href="#iban" aria-hidden="true">#</a> iban</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">iban</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token class-name type-declaration">stirng</span> <span class="token variable">$countryCode</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$prefix</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$length</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> IBANコードを生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="countrycode" tabindex="-1"><a class="header-anchor" href="#countrycode" aria-hidden="true">#</a> <code>$countryCode</code></h3><p>ISO 3166-1 の2文字の国コードを指定します。デフォルトはnullで、この場合はランダムに国コードが選択されます。</p><h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> <code>$prefix</code></h3><p>接頭辞を指定します。デフォルトは空文字列。<br> 特定の銀行の口座番号を生成したい場合はここで指定します。</p><h3 id="length" tabindex="-1"><a class="header-anchor" href="#length" aria-hidden="true">#</a> <code>$length</code></h3><p>文字列の長さ。デフォルトはnullで、この場合は内部で定義された国コードごとの文字長となります。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">iban</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;RS98544971279220233906&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">iban</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;FR&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;BBBBBGGGGG&#39;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;FR60BBBBBGGGGG9XRX3532W8S17&quot;</span>
</code></pre></div>`,12),o=[p];function c(r,l){return n(),s("div",null,o)}const u=a(e,[["render",c],["__file","iban.html.vue"]]);export{u as default};