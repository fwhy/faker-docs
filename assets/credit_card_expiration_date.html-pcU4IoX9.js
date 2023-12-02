import{_ as a,o as n,c as s,e as t}from"./app-yU-VTVEq.js";const p={},e=t(`<h1 id="creditcardexpirationdate" tabindex="-1"><a class="header-anchor" href="#creditcardexpirationdate" aria-hidden="true">#</a> creditCardExpirationDate</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">creditCardExpirationDate</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$valid</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token class-name return-type">DateTime</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> クレジットカードの有効期限を日時型で生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="valid" tabindex="-1"><a class="header-anchor" href="#valid" aria-hidden="true">#</a> <code>$valid</code></h3><p>有効な有効期限か否かを指定します。デフォルトはtrue。 trueの場合、現在から36ヶ月後までのいずれか日付になります。 falseの場合、36ヶ月前から36ヶ月後までのいずれか日付になります。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">creditCardExpirationDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> DateTime @<span class="token number">1658572238</span> <span class="token punctuation">{</span><span class="token comment">#3006</span>
     date<span class="token punctuation">:</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">23</span> <span class="token number">10</span><span class="token punctuation">:</span><span class="token number">30</span><span class="token punctuation">:</span><span class="token number">38.0</span> <span class="token function">UTC</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">00</span><span class="token punctuation">:</span><span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">creditCardExpirationDate</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> DateTime @<span class="token number">1635438260</span> <span class="token punctuation">{</span><span class="token comment">#3030</span>
     date<span class="token punctuation">:</span> <span class="token number">2021</span><span class="token operator">-</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">16</span><span class="token punctuation">:</span><span class="token number">24</span><span class="token punctuation">:</span><span class="token number">20.0</span> <span class="token function">UTC</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">00</span><span class="token punctuation">:</span><span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
</code></pre></div>`,8),o=[e];function c(r,l){return n(),s("div",null,o)}const i=a(p,[["render",c],["__file","credit_card_expiration_date.html.vue"]]);export{i as default};
