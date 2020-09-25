const hljs = require('highlight.js')
const markdown = require('markdown-it');

function markLoader(src) {
  const md = markdown({
    html: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre><code class="hljs">${hljs.highlight(lang, str).value}</code></pre>`
        } catch (__) {}
      }

      return '' // 使用额外的默认转义
    }
  });
  const html = `<div class="md">${md.render(src)}</div>`;

  return (html)
}
module.exports = markLoader;
