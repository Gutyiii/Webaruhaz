$(function () {

    const tomb = [];
    const kisKosar = new Kosar();
    const myAjax = new MyAjax();
    let apiVegpont = "http://localhost:3000/termekek";

    $("#kmezo").on("keyup", () => {
        let apiVegpont = "http://localhost:3000/termekek";
        let kereses = "?q=";
        let betu = $("input").val();
        apiVegpont += kereses + betu;
        console.log(apiVegpont);
        myAjax.adatbeolvas(apiVegpont, tomb, adatokMegjelenites);
    });

    $("#rendezes").on("change", () => {
        let apiVegpont = "http://localhost:3000/termekek";
        switch ($("#rendezes").val()) {
            case "alap":
                console.log(apiVegpont);
                myAjax.adatbeolvas(apiVegpont, tomb, adatokMegjelenites);
                kereses="";
            case "forditott":
                let kereses = "?_sort=nev&_order=desc";
                apiVegpont += kereses;
                console.log(apiVegpont);
                myAjax.adatbeolvas(apiVegpont, tomb, adatokMegjelenites);
            
        }

    });


    myAjax.adatbeolvas(apiVegpont, tomb, adatokMegjelenites);

    function adatokMegjelenites() {
        const szuloElem = $("#allomany");
        const sablon = $("footer .termek");
        szuloElem.empty();
        sablon.show();
        tomb.forEach(function (elem, index) {
            const termek = sablon.clone().appendTo(szuloElem);
            const ujTermek = new TermekVasarlas(termek, elem, index);
        });
        sablon.hide(); //remove helyett
    }

    $(window).on("kosarhozad", (esemeny) => {
        let aktTermek = esemeny.detail;
        kisKosar.setKoarhozAdd(aktTermek);

    });
});

