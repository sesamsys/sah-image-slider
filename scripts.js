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
        $('#navigation').append(
            '<div class="thumbnail" id="thumbnail'+index+'" data-number="'+index+'"><div class="tooltip" id="tooltip'+index+'">'+item.title+'</div></div>'
        );
        $('[id^=thumbnail][data-number="'+index+'"]').css("background-image", "url("+item.photo+")");
    });
};

load_thumbnails();

let load_photo = (id) => {
    current = id;
    $('#photo').css("background-image", "url("+data[id].photo+")");
    $('#title').text(data[id].title);
    $('#text').text(data[id].description);
    $('[id^=thumbnail]').attr("class","thumbnail");
    $('[id^=thumbnail][data-number="'+id+'"]').attr("class", "thumbnail selected");
};

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

let set_tooltips = () => {
    data.forEach((item, index) => {
        console.log($('[id=tooltip'+index+']').css('width'));
        tmp = $('[id=tooltip'+index+']').css('width');
        tmp = 60-(parseInt(tmp)+15);
        tmp = tmp/2;
        left = Math.round(tmp);
        console.log(left);
        $('[id=tooltip'+index+']').css('left',left);
    });
};

set_tooltips();