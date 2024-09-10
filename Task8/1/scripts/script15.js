function setCookie(cookieName, cookieValue, expirePerMonths){
    if(expirePerMonths){//Value ==> Persistant
        var today = new Date();
        today.setMonth( today.getMonth()+ expirePerMonths )
        document.cookie = cookieName+"="+cookieValue+";expires="+today;
    }else{//undefined ==> session
        document.cookie = cookieName+"="+cookieValue;
    }
}

function getCookie(cookieName) {
    var assArray = GetAllCookies()
    return assArray[cookieName]
}

function GetAllCookies(){
    var assArray = [];
    var CookieArray = document.cookie.split("; ");
    for(var i = 0; i< CookieArray.length; i++){
        var key = CookieArray[i].split("=")[0];
        var val = CookieArray[i].split("=")[1];
        assArray[key] = val;
    }
    return assArray;
}

function deleteCookie(key){
    var today = new Date();
    today.setMonth( today.getMonth() - 10 );
    document.cookie = key+"=;expires="+today;
}

function hasCookie(cookieName) {
    var assArray = GetAllCookies()
    return cookieName in assArray
}
