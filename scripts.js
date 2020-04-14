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
    },
    {
        photo: "./assets/gallery_3.jpg",
        title: "Bergen",
        description: "Bergen dekket av skyer som vanlig." 
    }
];

function load_photo(id) {
    current = id;
    $('#photo').css("background-image", "url("+data[id].photo+")");
    $('#title').text(data[id].title);
    $('#text').text(data[id].description);
}

load_photo(current);

$('#arrow-left').click(function left(){
    if (current === 0) {
        current = data.length-1;
    } else {
        current--;
    }
    load_photo(current);
});

$('#arrow-right').click(function right(){
    if (current === data.length-1) {
        current = 0
    } else {
        current++;
    }
    load_photo(current);
});