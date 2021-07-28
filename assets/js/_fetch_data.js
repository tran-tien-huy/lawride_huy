fetch("https://jsonplaceholder.typicode.com/photos")
.then(function(data){
    return data.json();
})
.then(function(data) {
    count = 0;
    var returned_arr = data.map(element => {
        var show = `
                    <div class="ab">${element.albumId}</div>
                    <div class="ab">${element.id}</div>
                    <div class="ab">${element.title}</div>
                    <div class="ab">${element.url}</div>
                    <img src="${element.thumbnailUrl}">
                    `
        return show;
    });
    document.getElementsByTagName('body')[0].innerHTML = returned_arr;
});