var front = function(source, target, template) {
  var data = Array.isArray(source) ? source : [source];
  var html = "";
  data.forEach(function(el) {
    html += template.replace(/\{\{(\w+)\}\}/g, function($, $1) {
      return ($1 in el) ? el[$1] : $;
    });
  });
  target.innerHTML = html;
};