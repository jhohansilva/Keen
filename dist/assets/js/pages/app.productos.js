!function(t){"use strict";var o=function(){this.$param=get_param("ref")};o.prototype.init=function(){t.ajax({method:"POST",data:null,url:"http://localhost/keen/inc/clients/client.productos.php"}).done(function(t){console.log(t)})};t.Productos=new o,t.Productos.Constructor=o}(window.jQuery),function(t){"use strict";window.jQuery.Productos.init()}();