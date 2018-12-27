function apiCallHandler(apiURL, callback) {

    function successFun(response, textStatus, jqxhr) {
        console.info('API CALL SUCCESS: ' + (response ? ' * RESPONSE: ' + JSON.stringify(response) : "") + (textStatus ? ' - textStatus: ' + textStatus : ""));
        callback(response);
    }

    function errorFun(jqxhr, textStatus, errorThrown) {
        console.warn('API CALL FAILURE: ' + (errorThrown ? ' - errorThrown: ' + response : "") + (textStatus ? ' - textStatus: ' + textStatus : ""));
        callback(textStatus);
    }

    jqxhr = $.ajax({
        type: 'GET',
        url: apiURL,
        dataType: 'json'
    }).done(successFun)
        .fail(errorFun);
}

