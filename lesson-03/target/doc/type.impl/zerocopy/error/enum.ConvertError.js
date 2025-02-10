(function() {var type_impls = {
"zerocopy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConvertError%3CInfallible,+SizeError%3CSrc,+Dst%3E,+ValidityError%3CSrc,+Dst%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#868-910\">source</a><a href=\"#impl-ConvertError%3CInfallible,+SizeError%3CSrc,+Dst%3E,+ValidityError%3CSrc,+Dst%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Src, Dst: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"zerocopy/trait.TryFromBytes.html\" title=\"trait zerocopy::TryFromBytes\">TryFromBytes</a>&gt; <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>, <a class=\"struct\" href=\"zerocopy/error/struct.SizeError.html\" title=\"struct zerocopy::error::SizeError\">SizeError</a>&lt;Src, Dst&gt;, <a class=\"struct\" href=\"zerocopy/error/struct.ValidityError.html\" title=\"struct zerocopy::error::ValidityError\">ValidityError</a>&lt;Src, Dst&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_src\" class=\"method\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#871-877\">source</a><h4 class=\"code-header\">pub fn <a href=\"zerocopy/error/enum.ConvertError.html#tymethod.into_src\" class=\"fn\">into_src</a>(self) -&gt; Src</h4></section></summary><div class=\"docblock\"><p>Produces the source underlying the failed conversion.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_src\" class=\"method\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#903-909\">source</a><h4 class=\"code-header\">pub fn <a href=\"zerocopy/error/enum.ConvertError.html#tymethod.map_src\" class=\"fn\">map_src</a>&lt;NewSrc&gt;(\n    self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(Src) -&gt; NewSrc\n) -&gt; <a class=\"type\" href=\"zerocopy/error/type.TryReadError.html\" title=\"type zerocopy::error::TryReadError\">TryReadError</a>&lt;NewSrc, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Maps the source value associated with the conversion error.</p>\n<p>This can help mitigate <a href=\"zerocopy/error/index.html#send-sync-and-static\" title=\"mod zerocopy::error\">issues with <code>Send</code>, <code>Sync</code> and <code>'static</code>\nbounds</a>.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>core::num::NonZeroU32;\n<span class=\"kw\">use </span>zerocopy::<span class=\"kw-2\">*</span>;\n\n<span class=\"kw\">let </span>source: [u8; <span class=\"number\">3</span>] = [<span class=\"number\">0</span>, <span class=\"number\">0</span>, <span class=\"number\">0</span>];\n\n<span class=\"comment\">// Try to read a `NonZeroU32` from `source`.\n</span><span class=\"kw\">let </span>maybe_u32: <span class=\"prelude-ty\">Result</span>&lt;NonZeroU32, TryReadError&lt;<span class=\"kw-2\">&amp;</span>[u8], NonZeroU32&gt;&gt;\n    = NonZeroU32::try_read_from_bytes(<span class=\"kw-2\">&amp;</span>source[..]);\n\n<span class=\"comment\">// Map the error's source to its size.\n</span><span class=\"kw\">let </span>maybe_u32: <span class=\"prelude-ty\">Result</span>&lt;NonZeroU32, TryReadError&lt;usize, NonZeroU32&gt;&gt; =\n    maybe_u32.map_err(|err| {\n        err.map_src(|src| src.len())\n    });</code></pre></div>\n</div></details></div></details>",0,"zerocopy::error::AlignedTryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ConvertError%3CA,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#208-217\">source</a><a href=\"#impl-Debug-for-ConvertError%3CA,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#210-216\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zerocopy::error::CastError","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ConvertError%3CA,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#224-233\">source</a><a href=\"#impl-Display-for-ConvertError%3CA,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;</h3></section></summary><div class=\"docblock\"><p>Produces a human-readable error message.</p>\n<p>The message differs between debug and release builds. When\n<code>debug_assertions</code> are enabled, this message is verbose and includes\npotentially sensitive information.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#226-232\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","zerocopy::error::CastError","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CAlignmentError%3CSrc,+Dst%3E%3E-for-ConvertError%3CAlignmentError%3CSrc,+Dst%3E,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#402-409\">source</a><a href=\"#impl-From%3CAlignmentError%3CSrc,+Dst%3E%3E-for-ConvertError%3CAlignmentError%3CSrc,+Dst%3E,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Src, Dst: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, S, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zerocopy/error/struct.AlignmentError.html\" title=\"struct zerocopy::error::AlignmentError\">AlignmentError</a>&lt;Src, Dst&gt;&gt; for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;<a class=\"struct\" href=\"zerocopy/error/struct.AlignmentError.html\" title=\"struct zerocopy::error::AlignmentError\">AlignmentError</a>&lt;Src, Dst&gt;, S, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#406-408\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: <a class=\"struct\" href=\"zerocopy/error/struct.AlignmentError.html\" title=\"struct zerocopy::error::AlignmentError\">AlignmentError</a>&lt;Src, Dst&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<AlignmentError<Src, Dst>>","zerocopy::error::CastError","zerocopy::error::TryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CConvertError%3CAlignmentError%3CSrc,+Dst%3E,+S,+V%3E%3E-for-ConvertError%3CInfallible,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#163-206\">source</a><a href=\"#impl-From%3CConvertError%3CAlignmentError%3CSrc,+Dst%3E,+S,+V%3E%3E-for-ConvertError%3CInfallible,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Src, Dst: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"zerocopy/trait.Unaligned.html\" title=\"trait zerocopy::Unaligned\">Unaligned</a>, S, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;<a class=\"struct\" href=\"zerocopy/error/struct.AlignmentError.html\" title=\"struct zerocopy::error::AlignmentError\">AlignmentError</a>&lt;Src, Dst&gt;, S, V&gt;&gt; for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>, S, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#199-205\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    err: <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;<a class=\"struct\" href=\"zerocopy/error/struct.AlignmentError.html\" title=\"struct zerocopy::error::AlignmentError\">AlignmentError</a>&lt;Src, Dst&gt;, S, V&gt;\n) -&gt; <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>, S, V&gt;</h4></section></summary><div class=\"docblock\"><p>Infallibly discards the alignment error from this <code>ConvertError</code> since\n<code>Dst</code> is unaligned.</p>\n<p>Since <a href=\"zerocopy/trait.Unaligned.html\" title=\"trait zerocopy::Unaligned\"><code>Dst: Unaligned</code></a>, it is impossible to encounter an alignment\nerror. This method permits discarding that alignment error infallibly\nand replacing it with <a href=\"https://doc.rust-lang.org/1.79.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\"><code>Infallible</code></a>.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>core::convert::Infallible;\n<span class=\"kw\">use </span>zerocopy::<span class=\"kw-2\">*</span>;\n\n<span class=\"attr\">#[derive(TryFromBytes, KnownLayout, Unaligned, Immutable)]\n#[repr(C, packed)]\n</span><span class=\"kw\">struct </span>Bools {\n    one: bool,\n    two: bool,\n    many: [bool],\n}\n\n<span class=\"kw\">impl </span>Bools {\n    <span class=\"kw\">fn </span>parse(bytes: <span class=\"kw-2\">&amp;</span>[u8]) -&gt; <span class=\"prelude-ty\">Result</span>&lt;<span class=\"kw-2\">&amp;</span>Bools, AlignedTryCastError&lt;<span class=\"kw-2\">&amp;</span>[u8], Bools&gt;&gt; {\n        <span class=\"comment\">// Since `Bools: Unaligned`, we can infallibly discard\n        // the alignment error.\n        </span>Bools::try_ref_from_bytes(bytes).map_err(Into::into)\n    }\n}</code></pre></div>\n</div></details></div></details>","From<ConvertError<AlignmentError<Src, Dst>, S, V>>","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CSizeError%3CSrc,+Dst%3E%3E-for-ConvertError%3CA,+SizeError%3CSrc,+Dst%3E,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#548-553\">source</a><a href=\"#impl-From%3CSizeError%3CSrc,+Dst%3E%3E-for-ConvertError%3CA,+SizeError%3CSrc,+Dst%3E,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Src, Dst: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zerocopy/error/struct.SizeError.html\" title=\"struct zerocopy::error::SizeError\">SizeError</a>&lt;Src, Dst&gt;&gt; for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, <a class=\"struct\" href=\"zerocopy/error/struct.SizeError.html\" title=\"struct zerocopy::error::SizeError\">SizeError</a>&lt;Src, Dst&gt;, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#550-552\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: <a class=\"struct\" href=\"zerocopy/error/struct.SizeError.html\" title=\"struct zerocopy::error::SizeError\">SizeError</a>&lt;Src, Dst&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<SizeError<Src, Dst>>","zerocopy::error::CastError","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CValidityError%3CSrc,+Dst%3E%3E-for-ConvertError%3CA,+S,+ValidityError%3CSrc,+Dst%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#656-663\">source</a><a href=\"#impl-From%3CValidityError%3CSrc,+Dst%3E%3E-for-ConvertError%3CA,+S,+ValidityError%3CSrc,+Dst%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Src, Dst: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"zerocopy/trait.TryFromBytes.html\" title=\"trait zerocopy::TryFromBytes\">TryFromBytes</a>, A, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zerocopy/error/struct.ValidityError.html\" title=\"struct zerocopy::error::ValidityError\">ValidityError</a>&lt;Src, Dst&gt;&gt; for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, <a class=\"struct\" href=\"zerocopy/error/struct.ValidityError.html\" title=\"struct zerocopy::error::ValidityError\">ValidityError</a>&lt;Src, Dst&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#660-662\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: <a class=\"struct\" href=\"zerocopy/error/struct.ValidityError.html\" title=\"struct zerocopy::error::ValidityError\">ValidityError</a>&lt;Src, Dst&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ValidityError<Src, Dst>>","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ConvertError%3CA,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#153\">source</a><a href=\"#impl-PartialEq-for-ConvertError%3CA,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#153\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/core/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","zerocopy::error::CastError","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<section id=\"impl-Eq-for-ConvertError%3CA,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#153\">source</a><a href=\"#impl-Eq-for-ConvertError%3CA,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;</h3></section>","Eq","zerocopy::error::CastError","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"],["<section id=\"impl-StructuralPartialEq-for-ConvertError%3CA,+S,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zerocopy/error.rs.html#153\">source</a><a href=\"#impl-StructuralPartialEq-for-ConvertError%3CA,+S,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, S, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;</h3></section>","StructuralPartialEq","zerocopy::error::CastError","zerocopy::error::TryCastError","zerocopy::error::TryReadError","zerocopy::error::AlignedTryCastError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()