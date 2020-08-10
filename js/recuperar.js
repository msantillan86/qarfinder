(function ($) {
    $("#btnActualizar").click(function() {
        var key = getQueryVariable("key");
        
        if (key !== undefined)
        {
            sha512($("#txtClave").val()).then(clave => {
                var settings = {
                    "url": "https://api.qarfinder.com.ar/Usuarios/" + key + "/Clave?clave=" + clave,
                    "method": "POST",
                    "timeout": 0
                };

                $(this).prop("disabled", true);
                $(this).html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Actualizando...`);
                
                $.ajax(settings).done(function (response) {
                    $("#btnActualizar").addClass("btn-success").removeClass("btn-primary");
                    $("#btnActualizar").html("Actualizado");
                })
                .fail(function(xhr, status, error) {
                    $("#btnActualizar").addClass("btn-danger").removeClass("btn-primary");
                    $("#btnActualizar").html("La clave no pudo cambiarse");
                });
            });
        }
    });

    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });

    $("#show_hide_password_repetir a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password_repetir input').attr("type") == "text"){
            $('#show_hide_password_repetir input').attr('type', 'password');
            $('#show_hide_password_repetir i').addClass( "fa-eye-slash" );
            $('#show_hide_password_repetir i').removeClass( "fa-eye" );
        }else if($('#show_hide_password_repetir input').attr("type") == "password"){
            $('#show_hide_password_repetir input').attr('type', 'text');
            $('#show_hide_password_repetir i').removeClass( "fa-eye-slash" );
            $('#show_hide_password_repetir i').addClass( "fa-eye" );
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