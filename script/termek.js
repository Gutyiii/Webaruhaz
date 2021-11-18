class Termek {
    constructor(node, adat, index) {
        this.node = node;
        this.nev = this.node.children(".nev");
        this.leiras = this.node.children(".leiras");
        this.ar = this.node.children(".ar");
        this.adat = adat;
        this.adat.index = index;
    }

    sajatAdatok(ertek) {
        this.nev.html(ertek.nev);
        this.kep.attr("src", ertek.kep);
        this.leiras.html(ertek.leiras);
        this.ar.html(ertek.ar + " Ft");
    }

}

class TermekVasarlas extends Termek {
    constructor(node, adat, index) {
        super(node, adat, index)
        this.kep = this.node.children(".kep");
        this.sajatAdatok(this.adat);
        this.node.children("button").on("click", () => {
            this.KattintasTrigger();
        });
    };
    KattintasTrigger() {
        let esemeny = new CustomEvent("kosarhozad", { detail: this.adat });
        window.dispatchEvent(esemeny);
    }
}

class TermekAdmin extends Termek {
    constructor(node, adat, index) {
        super(node, adat, index)
        this.kep = this.node.children(".kep").children("img");
        this.sajatAdatok(this.adat);
        this.node.children(".torolgomb").on("click", () => {
            this.KattintasTriggerTorol();
        });
        this.node.children(".modositgomb").on("click", () => {
            this.KattintasTriggerModosit();
        });
    };
    KattintasTriggerTorol() {
        let esemeny = new CustomEvent("atorolgomb", { detail: this.adat });
        window.dispatchEvent(esemeny);
    }
    KattintasTriggerModosit() {
        let esemeny = new CustomEvent("amodositgomb", { detail: this.adat });
        window.dispatchEvent(esemeny);
    }
}