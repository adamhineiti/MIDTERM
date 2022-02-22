let list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];

console.log(list)

for (let song of list) {

    let ele = document.createElement('div');
    let nameEle = document.createElement('h2');
    let soundEle = document.createElement('h3');

    nameEle.innerHTML = `Name: ${song.name}`;
    soundEle.innerHTML = `Sound: ${song.sound}`;

    if (song.sound > 5) {
        nameEle.style.color = 'blue';
    }

    ele.append(nameEle, soundEle );
    document.body.appendChild(ele);
}

let group = document.createElement("div")

let counter = 10;
let counterEle = document.createElement('h1');
counterEle.innerHTML = `${counter}`;
group.append(counterEle);
document.body.appendChild(group);

let button = document.createElement("button");
button.innerHTML = "Increase Value";
document.body.appendChild(button);

button.onclick = function() {
    counter += 1;
    counterEle.innerHTML = `${counter}`;

    if (counter == 15) {
        let messageEle = document.createElement('h3')
        messageEle.innerHTML = `cool we hit ${counter}`
        group.append(messageEle);
    }
}


