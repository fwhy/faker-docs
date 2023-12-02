import{_ as o,r as p,o as c,c as l,a,d as s,w as t,b as e,e as r}from"./app-yU-VTVEq.js";const i={},d=r(`<h1 id="randomfloat" tabindex="-1"><a class="header-anchor" href="#randomfloat" aria-hidden="true">#</a> randomFloat</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">randomFloat</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">int</span> <span class="token variable">$nbMaxDecimals</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token keyword type-hint">float</span> <span class="token variable">$min</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">float</span> <span class="token variable">$max</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">float</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> ランダムな浮動小数点数を返します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="nbmaxdecimals" tabindex="-1"><a class="header-anchor" href="#nbmaxdecimals" aria-hidden="true">#</a> <code>$nbMaxDecimals</code></h3><p>返される浮動小数点数の小数桁数。 nullを指定した場合、<code>randomDigit()</code>で生成されたランダムな値になります。</p><h3 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> <code>$min</code></h3><p>返される浮動小数点数の最小値。 整数または浮動小数点数で指定します。</p><h3 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> <code>$max</code></h3><p>返される浮動小数点数の最大値。 整数または浮動小数点数で指定します。 nullを指定した場合、<code>randomNumber()</code>で生成されたランダムな値になります。 このとき、<code>$min</code>よりも小さい値となった場合は<code>$min</code>と同じ値になります。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">crate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token number">5814182.56</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomFloat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token number">318419.71</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">randomFloat</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token number">5.0</span>
</code></pre></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><div class="custom-container warning"><p class="custom-container-title">注意:</p><p><code>$min</code>より<code>$max</code>のほうが小さい場合、入れ替えた上で処理を行います。</p></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,15);function u(k,h){const n=p("RouterLink");return c(),l("div",null,[d,a("ul",null,[a("li",null,[s(n,{to:"/formatters/base/random_digit.html"},{default:t(()=>[e("randomDigit")]),_:1})]),a("li",null,[s(n,{to:"/formatters/base/random_number.html"},{default:t(()=>[e("randomNumber")]),_:1})])])])}const f=o(i,[["render",u],["__file","random_float.html.vue"]]);export{f as default};