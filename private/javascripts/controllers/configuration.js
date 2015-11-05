"use strict";
module.exports = /*@ngInject*/ ($scope, $socket) => {
    //$scope.ssidList = [{"ap":"wifine","zone":"JPN","company":"Wifin"},{"ap":"NintendoSpotPass1","zone":"EUR","company":"Nintendo"},{"ap":"NintendoSpotPass2","zone":"EUR","company":"Nintendo"},{"ap":"attwifi","zone":"USA","company":"AT&T"},{"ap":"SIMON WiFi","zone":"USA","company":"Simon Malls"},{"ap":"noasp01","zone":"USA","company":"NOA (Nintendo events)"},{"ap":"noasp02","zone":"USA","company":"NOA (Nintendo events)"},{"ap":"Telekom","zone":"EUR (Germany)","company":"Telekom"},{"ap":"Telekom_ICE","zone":"EUR (Germany)","company":"Telekom"},{"ap":"Guglielmo","zone":"IT","company":"Guglielmo"},{"ap":"ASTRO","zone":"IT","company":"Guglielmo"},{"ap":"Banca Sella WiFi Clienti","zone":"IT","company":"Guglielmo"},{"ap":"confindustria","zone":"IT","company":"Guglielmo"},{"ap":"Grand","zone":"IT","company":"Guglielmo"},{"ap":"Guglielmo Rimini WiFi","zone":"IT","company":"Guglielmo"},{"ap":"GuglielmoDallaRosaPrati","zone":"IT","company":"Guglielmo"},{"ap":"Hotels","zone":"IT","company":"Guglielmo"},{"ap":"L.Bettolo","zone":"IT","company":"Guglielmo"},{"ap":"LecceWireless","zone":"IT","company":"Guglielmo"},{"ap":"P.zza Nicoloso","zone":"IT","company":"Guglielmo"},{"ap":"PortoDiTrieste","zone":"IT","company":"Guglielmo"},{"ap":"Comune-Na Piazze WIFI","zone":"IT","company":"Guglielmo"},{"ap":"WiFi_Stampa","zone":"IT","company":"Guglielmo"},{"ap":"KPN","zone":"EUR (NL)","company":"KPN"},{"ap":"METEOR","zone":"FR","company":"Meteo"},{"ap":"MCDONALDS","zone":"FR","company":"Meteo"},{"ap":"AREA_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"PATaPAIN_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"CASINO_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"all_seasons_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"ADAGIO_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"PULLMAN_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"Best_Western_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"CreditAgricole_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"IBIS_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"MERCURE_by_METEOR","zone":"FR","company":"Meteo"},{"ap":"Telefonica","zone":"ES","company":"Telefonic"},{"ap":"GOWEXWiFi","zone":"ES","company":"Gowex"},{"ap":"OurenseWiFi","zone":"ES","company":"Gowex"},{"ap":"RED_LIBRE_AVILES_WILOC","zone":"ES","company":"Gowex"},{"ap":"GIJON WIFI","zone":"ES","company":"Gowex"},{"ap":"01MIERESWIFI","zone":"ES","company":"Gowex"},{"ap":"01EibarWifi","zone":"ES","company":"Gowex"},{"ap":"WIFIBUR","zone":"ES","company":"Gowex"},{"ap":"ValladolidWiFi","zone":"ES","company":"Gowex"},{"ap":"01PuertoDelRosarioWiFi","zone":"ES","company":"Gowex"},{"ap":"PT-WIFI","zone":"PT","company":"PTWiF"},{"ap":"FON_ZON_FREE_INTERNET","zone":"PT","company":"ZON"},{"ap":"WiFi Zone - The Cloud","zone":"EUR (GB)","company":"The Cloud"},{"ap":"Mycloud","zone":"EUR (GB)","company":"The Cloud"},{"ap":"WLAN Zone - The Cloud","zone":"EUR (GB)","company":"The Cloud"},{"ap":"_The Cloud","zone":"EUR (GB)","company":"The Cloud"},{"ap":"FREESPOT","zone":"JPN","company":"FREESPOT"},{"ap":"TSUTAYA","zone":"JPN","company":"TSUTAYA"},{"ap":"Wayport_Access","zone":"USA","company":"McDonalds"},{"ap":"Boingo Hotspot","zone":"USA","company":"Boingo"},{"ap":"ibahn","zone":"USA","company":"iBAHN"},{"ap":"BELLWIFI@MCDONALDS","zone":"USA (Canada)","company":"Bell"},{"ap":"free-hotspot.com","zone":"EUR","company":"free-hotspot.com"},{"ap":"Bestbuy","zone":"USA","company":"Bestbuy"}];
    $scope.ssidList = [];
    $socket.emit('ap-names', (ap) => {
        $scope.$apply(() => {
            $scope.ssidList = ap;
        });
    });
};