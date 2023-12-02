import{_ as n,o as s,c as a,e as t}from"./app-yU-VTVEq.js";const p={},e=t(`<h1 id="randomelements" tabindex="-1"><a class="header-anchor" href="#randomelements" aria-hidden="true">#</a> randomElements</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token keyword type-declaration">array</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token class-name">Traversable</span> <span class="token variable">$array</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;c&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$count</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$allowDuplicates</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">array</span>
</code></pre></div><p>🇯🇵 🇺🇸<br><code>$array</code>の中からランダムに<code>$count</code>個だけ抽出し、配列にして返します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> <code>$array</code></h3><p>要素を取得する配列、または列挙型のクラス名。デフォルトは<code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</code>。</p><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> <code>$count</code></h3><p>取得する要素の数。デフォルトは1。nullを指定した場合はランダムな個数を取得します。</p><h3 id="allowduplicates" tabindex="-1"><a class="header-anchor" href="#allowduplicates" aria-hidden="true">#</a> <code>$allowDuplicates</code></h3><p>要素を重複取得してよいか？デフォルトはfalse。</p><h2 id="例外" tabindex="-1"><a class="header-anchor" href="#例外" aria-hidden="true">#</a> 例外</h2><p><code>$allowDupplicates</code>をfalseにした場合、<code>$array</code>の要素数が<code>$count</code>より少ないときに<code>LengthException</code>が発生します。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
     <span class="token string double-quoted-string">&quot;b&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
     <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Y&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
     <span class="token string single-quoted-string">&#39;X&#39;</span><span class="token punctuation">,</span>
     <span class="token string single-quoted-string">&#39;Z&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;B&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
     <span class="token string double-quoted-string">&quot;B&quot;</span><span class="token punctuation">,</span>
     <span class="token string double-quoted-string">&quot;A&quot;</span><span class="token punctuation">,</span>
     <span class="token string double-quoted-string">&quot;B&quot;</span><span class="token punctuation">,</span>
     <span class="token string double-quoted-string">&quot;B&quot;</span><span class="token punctuation">,</span>
     <span class="token string double-quoted-string">&quot;A&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
</code></pre></div>`,14),o=[e];function c(l,u){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","random_elements.html.vue"]]);export{i as default};
