export function $_GET(param = null) {
    var vars = {};
    var keys;
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi,
        function (m, key, value) {
            vars[key] = value !== undefined ? value : '';
            keys = key;
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }

    if(param == null){
        return keys;
    }else{
        return vars;
    }
}