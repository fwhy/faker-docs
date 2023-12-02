import{_ as t,r as o,o as p,c as r,a as n,b as a,d as c,e as s}from"./app-yU-VTVEq.js";const l={},i=s(`<h1 id="imageurl" tabindex="-1"><a class="header-anchor" href="#imageurl" aria-hidden="true">#</a> imageUrl</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">imageUrl</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$width</span> <span class="token operator">=</span> <span class="token number">640</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$height</span> <span class="token operator">=</span> <span class="token number">480</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$category</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$randomize</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$word</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$gray</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;png&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div>`,2),d=n("br",null,null,-1),h={href:"https://placeholder.com/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> <code>$width</code></h3><p>画像の横幅。デフォルトは640。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> <code>$height</code></h3><p>画像の高さ。デフォルトは480。</p><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> <code>$category</code></h3><p>カテゴリを指定します。指定した文字列は画像内に表示されます。</p><h3 id="randomize" tabindex="-1"><a class="header-anchor" href="#randomize" aria-hidden="true">#</a> <code>$randomize</code></h3><p>画像内にランダムな文字を表示するかを指定します。デフォルトはtrue。</p><h3 id="word" tabindex="-1"><a class="header-anchor" href="#word" aria-hidden="true">#</a> <code>$word</code></h3><p>文字列を指定します。指定した文字列は画像内に表示されます。</p><h3 id="gray" tabindex="-1"><a class="header-anchor" href="#gray" aria-hidden="true">#</a> <code>$gray</code></h3><p>trueの場合、灰色の画像になります。デフォルトはfalse。</p><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> <code>$format</code></h3><p>画像のフォーマット（拡張子）を指定します。デフォルトは&#39;png&#39;。<br> &#39;jpg&#39;、&#39;jpeg&#39;、&#39;png&#39;のいずれかで指定してください。</p><h2 id="例外" tabindex="-1"><a class="header-anchor" href="#例外" aria-hidden="true">#</a> 例外</h2><p><code>$format</code>が&#39;jpg&#39;、&#39;jpeg&#39;、&#39;png&#39;以外であった場合、<code>InvalidArgumentException</code>例外が発生します。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">imageUrl</span><span class="token punctuation">(</span><span class="token number">468</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;https://via.placeholder.com/467x60.png/008888?text=assumenda&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">imageUrl</span><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;category&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;word&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;https://via.placeholder.com/320x240.png/CCCCCC?text=category+word&quot;</span>
</code></pre></div><h3 id="画像の例" tabindex="-1"><a class="header-anchor" href="#画像の例" aria-hidden="true">#</a> 画像の例</h3><h4 id="imageurl-468-60" tabindex="-1"><a class="header-anchor" href="#imageurl-468-60" aria-hidden="true">#</a> imageUrl(468, 60)</h4><p><img src="https://via.placeholder.com/467x60.png/008888?text=assumenda" alt="imageUrl(468, 60)"></p><h4 id="imageurl-320-240-category-false-word-true" tabindex="-1"><a class="header-anchor" href="#imageurl-320-240-category-false-word-true" aria-hidden="true">#</a> imageUrl(320, 240, &#39;category&#39;, false, &#39;word&#39;, true)</h4><p><img src="https://via.placeholder.com/320x240.png/CCCCCC?text=category+word" alt="imageUrl(320, 240, &#39;category&#39;, false, &#39;word&#39;, true)"></p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><div class="custom-container warning"><p class="custom-container-title">注意:</p><p>画像内の文字は <code>&lt;$category&gt; &lt;$word&gt; &lt;ランダムな文字列($randomizeがtrueの場合)&gt;</code> のようになります。</p></div>`,26);function k(g,m){const e=o("ExternalLinkIcon");return p(),r("div",null,[i,n("p",null,[a("🇯🇵 🇺🇸"),d,n("a",h,[a("https://placeholder.com/"),c(e)]),a("　を用いて画像URLを生成します。")]),u])}const b=t(l,[["render",k],["__file","image_url.html.vue"]]);export{b as default};