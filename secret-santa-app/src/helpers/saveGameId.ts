interface Tokens {
  gameId: string;

}

export default function saveGameId(data: Tokens) {
  sessionStorage.setItem("id", data.gameId);
}
// export default function localsaveGameId(data: Tokens) {
//   localStorage.setItem("localgameId", data);
// }
