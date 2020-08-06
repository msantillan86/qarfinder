(function ($) {
    $("#btnActualizar").click(function() {
        var key = getQueryVariable("key");
        
        if (key !== undefined)
        {
            sha512($("#txtClave").val()).then(clave => {
                console.log(key,clave);
                var settings = {
                    "url": "https://api.qarfinder.com.ar/Usuarios/" + key + "/Clave?clave=" + clave,
                    "method": "POST",
                    "timeout": 0
                };
                
                $.ajax(settings).done(function (response) {
                    console.log(response);
                });
            });
        }
    });
})(jQuery);

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
      return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    });
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}