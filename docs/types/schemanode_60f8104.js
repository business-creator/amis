amis.define('docs/types/schemanode.md', function(require, exports, module, define) {

  module.exports = {
    "title": "SchemaNode",
    "description": null,
    "type": 0,
    "group": "🔧 类型",
    "menuName": "SchemaNode 配置节点",
    "icon": null,
    "order": 19,
    "html": "<p>SchemaNode 是指每一个 amis 配置节点的类型，支持<code>模板</code>、<code>Schema（配置）</code>以及<code>SchemaArray（配置数组）</code>三种类型</p>\n<h2><a class=\"anchor\" name=\"%E6%A8%A1%E6%9D%BF\" href=\"#%E6%A8%A1%E6%9D%BF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>模板</h2><pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"text\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"World\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello ${text}!\"</span> <span class=\"token comment\">// 输出 Hello World!</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>上例中的<code>body</code>属性所配置的属性值<code>&quot;Hello ${text}!&quot;</code>就是一个模板</p>\n<p>更多使用说明见 <a href=\"../concepts/template\">模板文档</a></p>\n<h2><a class=\"anchor\" name=\"schema-%E9%85%8D%E7%BD%AE\" href=\"#schema-%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Schema 配置</h2><p><code>Schema</code>，即<strong>组件的 JSON 配置</strong></p>\n<p><strong>它至少需要一个<code>type</code>字段，用以标识当前<code>Schema</code>的类型。</strong></p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"text\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"World\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"tpl\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"tpl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello ${text}!\"</span> <span class=\"token comment\">// 输出 Hello World!</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p><code>type</code>, <code>data</code>, <code>body</code>这三个字段组成的<code>JSON</code>对象，便是一个<code>Schema</code>，它由<code>type</code>字段作为标识，指明当前 <code>Schema</code> 是 <code>Page</code>组件节点</p>\n<p>而通过查看 <a href=\"../components/page\">Page 组件属性表</a> 可知，<code>body</code>属性类型是<code>SchemaNode</code>，即可以在<code>body</code>中，嵌套配置其他组件。我们在这里，用<code>type</code>和<code>tpl</code> JSON 对象，配置了 <code>Tpl</code> 组件，渲染了一段模板字符串。</p>\n<blockquote>\n<p>amis 可以通过该方法，在<code>Schema</code>中嵌套配置其他<code>SchemaNode</code>，从而搭建非常复杂的页面应用。</p>\n</blockquote>\n<h3><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E6%98%BE%E9%9A%90\" href=\"#%E9%85%8D%E7%BD%AE%E6%98%BE%E9%9A%90\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置显隐</h3><p>所有的<code>Schema</code>类型都可以通过配置<code>visible</code>或<code>hidden</code>，<code>visibleOn</code>或<code>hiddenOn</code>来控制组件的显隐，下面是两种方式</p>\n<h5><a class=\"anchor\" name=\"%E9%9D%99%E6%80%81%E9%85%8D%E7%BD%AE\" href=\"#%E9%9D%99%E6%80%81%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>静态配置</h5><p>通过配置<code>&quot;hidden&quot;: true</code>或者<code>&quot;visible&quot;: false</code>来隐藏组件</p>\n<div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\" scope=\"body\">[\n    {\n        \"type\": \"form\",\n        \"controls\": [\n            {\n                \"type\": \"text\",\n                \"label\": \"姓名\",\n                \"name\": \"name\"\n            }\n        ]\n    },\n    {\n        \"type\": \"form\",\n        \"hidden\": true,\n        \"controls\": [\n            {\n                \"type\": \"text\",\n                \"label\": \"姓名\",\n                \"name\": \"name\"\n            }\n        ]\n    }\n]\n</script></div>\n<p>下面那个表单被隐藏了。</p>\n<h5><a class=\"anchor\" name=\"%E9%80%9A%E8%BF%87%E6%9D%A1%E4%BB%B6%E9%85%8D%E7%BD%AE%E6%98%BE%E9%9A%90\" href=\"#%E9%80%9A%E8%BF%87%E6%9D%A1%E4%BB%B6%E9%85%8D%E7%BD%AE%E6%98%BE%E9%9A%90\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>通过条件配置显隐</h5><p>你也通过 <a href=\"../concepts/expression\">表达式</a> 配置<code>hiddenOn</code>，来实现在某个条件下禁用当前组件.</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n  \"type\": \"form\",\n  \"controls\": [\n    {\n      \"type\": \"number\",\n      \"label\": \"数量\",\n      \"name\": \"number\",\n      \"value\": 0,\n      \"description\": \"调整数量大小查看效果吧！\"\n    },\n    {\n      \"type\": \"text\",\n      \"label\": \"文本\",\n      \"name\": \"text\",\n      \"hiddenOn\": \"data.number > 1\",\n      \"description\": \"当数量大于1的时候，该文本框会隐藏\"\n    }\n  ]\n}\n</script></div>\n<p>为了方便说明，我们在 form 中演示了条件显隐，实际上，只要当前数据域中数据有变化，都可以实现组件显隐</p>\n<blockquote>\n<p><code>visible</code>和<code>hidden</code>，<code>visibleOn</code>和<code>hiddenOn</code>除了判断逻辑相反以外，没有任何区别</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"schemaarray-%E9%85%8D%E7%BD%AE%E6%95%B0%E7%BB%84\" href=\"#schemaarray-%E9%85%8D%E7%BD%AE%E6%95%B0%E7%BB%84\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SchemaArray 配置数组</h2><p>明白了何为<code>Schema</code>之后，你就会很轻松理解<code>SchemaArray</code>，它其实就是支持通过数组配置<code>Schema</code>，从而在某一节点层级下，配置多个组件</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"amis\"</span>\n      <span class=\"token property\">\"age\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span><span class=\"token string\">\"tpl\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"tpl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"my name is ${name}\"</span> <span class=\"token comment\">// 输出 Hello World!</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span><span class=\"token string\">\"tpl\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"tpl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"I am ${age} years old!\"</span> <span class=\"token comment\">// 输出 Hello World!</span>\n      <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>非常容易看出来，我们给<code>body</code>属性，配置了数组结构的<code>Schema</code>，从而实现在<code>body</code>下，渲染两个<code>tpl</code>，来输入两段文字的效果</p>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "模板",
          "fragment": "%E6%A8%A1%E6%9D%BF",
          "fullPath": "#%E6%A8%A1%E6%9D%BF",
          "level": 2
        },
        {
          "label": "Schema 配置",
          "fragment": "schema-%E9%85%8D%E7%BD%AE",
          "fullPath": "#schema-%E9%85%8D%E7%BD%AE",
          "level": 2,
          "children": [
            {
              "label": "配置显隐",
              "fragment": "%E9%85%8D%E7%BD%AE%E6%98%BE%E9%9A%90",
              "fullPath": "#%E9%85%8D%E7%BD%AE%E6%98%BE%E9%9A%90",
              "level": 3
            }
          ]
        },
        {
          "label": "SchemaArray 配置数组",
          "fragment": "schemaarray-%E9%85%8D%E7%BD%AE%E6%95%B0%E7%BB%84",
          "fullPath": "#schemaarray-%E9%85%8D%E7%BD%AE%E6%95%B0%E7%BB%84",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});