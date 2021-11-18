$(function () {

    const tomb = [];
    const kisKosar = new Kosar();

    function adatokBetoltese() {
        $.ajax({
            url: "forras/termekek.json",
            success: function (result) {
                result.forEach((value) => {
                    tomb.push(value);
                });
                adatokMegjelenites();
                //console.log(tomb);
            }});
    }
    adatokBetoltese();

    function adatokMegjelenites() {
        const szuloElem = $("#allomany");
        const sablon = $(".termek");
        tomb.forEach(function (elem, index) {
            const termek = sablon.clone().appendTo(szuloElem);
            const ujTermek = new TermekVasarlas(termek, elem, index);
        });
        sablon.remove();
    }

    $(window).on("kosarhozad", (esemeny) => {
        let aktTermek = esemeny.detail;
        kisKosar.setKoarhozAdd(aktTermek);
       
    });
});

