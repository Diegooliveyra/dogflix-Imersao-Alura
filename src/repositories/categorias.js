import config from '../config';

const URL_CATEGORIES = `${config.URLBACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
};
