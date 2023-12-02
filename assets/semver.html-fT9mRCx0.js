import{_ as a,o as s,c as n,e}from"./app-yU-VTVEq.js";const t={},o=e(`<h1 id="semver" tabindex="-1"><a class="header-anchor" href="#semver" aria-hidden="true">#</a> semver</h1><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">semver</span><span class="token punctuation">(</span><span class="token keyword type-hint">bool</span> <span class="token variable">$preRelease</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token keyword type-hint">bool</span> <span class="token variable">$build</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">:</span><span class="token keyword return-type">string</span>
</code></pre></div><p>🇯🇵 🇺🇸<br> セマンティックバージョン2.0.0を生成します。</p><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><h3 id="prerelease" tabindex="-1"><a class="header-anchor" href="#prerelease" aria-hidden="true">#</a> <code>$preRelease</code></h3><p>プレリリースバージョンを付けるか否か。デフォルトはfalse。<br> trueの場合、&#39;alpha&#39;、&#39;beta&#39;、&#39;rc&#39;のいずれかが付きます。</p><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <code>$build</code></h3><p>ビルドメタデータを付けるか否か。デフォルトはfalse。 trueの場合、末尾にビルド番号が付きます。</p><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例" aria-hidden="true">#</a> 例</h2><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ja_JP&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">semver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;5.82.55&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Faker<span class="token punctuation">\\</span>Factory</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">semver</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
<span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;6.69.32-beta.12+20061015231241&quot;</span>
</code></pre></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><div class="custom-container warning"><p class="custom-container-title">注意:</p><p><code>$preRelease</code> および <code>$build</code> はともにtrueを指定しても50%の確率でプレリリースバージョンおよびビルドメタデータが付かないことがあります。<br> 具体的には内部で <code>mt_rand(0, 1) === 0</code> となったときに出力されません。</p></div>`,12),p=[o];function c(r,l){return s(),n("div",null,p)}const u=a(t,[["render",c],["__file","semver.html.vue"]]);export{u as default};
