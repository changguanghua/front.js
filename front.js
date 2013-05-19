var front = function(source, target, template) {
  var data = Array.isArray(source) ? source : [source];
  var html = "";

  data.forEach(function(el) {
    var tmpl = template.replace(/@if\{\{(\w+)\}\}([\s\S]+?)(@else([\s\S]+?))?@endif/g, function($, $1, $2, $3, $4) {
      return el[$1] ? $2 : ($3 ? $4 : "");
    });

    html += tmpl.replace(/\{\{(\w+)\}\}/g, function($, $1) {
      return ($1 in el) ? el[$1] : $;
    });
  });

  target.innerHTML = html;
};