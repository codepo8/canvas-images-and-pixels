(function(){
  var s = document.querySelector('script');
  var pre = document.createElement('ol');
  pre.className = 'code';
  var code = s.innerHTML.replace(/</g,'&lt;');
  var lines = code.split(/\n/);
  lines.shift();
  lines.pop();
  lines.forEach(function(line,i){
    if (line.indexOf('!#') !== -1) {
      lines[i] = '<strong>'+lines[i].replace('//!#','')+'</strong>';
    }
  });
  var out = '<li>';
  out += lines.join('</li><li>');
  out += '</li>';
  pre.innerHTML = out;
  s.parentNode.insertBefore(pre,s);
  if (parent.frames.length > 0) {
    document.querySelector('p').style.display = 'none';
  }
})();

