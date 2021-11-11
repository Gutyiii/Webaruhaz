class Kosar {
    constructor() {
        this.kosar = [];
    }

    setKoarhozAdd(elem) {
        this.kosar.push(elem);
        this.megjelenit();
    }

    megjelenit() {
        console.log(this.kosar);
        $("#kosar").empty();
        $("#kosar").append("<table>");
        let elem = "<tr id='fejlec'><th>Név:</th><th>Kep:</th><th>Leírás:</th><th>Ár:</th><th>Valamiért index:</th><th>Törlés:</th></tr>";
        this.kosar.forEach((value) => {
            for (let item in value) {
                elem += "<td>" + value[item] + "</td>";
            }
            elem += "<td>" + "<button class='torol' data-id='0'>Töröl</button>" + "</td>";
            elem += "</tr>";
        });
        $("table").append(elem);
        $(".torol").on("click", () => this.torolseged());
    }

    torolseged() {
        let aktTermek = $(this).attr("data-id");
        this.kosar.splice(aktTermek, 1);
        this.megjelenit();
    }
}

