let oneColor = 255;
let otherColor = 145;
for(let i = 0; i < (9*9); i++) {
    var tile = document.createElement("div");
    tile.classList.add('tile');
    tile.style.float = 'left';
    tile.style.minWidth = "11.1%";
    tile.style.paddingBottom = '11.1%';
    if (i % 2 === 0) {
        tile.style.backgroundColor = "rgba("+0+","+oneColor+","+oneColor+")"; 
    }
    else {
        tile.style.backgroundColor = "rgba("+oneColor+","+otherColor+","+0+")";
    }
    otherColor += 2;
    oneColor -= 2;
    document.body.appendChild(tile);
}