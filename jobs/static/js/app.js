// Test
function formatMoney(n, v, d, t, c ) {
  var v = isNaN(v = Math.abs(v)) ? 2 : v,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
    c = c == undefined ? "$ " : c

  return s + c + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (v ? d + Math.abs(n - i).toFixed(v).slice(2) : "");
};

var els = document.querySelectorAll('p.currency');
for (var i=0; i< els.length; i++) {
  els[i].innerText = formatMoney(els[i].innerText, 0)
}
w3CodeColor();
