re
(function ($) {
    $("#btnActualizar").click(function() {
        var parametros = new URLSearchParams(window.location.search)
        var key = parametros.get("key");

        if (key !== undefined)
        {
            var settings = {
                "url": "https://api.qarfinder.com.ar/Usuarios/" + key + "/Clave?clave=" + contraseña,
                "method": "POST",
                "timeout": 0,
                "headers": {
                "accept": "*/*",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
                "Cookie": "__cfduid=d2f61c42bfc4db7eee1ea58135531830e1595650261"
                },
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);
            });

        }
    });
})(jQuery);