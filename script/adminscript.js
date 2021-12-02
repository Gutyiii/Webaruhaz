$(function () {

    const tomb = [];
    const myAjax = new MyAjax();
    let apiVegpont = "http://localhost:3000/termekek";

    myAjax.adatbeolvas(apiVegpont, tomb, adatokMegjelenites);

    function adatokMegjelenites() {
        const szuloElem = $("#allomany");
        const sablon = $("thead .termek");
        szuloElem.empty();
        sablon.show();
        tomb.forEach(function (elem, index) {
            const termek = sablon.clone().appendTo(szuloElem);
            const ujTermek = new TermekAdmin(termek, elem, index);
        });
        sablon.hide(); //remove helyett
    }

    $(window).on("atorolgomb", (esemeny) => {
        let aktTermek = esemeny.detail.id;
        myAjax.adattorles(apiVegpont, aktTermek);
    });

    $(".ujAdatFelv").on("click", () => {
        let ujAdat = {
            "nev": $("#bekertNev").val(),
            "kep": $("#bekertKep").val(),
            "leiras": $("#bekertLeiras").val(),
            "ar": $("#bekertAr").val()
        };
        myAjax.adatkuldes(apiVegpont, ujAdat);
    });
    
    $(window).on("amodositgomb", (esemeny) => {
        let aktTermek = esemeny.detail.id;
        let ujAdat = {
            "nev": $("#bekertNev").val(),
            "kep": $("#bekertKep").val(),
            "leiras": $("#bekertLeiras").val(),
            "ar": $("#bekertAr").val()
        };
        myAjax.adatmodosit(apiVegpont, ujAdat, aktTermek);
    });
});

