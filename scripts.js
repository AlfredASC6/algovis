var dropdown = document.getElementsByClassName("dd-button");

let screen = document.getElementById("visualizer");
const testArray = [5, -1, 10, 23, 4, 8, 2, 25, 7, 0 ] ;
let swapped = true; 
let pass = 1;
let current = 0;


for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function bubbleSort(){
    let arraydisp = document.createElement("div");
    let newContent = document.createTextNode("[ ");
    let firstLine = document.createTextNode("Given an array: ")
    
    //arraydisp.appendChild(newContent);
    screen.appendChild(firstLine);
    for(let i = 0; i < testArray.length; i++){
        if(i == testArray.length -1){
            newContent = document.createTextNode(testArray[i].toString());
            arraydisp.appendChild(newContent);
            break;
        }
        newContent = document.createTextNode(testArray[i].toString() + ", ");
        arraydisp.appendChild(newContent);
        
    }
    //arraydisp.appendChild(document.createTextNode(" ]"));
    screen.appendChild(arraydisp);
    console.log("It function being called");
    //first outer loop keeps passing through the array until there remain to pairs 
    
    //console.log(stringArr);
    while(swapped){
        let stringArr = "";
        swapped = false;
        current = 0;
        //inner loop is looking for pairs that are out of order and corrects the two
        
        //let newLineDisp = document.createTextNode("[ ");
        let newLine = document.createElement("div");
        //newLine.appendChild(newLineDisp);
        while(current < testArray.length - 1){
            //console.log(bubbleSortDisplay(current));
            //console.log(bubbleSortDisplay(current));
            stringArr = bubbleSortDisplay(current);
            newLine.append(stringArr);
            screen.appendChild(newLine);
            if(testArray[current] > testArray[current + 1]){
                
                let temp = testArray[current];
                testArray[current] = testArray[current + 1];
                testArray[current + 1] = temp;

                swapped = true;
                //stringArr = "";
            }//end of if statement
            newLine = document.createElement("div");
            current++;            
        }//end of first inner loop
        
        //console.log(bubbleSortDisplay(-1));
        
        screen.appendChild(newLine);
        pass++;
        newLine = document.createElement("div");
    }//end of first outer loop
}


bubbleSort();
function bubbleSortDisplay(current){
    let tbDisplayed = "";
    for(let i = 0; i < 73; i++){
        tbDisplayed += " ";
    }

    for(let i = 0; i < testArray.length; i++){
        tbDisplayed = setCharAt(tbDisplayed, (i*6+3), testArray[i].toString());
        //tbDisplayed = setCharAt(tbDisplayed, (i*6+5), testArray[i].toString());
    }

    if(current >= 0){
        tbDisplayed = setCharAt(tbDisplayed, current*6+2, '[');
        tbDisplayed = setCharAt(tbDisplayed, (current+1)*6+5, ']');

        console.log(tbDisplayed);
    }
    
    return tbDisplayed;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);

}
