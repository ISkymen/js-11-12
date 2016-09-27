/*jcarousel*/
$(function() {
  $('div.my_jcarousel').my_jcarousel();
});


(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
        + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();


/*Template*/
$(function() {
  var html = $('#myTemplate').html();

  var data = {
    fullName: "Гончаров Артем Валерьевич",
    profession: "Фрилансер, веб-разработчик",
    answers:[
      {answer: "повышения навыков веб-разработки"},
      {answer: "улучшения технического английского"},
      {answer: "приобритения нового жизненного опыта"},
    ],
    phoneNumber: "+38 063 293-00-93",
  };

  var content = tmpl(html, data);

  $('.wrapper').append(content);

})

