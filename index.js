class Tinder {
  find(id) {
    const usuaria = { id, name: 'Jenifer', namorada: false }
    return usuaria;
  }
}

const app = new Tinder();
function nomeDelaJenifer() {
  let chances = 0;
  let mina = {};
  mina = app.find(Math.random());
  if (mina.name === 'Jenifer') {
    if (mina.namorada !== true) {
      chances = Math.random() * 100;
      if (chances > 50) return 'Jenifer é sua namorada.';
    }
  }
  return 'Jenifer não deu match, campeão :(';
}

const ehMinhaNamorada = nomeDelaJenifer();
console.log(ehMinhaNamorada);
