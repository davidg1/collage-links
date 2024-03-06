
import data from "link-data";
   
    
const vimeo4StarsList = document.getElementById("vimeo-4-stars-list");
createList(vimeo4StarsList, data.vimeo4StarsData);






function createList(list, arr) {

    for (i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
                
        let a = document.createElement("a");
    
        a.setAttribute("target", "_blank");  
        a.setAttribute("href", arr[i]);  
    
        a.innerText = "Link " + i;
        
        li.appendChild(a);
        
        list.appendChild(li);
    }
    
}







