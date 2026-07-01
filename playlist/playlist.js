const myPlaylist = document.querySelector("#my-playlist");
const addButton = document.querySelector("#addButton");
const completeButton = document.querySelector("#completeButton");
const inputContainer = document.querySelector(".input-container");

const releaseDate = document.querySelector("#release-date");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const album = document.querySelector("#album");

addButton.addEventListener("click", () => {

    if (title.value === "" || artist.value === "") {
    alert("노래 제목과 아티스트는 필수 입력 사항입니다.");
    const focusInput = title.value === "" ? title : artist;
    focusInput.focus();
    return;
  }

  album.value ||= "——";
  const date = releaseDate.value || "——";

  myPlaylist.insertAdjacentHTML("afterbegin", `<tr><td>${title.value}</td><td>${artist.value}</td><td>${album.value}</td><td>${date}</td></tr>`);

  title.value = "";
  artist.value = "";
  album.value = "";
  releaseDate.value = "";
});

completeButton.addEventListener("click", () => {

    if (myPlaylist.children.length === 0) {
    alert("추가된 노래가 없습니다. 최소 1개 이상은 추가해주세요.");
    return;
  }

  inputContainer.outerHTML=`<h3>나만의 플레이리스트가 완성되었습니다!👏🎵</h3>`;
  completeButton.remove();
});