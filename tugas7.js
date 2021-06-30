let list = [156, 154, 152, 165, 164, 159, 167, 161, 168, 153];

// menggunakan for biasa
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// menggunakan for of
for (let i of list) {
    console.log(i);
}