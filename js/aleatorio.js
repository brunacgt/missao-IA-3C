const nomes = ["Bruna" , "Beatriz" , "Vitor" , "Lara" , "Heverton" , "José"];

export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.lenght);
  return lista[posicao];
}

export const nome = aleatorio(nomes)
