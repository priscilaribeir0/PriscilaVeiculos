function test() {
    fetch("./script/teste.json")
        .then(data => { 
            console.log(data.text().then(data2 => {console.log(typeof data2)}));
        })
        .catch(err => console.log(err));
}

test();