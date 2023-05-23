




function search(){
    let searchValue = document.getElementById("searchField").value.toLowerCase();
    let artist_ = document.getElementById(searchValue);
    let artistsReset = document.getElementsByClassName("artists");
    async function musicData(){
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue);
        const jsonData = await response.json();
        console.log(jsonData);

        // artist reset
        for (const artist of artistsReset) {
            artist.classList.add("d-none");
        }
        artist_.classList.remove("d-none");
        
        // artist imgs
        let artistRow = document.getElementById(searchValue + "Section");
        for(i = 0; i < jsonData.data.length; i++){
            let card = document.createElement("div");
            let title = document.createElement("p");
            let imgArtist = document.createElement("img");
        
            imgArtist.classList.add("p-1");
            imgArtist.src = jsonData.data[i].album.cover_medium;
            title.innerText = jsonData.data[i].album.title;

            artistRow.appendChild(card);
            card.appendChild(imgArtist);
            card.appendChild(title);
        }
    }
    musicData();
}
