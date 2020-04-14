let current = 0;

let data = [
    {
        photo: "./assets/gallery_1.jpg",
        title: "Tromsø",
        description: "Byen sett fra toppen av Storsteinen."
    },
    {
        photo: "./assets/gallery_2.jpg",
        title: "Trondheim",
        description: "Tradisjonelle hus ved siden av Nidelva." 
    }
];

function load_photo(id) {
    current = id;
    $('#photo').css("background-image", "url("+data[id].photo+")");
    $('#title').text(data[id].title);
    $('#text').text(data[id].description);
}

load_photo(current);