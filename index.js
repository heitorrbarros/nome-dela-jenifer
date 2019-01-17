class Tinder {
    find(id) {
        return { name: 'Jenifer', namorada: false };
    }
}

const app = new Tinder();
function nomeDelaJenifer() {
    var chances = 0
    var poderiaSer = true
    var mina = {}

    mina = app.find(Math.random());
    if (mina.name === 'Jenifer') {
        if (mina.namorada != true) {
            chances = Math.random() * 100

            if (chances > 50)
                console.log('Jenifer é sua namorada.');
            else
                console.log('Jenifer não é sua namorada');
        }
    }
}

nomeDelaJenifer();