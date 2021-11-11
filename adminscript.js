$(function () {

    const tomb = [];
    const kisKosar = new Kosar();

    function adatokBetoltese() {
        $.ajax({
            url: "termekek.json",
            success: function (result) {
                result.forEach((value) => {
                    tomb.push(value);
                });
                adatokMegjelenites();
                console.log(tomb);
            }});
    }
    adatokBetoltese();

    function adatokMegjelenites() {
        const szuloElem = $("#tablazat");
        const sablon = $(".tabla");
        tomb.forEach(function (elem, index) {
            const termek = sablon.clone().appendTo(szuloElem);
            const ujTermek = new Termek(termek, elem, index);
        });
        sablon.remove();
    }

    $(window).on("kosarhozad", (esemeny) => {
        let aktTermek = esemeny.detail;
        kisKosar.setKoarhozAdd(aktTermek);
//        kisKosar.torol();
    });
});

