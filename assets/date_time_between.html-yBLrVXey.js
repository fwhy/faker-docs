import{_ as t,r as p,o,c,a,b as s,d as e,e as r}from"./app-yU-VTVEq.js";const l={},i=r(`<h1 id="datetimebetween" tabindex="-1"><a class="header-anchor" href="#datetimebetween" aria-hidden="true">#</a> dateTimeBetween</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">dateTimeBetween</span><span class="token punctuation">(</span><span class="token class-name">DateTime</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span> <span class="token variable">$startDate</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;-30 years&#39;</span><span class="token punctuation">,</span> <span class="token class-name">DateTime</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span> <span class="token variable">$endDate</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;now&#39;</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$timezone</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token class-name return-type">DateTime</span>
</code></pre></div><p>🇯🇵 🇺🇸<br><code>$startDate</code> から <code>$endDate</code> までの日付の日時オブジェクトを生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="startdate" tabindex="-1"><a class="header-anchor" href="#startdate" aria-hidden="true">#</a> <code>$startDate</code></h3><p>返す値の最小値を指定します。デフォルトは&#39;-30 years&#39;。<br> 日時型を渡した場合、その日時のUNIXタイムスタンプとなります。<br> 文字列を渡す場合、<code>strtotime()</code>で解釈可能なものを渡します。</p><h3 id="enddate" tabindex="-1"><a class="header-anchor" href="#enddate" aria-hidden="true">#</a> <code>$endDate</code></h3><p>返す値の最大値を指定します。デフォルトは&#39;now&#39;。<br> 日時型を渡した場合、その日時のUNIXタイムスタンプとなります。<br> 文字列を渡す場合、<code>strtotime()</code>で解釈可能なものを渡します。</p><h3 id="timezone" tabindex="-1"><a class="header-anchor" href="#timezone" aria-hidden="true">#</a> <code>$timezone</code></h3><p>タイムゾーンを指定します。デフォルトはnull。<br> nullの場合、<code>date_default_timezone_get()</code>で取得される値になります。</p><h2 id="例外" tabindex="-1"><a class="header-anchor" href="#例外" aria-hidden="true">#</a> 例外</h2><p><code>$startDate</code> が <code>$endDate</code> よりも大きい場合、 <code>InvalidArgumentException</code> が発生します。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dateTimeBetween</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> DateTime @<span class="token number">1483556653</span> <span class="token punctuation">{</span><span class="token comment">#3467</span>
     date<span class="token punctuation">:</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">04</span> <span class="token number">19</span><span class="token punctuation">:</span><span class="token number">04</span><span class="token punctuation">:</span><span class="token number">13.0</span> <span class="token function">UTC</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">00</span><span class="token punctuation">:</span><span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dateTimeBetween</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-1 week&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Europe/Paris&#39;</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> DateTime @<span class="token number">1628107158</span> <span class="token punctuation">{</span><span class="token comment">#3491</span>
     date<span class="token punctuation">:</span> <span class="token number">2021</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">04</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">59</span><span class="token punctuation">:</span><span class="token number">18.0</span> Europe<span class="token operator">/</span><span class="token function">Paris</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">02</span><span class="token punctuation">:</span><span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
</code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,15),u={href:"https://www.php.net/manual/ja/function.strtotime.php",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.php.net/manual/ja/function.date-default-timezone-get",target:"_blank",rel:"noopener noreferrer"};function k(h,m){const n=p("ExternalLinkIcon");return o(),c("div",null,[i,a("ul",null,[a("li",null,[a("a",u,[s("strtotime"),e(n)])]),a("li",null,[a("a",d,[s("date_default_timezone_get"),e(n)])])])])}const g=t(l,[["render",k],["__file","date_time_between.html.vue"]]);export{g as default};