function randomColor(){
    let colorToUse = Math.floor(Math.random() * 255);
    return colorToUse;
}
for(let i = 0; i < (9*9); i++) {
    var tile = document.createElement("div");
    tile.classList.add('tile');
    tile.style.float = 'left';
    tile.style.minWidth = "11.1%";
    tile.style.paddingBottom = '11.1%';
    tile.style.backgroundColor = 'rgba(' 
    + randomColor() + ',' + randomColor() 
    + ',' + randomColor() + '\)';
    document.body.appendChild(tile);
}