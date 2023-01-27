for(let i = 0; i < (9*9); i++) {
    var tile = document.createElement("div");
    tile.classList.add('tile');
    tile.style.float = 'left';
    tile.style.minWidth = "11.1%";
    tile.style.paddingBottom = '11.1%';
    if (i % 2 === 0) {
        tile.style.backgroundColor = "black";
    }
    else {
        tile.style.backgroundColor = 'red';
    }
    document.body.appendChild(tile);
}
// testest