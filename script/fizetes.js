$(function () {
    const kosar = new Kosar();
    kosar.getKosar();
    let osszeg=0;
    for (let index = 0; index < kosar.kosar.length; index++) {
       osszeg+=kosar.kosar[index].ar;
    }
    $("#osszegezes").append("<p style='text-align:left;'>A végösszeg: "+osszeg+" Ft</p>");
    $("#osszegezes").append("<input type='button' value='Fizetés'>");
});