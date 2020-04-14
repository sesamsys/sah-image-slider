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
    },
    {
        photo: "./assets/gallery_4.jpg",
        title: "Oslo",
        description: "Operahuset er den mest ikoniske bygningen av hovedstaden." 
    }
];

let load_photo = (id) => {
    current = id;
    $('#photo').css("background-image", "url("+data[id].photo+")");
    $('#title').text(data[id].title);
    $('#text').text(data[id].description);
}

load_photo(current);

$('#arrow-left').click(() => {
    if (current === 0) {
        current = data.length-1;
    } else {
        current--;
    }
    load_photo(current);
});

$('#arrow-right').click(() => {
    if (current === data.length-1) {
        current = 0
    } else {
        current++;
    }
    load_photo(current);
});

let load_thumbnails = () => {
    for (let index = 0; index < data.length; index++) {
            $('#navigation').append('<div id="thumbnail'+index+'"></div>');
            $('#thumbnail'+index).css("background-image", "url("+data[index].photo+")");
        };
        
    }

load_thumbnails();