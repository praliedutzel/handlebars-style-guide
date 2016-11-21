// REGISTER HELPERS

function trim(str) {
    str = str.toString();
    str = str.replace(/\s+/g, ' ');

    str = jQuery.trim(str);

    return str;
}


Handlebars.registerHelper('match', function(str, arr, opts) {
    arr = arr.split('||');

    var i;
    var isValid;

    for ( i = 0; i < arr.length; i++ ) {
        x = arr[i];
        x= trim(x);

        if ( str === x ) {
            isValid = true;
        }
    }

    if ( isValid ) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
});