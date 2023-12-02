import{_ as s,r as e,o as t,c as o,a,b as p,d as c,e as r}from"./app-yU-VTVEq.js";const l={},i=r(`<h1 id="year" tabindex="-1"><a class="header-anchor" href="#year" aria-hidden="true">#</a> year</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">year</span><span class="token punctuation">(</span><span class="token class-name">DateTime</span><span class="token operator">|</span><span class="token keyword type-declaration">int</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span> <span class="token variable">$max</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;now&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> 1970年1月1日から <code>$max</code> までの日時をランダムに生成し、その年を文字列で返します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> <code>$max</code></h3><p>返す時刻の最大値を指定します。デフォルトは&#39;now&#39;。<br> 日時型を渡した場合、その日時のUNIXタイムスタンプとなります。<br> 文字列を渡す場合、<code>strtotime()</code>で解釈可能なものを渡します。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">year</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;1984&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">year</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;+500 year&#39;</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2415&quot;</span>
</code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,9),d={href:"https://www.php.net/manual/ja/function.strtotime.php",target:"_blank",rel:"noopener noreferrer"};function u(k,h){const n=e("ExternalLinkIcon");return t(),o("div",null,[i,a("ul",null,[a("li",null,[a("a",d,[p("strtotime"),c(n)])])])])}const f=s(l,[["render",u],["__file","year.html.vue"]]);export{f as default};
