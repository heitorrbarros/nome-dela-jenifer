class Tinder {
    find(id) {
        return { name: 'Jenifer', namorada: false };
    }
}

const app = new Tinder();
function nomeDelaJenifer() {
    var chances = 0
    var mina = {}

    mina = app.find(Math.random());
    if (mina.name === 'Jenifer') {
        if (mina.namorada != true) {
            chances = Math.random() * 100

            if (chances > 50)
                return 'Jenifer é sua namorada.';
            else
                return 'Jenifer não deu match, campeão :(';
        }
    }
}

const ehMinhaNamorada = nomeDelaJenifer();
console.log(ehMinhaNamorada);
