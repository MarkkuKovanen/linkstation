"use strict";
let linkStations =
    [[ 0,  0, 10],
     [20, 20,  5],
     [10,  0, 12]];

function calculatePower(x, y, link) {
    let linkX = link[0];
    let linkY = link[1];
    let reach = link[2];
    let distance = Math.sqrt(Math.pow(x - linkX, 2) + Math.pow(y - linkY, 2));
    if (distance < reach) {
        return Math.pow(reach - distance, 2);
    }
    else {
        return 0;
    }
}

function bestLink(x, y) {
    let max = { pwr: calculatePower(x, y, linkStations[0]),
                x: linkStations[0][0],
                y: linkStations[0][1]
              };
    for (let i = 1; i < linkStations.length; i++) {
        let pwr = calculatePower(x, y, linkStations[i]);
        if (pwr > max.pwr) {
            max = { pwr: pwr,
                    x: linkStations[i][0],
                    y: linkStations[i][1]
                  };
        }
    }
    if (max.pwr > 0) {
        return `Best link station for point ${x},${y} is ${max.x},${max.y} with power ${max.pwr.toFixed(2)}`;
    } else {
        return `No link station within reach for point ${x},${y}`;
    }
}

for (let point of [[0,0], [100,100], [15,10], [18,18]]) {
    console.log(bestLink(...point));
}
