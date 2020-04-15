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

let load_thumbnails = () => {
    data.forEach((item, index) => {
        $('#navigation').append('<div id="thumbnail'+index+'" data-number="'+index+'"></div>');
        $('[id^=thumbnail][data-number="'+index+'"]').css("background-image", "url("+item.photo+")");
    });
};

load_thumbnails();

let load_photo = (id) => {
    current = id;
    $('#photo').css("background-image", "url("+data[id].photo+")");
    $('#title').text(data[id].title);
    $('#text').text(data[id].description);
    $('[id^=thumbnail]').css({
        "margin": "20px 10px",
        "box-shadow": "0px 20px 20px -17px black"
    });
    $('[id^=thumbnail]').attr("class","");
    $('[id^=thumbnail][data-number="'+id+'"]').css({
        "margin": "16px 10px",
        "box-shadow": "0px 20px 20px -12px black"
    });
    $('[id^=thumbnail][data-number="'+id+'"]').attr("class","selected");
}

load_photo(current);

$('#arrow-left').click(() => {
    if (current == 0) {
        current = data.length-1;
    } else {
        current--;
    }
    load_photo(current);
});

$('#arrow-right').click(() => {
    if (current == data.length-1) {
        current = 0;
    } else {
        current++;
    }
    load_photo(current);
});

$("[id^=thumbnail]").click((event) => {
    current = $(event.target).attr('data-number');
    load_photo(current);
});