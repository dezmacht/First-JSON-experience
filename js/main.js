var pageCounter=1;
var container=document.getElementById('animal-info');
var theButton=document.getElementById('actionbutton');

theButton.addEventListener("click", function(){
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');    
    ourRequest.onload=function(){       
        var ourData=JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.onerror=function(){
        console.log("la conexion fallo");
    };    
    ourRequest.send();
    pageCounter++;
    if(pageCounter==4){
        theButton.classList.add("hidden");
    }
});

function renderHTML(data){
    var htmlString='';

    for (index = 0; index < data.length; index++) {
        htmlString += "<p>"+ data[index].name +" is a "+data[index].species+
        " that likes to eat ";
        for (index2 = 0; index2 < data[index].foods.likes.length; index2++) {          
            if((index2!=data[index].foods.likes.length)&&(index2!=0)){
                htmlString+=' and ';
            }
            htmlString += data[index].foods.likes[index2];
        }
        htmlString+=" and dislikes to eat ";
        for (index3 = 0; index3 < data[index].foods.dislikes.length; index3++) {          
            if((index3!=data[index].foods.dislikes.length)&&(index3!=0)){
                htmlString+=" and ";
            }
            htmlString += data[index].foods.dislikes[index3];
        }
        htmlString+="</p>";      
    }

    container.insertAdjacentHTML('beforeend', htmlString);
};
