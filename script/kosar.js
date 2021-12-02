class Kosar {
    constructor() {
        if ((typeof (Storage) !== "undefined")) {
            this.kosar = [];
            let teliKosar = JSON.parse(localStorage.getItem("kosarban"));
            for (let elem in teliKosar) {
                this.kosar.push(teliKosar[elem]);
                this.megjelenit();
            }
        } else {
            this.kosar = [];
        }

    }

    getKosar() {
        for (const elem in this.kosar) {
            ;
            console.log(this.kosar[elem]);
            $("#kosar").append(this.kosar[elem]);
        }
    }

    setKoarhozAdd(elem) {
        this.kosar.push(elem);
        this.megjelenit();
        localStorage.setItem("kosarban", JSON.stringify(this.kosar));
    }

    megjelenit() {
        let tartalom = 0;
        //console.log(this.kosar);
        $("#kosar").empty();
        $("#kosar").append("<table>");
        let elem = "<tr id='fejlec'><th>Név:</th><th>Kep:</th><th>Leírás:</th><th>Ár:</th><th>Valamiért index:</th><th>Törlés:</th></tr>";
        this.kosar.forEach((value, index) => {
            for (let item in value) {
                elem += "<td>" + value[item] + "</td>";
                tartalom++;
            }
            elem += "<td>" + "<button class='torol' data-id='" + index + "'>Töröl</button>" + "</td>";
            elem += "</tr>";
        });
        $("table").append(elem);
        $(".torol").on("click", (event) => {
            let aktTermek = $(event.target).attr("data-id");
            this.kosar.splice(aktTermek, 1);
            localStorage.setItem("kosarban", JSON.stringify(this.kosar));
            this.megjelenit();
            tartalom--;
            if (tartalom == 0) {
                console.log(tartalom);
                $("#kosar").empty();
            }
        });
    }
}

