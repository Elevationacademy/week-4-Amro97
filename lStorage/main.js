let wisdomIdCounter = 0
const wisdoms = []

let  temp = JSON.parse(localStorage.wise)
for (let wisdom of temp) {
    $("ul").append(`<li id=${wisdom.id}>`+ wisdom.text + "</li>")
}

const renderWisdoms = function () {
    $("ul").empty()
    for (let wisdom of wisdoms) {
        $("ul").append(`<li id=${wisdom.id}>`+ wisdom.text + "</li>")
    }
}

const addWisdomToArray = function (str) {
    let newWisdom = {
        id: ++wisdomIdCounter,
        text: str
    }
    wisdoms.push(newWisdom)
    localStorage.wise = JSON.stringify(wisdoms)
}

const addWisdom = function () {
    const wisdom = $('#input').val()
    if(wisdom == "") return
    addWisdomToArray(wisdom)
    console.log("ok")
    $('#input').val("")
    renderWisdoms(wisdoms)
}