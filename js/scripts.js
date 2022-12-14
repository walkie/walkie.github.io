function mailTo(address) {
  return '<a href="mailto:' + address + '">' + address + '</a>';
}

function setEmail() {
  // try to prevent spam without annoying users...
  var user = '\u0065\u0072\u0069\u0063';
  var domain = '\u0040\u0077\u0061\u006c\u006b\u0069\u006e\u0067\u0073\u0068\u0061\u0077\u002e\u006e\u0065\u0074';
  $('.my-email').html(mailTo(user + domain));
}

function toggleAbstract(key) {
  $('.pub-abstract.'+key).slideToggle();
}
