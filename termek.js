class Termek {
    constructor(node, adat, index) {
        this.node = node;
        this.nev = this.node.children("h2");
        this.kep = this.node.children("img");
        this.leiras = this.node.children("h6");
        this.ar = this.node.children("p");
        this.adat = adat;
        this.sajatAdatok(this.adat);
        this.adat.index = index;
        this.node.children("button").on("click", () => {
            this.KattintasTrigger();
        });
    }

    sajatAdatok(ertek) {
        this.nev.html(ertek.nev);
        this.kep.attr("src", ertek.kep);
        this.leiras.html(ertek.leiras);
        this.ar.html(ertek.ar + " Ft");
    }

    KattintasTrigger() {
        let esemeny = new CustomEvent("kosarhozad", {detail: this.adat});
        window.dispatchEvent(esemeny);
    }
}


