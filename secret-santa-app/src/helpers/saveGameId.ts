interface Tokens {
  gameId: string;

}

export default function saveGameId(data: Tokens) {
  sessionStorage.setItem("gameId", data.gameId);
}
