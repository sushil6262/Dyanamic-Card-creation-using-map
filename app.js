var form = document.getElementById('form');
var dataArray =[]

aeventListener();
function aeventListener(){
    form.addEventListener('submit', addData);
}

function init(){
    if(localStorage.dataRecord){
        dataArray = JSON.parse(localStorage.dataRecord);
        dataArray.map(data=>{
            preTable(data.name,data.designation,data.address)
        })
    }
}

function addData(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var designation = document.getElementById('designation').value;
    var address = document.getElementById('address').value;

    var dataObj ={name: name ,designation:designation, address : address}
    dataArray.push(dataObj);
    //storeing data in local storage
    localStorage.dataRecord = JSON.stringify(dataArray);
    init()
    form.reset();
}
function preTable(name,designation,address){    
    const newdataArray = JSON.parse(localStorage.dataRecord);
    document.getElementById('card').innerHTML = newdataArray.map(item=>
        `
        <div class="col-sm-3">
            <div class="card marginStyle">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.designation}</p>
                <p class="card-text">${item.address}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    ).join('')

}