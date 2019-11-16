
var store_name_row = document.getElementById("row");
var item = document.getElementById("items");
var storeDiv = document.getElementById("store_item");
storeDiv.style.display = "none";
var json = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/stores.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();
// goToStore('*Al-sur Electrical and Construction Supply');
for(var x in json){
    var store_name = x;
    store_name_row.innerHTML +='<div class="col mb-5"> <div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+ store_name +'</h5><button type="button" class="btn btn-primary" onClick="goToStore(\''+ store_name +'\')">Go to Store</button> </div></div></div></div>';
}

// for(var v in store){
//     for(var k in store[v]){
//         console.log(k);
//         store_name.innerHTML +='<div class="col mb-5"> <div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+ k +'</h5><button type="button" class="btn btn-primary" onClick="goToStore(\''+ k +'\')">Go to Store</button> </div></div></div></div>';
//         var key = store[v][k];
//         for(var j in key){

//             var items = store[v][k][''];
            
//             // for(var i in items){
//             //    item.innerHTML += "<p>"+ items[i]+ "</p>";
//             // }
//         }
//     }
// }
function goToStore(name){
    var itemtable="";
    store_name_row.style.display = "none";
    storeDiv.style.display = "block";
    var storename = document.getElementById("store_name");
    
    storename.innerHTML= name;
    itemtable += "<table class='table table-bordered'>"; 
    itemtable += "<tr><th>Item Name</th><th>Qty</th></tr>"; 
    for(var x in json[name]){
        for(var y in json[name][x]){
            // storeDiv.innerHTML +="<p>"+y+"</p>";
            
            // for(var y in json[name][x]){
            itemtable += "<tr><td>"+y+"</td><td>"+json[name][x][y]+"</td></tr>"; 
            console.log(json[name][x]);
            // }
        }
        // for(var y in json[name]){
        //     console.log(json[x][y]);
        // }
        
    }
    itemtable += "</table>";
    itemtable += "<a href='index.html' class='btn btn-primary'>Back</a>";
    storeDiv.innerHTML = itemtable;
}
