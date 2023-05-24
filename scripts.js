var dropdown = document.getElementsByClassName("dd-button");

let screen = document.getElementById("visualizer");
let input = document.getElementById("input");
// const testArray = [5, -1, 10, 23, 4, 8, 2, 25, 7, 0 ] ;
// const selectionSortArray = [5, -1, 10, 23, 4, 8, 2, 25, 7, 0 ]
const pidgeonHoleArr = [2, 5, 2, 3, 6, 7, 6, 9, 10, 1];
let bubbleSortArray = [];
let selectionSortArray = []
let mergeSortArray;


let swapped = true; 
let pass = 0;
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

function bubbleSort(inputArray){
    let arraydisp = document.createElement("div");
    let newContent = document.createTextNode("[ ");
    let firstLine = document.createTextNode("Given an array: ")
    //arraydisp.appendChild(newContent);
    screen.appendChild(firstLine);
    for(let i = 0; i < inputArray.length; i++){
        if(i == inputArray.length -1){
            newContent = document.createTextNode(inputArray[i].toString());
            arraydisp.appendChild(newContent);
            break;
        }
        newContent = document.createTextNode(inputArray[i].toString() + ", ");
        arraydisp.appendChild(newContent);
        
    }
    screen.appendChild(arraydisp);
    //first outer loop keeps passing through the array until there remain to pairs 
    
    //console.log(stringArr);
    while(swapped){
        let stepNum = document.createElement("div"); 
        let step = "Pass: " + (pass+1) 
        let stringArr = "";
        swapped = false;
        current = 0;
        stepNum.append(step);
        screen.appendChild(stepNum);
        stepNum = document.createElement("div");
        screen.appendChild(stepNum);
        //inner loop is looking for pairs that are out of order and corrects the two
        
        let newLine = document.createElement("div");
        while(current < inputArray.length - 1){
            
            stringArr = bubbleSortDisplay(current);
            newLine.append(stringArr);
            screen.appendChild(newLine);
            if(inputArray[current] > inputArray[current + 1]){
                
                let temp = inputArray[current];
                inputArray[current] = inputArray[current + 1];
                inputArray[current + 1] = temp;

                swapped = true;
            }//end of if statement
            newLine = document.createElement("div");
            current++;            
        }//end of first inner loop
        
        screen.appendChild(newLine);
        pass++;
        newLine = document.createElement("div");
    }//end of first outer loop
    let endMessage = "Sorting complete!\n"
    let newLine = document.createElement("div");
    newLine.append(endMessage);
    screen.appendChild(newLine);
    endMessage = bubbleSortArray;
    newLine = document.createElement("div");
    newLine.append(endMessage);
    screen.appendChild(newLine);
}

function selectionSort(){
    let start = 0;
    let candidate = start;
    let current = 1;

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
    screen.appendChild(arraydisp);
    


    while(start < selectionSortArray.length - 1){
        current = start + 1;
        candidate = start;
        let newLine = document.createElement("div");

        stringArr = selectionSortDisplay(start, candidate, current);
        newLine.append(stringArr);
        screen.appendChild(newLine);
        newLine = document.createElement("div");
        while(current < selectionSortArray.length){
            if(selectionSortArray[candidate] > selectionSortArray[current]){
                candidate = current;
            }

            current++;
            stringArr = selectionSortDisplay(start, candidate, current < selectionSortArray.length ? current: -1);
            newLine.append(stringArr);
            screen.appendChild(newLine);
            newLine = document.createElement("div");
        }//end of inner while loop

        if(start != candidate){
            let message = "Swapping locations " + start + " and " + candidate;
            newLine.append(message);
            screen.appendChild(newLine);
            newLine = document.createElement("div");

            let temp = selectionSortArray[start];
            selectionSortArray[start] = selectionSortArray[candidate];
            selectionSortArray[candidate] = temp;


        }

        start++;
        stringArr = selectionSortDisplay(start, -1, -1);
        newLine.append(stringArr);
        screen.appendChild(newLine);
        newLine = document.createElement("div");
        let message = "Pass " + start + " complete!";
        newLine.append(message);
        screen.appendChild(newLine);
        newLine = document.createElement('div');

    }//end of outer while loop
    let newLine = document.createElement("div");
    let message = "Sort Complete";
    newLine.append(message);
    screen.appendChild(newLine);
    newLine = document.createElement("div");
    stringArr = selectionSortDisplay(-1, -1, -1);
    newLine.append(stringArr);
    screen.appendChild(newLine);
    
}
//selectionSort();
// bubbleSort();

// function pidgeonHoleSort(){
//     console.log(pidgeonHoleArr);
//     let min = pidgeonHoleArr[0];
//     let max = pidgeonHoleArr[0];
//     let range;
//     let index;
//     let n = pidgeonHoleArr.length;

//     for(let a = 0; a < n; a++){
//         if(pidgeonHoleArr[a] > max){
//             max = testArray[a];
//         }
//         if(pidgeonHoleArr[a] < min){
//             min = pidgeonHoleArr[a];
//         }
//     }

//     range = max - min + 1;
//     let pidgeonHole = [];

//     for(let i = 0; i < n; i++){
//         pidgeonHole[i] = 0;
//     }

//     for(let i = 0; i < n; i++){
//         pidgeonHole[pidgeonHoleArr[i] - min]++;
//     }

//     index = 0;

//     for(let j = 0; j < range; j++){
//         while(pidgeonHole[j] --> 0){
//             pidgeonHoleArr[index++] = j + min;
//         }
//     }

// }

// pidgeonHoleSort();
// console.log(pidgeonHoleArr)
//beginning of sorting algorithm display functions
function bubbleSortDisplay(current){
    let tbDisplayed = "";
    for(let i = 0; i < 1000; i++){
        tbDisplayed += " ";
    }

    for(let i = 0; i < bubbleSortArray.length; i++){
        tbDisplayed = setCharAt(tbDisplayed, (i*6+3), bubbleSortArray[i].toString());
        //tbDisplayed = setCharAt(tbDisplayed, (i*6+5), testArray[i].toString());
    }

    if(current >= 0){
        tbDisplayed = setCharAt(tbDisplayed, current*6+2, '[');
        tbDisplayed = setCharAt(tbDisplayed, (current+1)*6+5, ']');

    }
    
    return tbDisplayed;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}



//JavaScript function that displays the 
function selectionSortDisplay(sortedTo, candidate, checked){
    let display = "";
    for(let i = 0; i < 63; i++){
        display += " ";
    }

    for(let i = 0; i < selectionSortArray.length; i++){
        display = setCharAt(display, i*6+3, selectionSortArray[i]);
    }
    if(sortedTo >= 0){
        display = setCharAt(display, sortedTo*6, '|');
    }
    if(candidate >=0){
        display = setCharAt(display, sortedTo*6+2, '[');
        display = setCharAt(display, sortedTo*6+5, ']');
    }
    if(checked >=0){
        display = setCharAt(display, checked*6+1, '->');
        //display = setCharAt(display, sortedTo*6+3, '->');
    }

    return display;
}

//event listeners
const bubble = document.getElementById("bubble");
// const select = document.getElementById("select");

bubble.addEventListener("click", function(){
     screen.innerHTML = "";

    if(input.value === ""){
        let size = Math.floor(Math.random() * 20);
        
        for(let i = 0; i < size; i++){
            let randomNum = Math.floor(Math.random() * 100);

            bubbleSortArray.push(randomNum);
        }
        console.log(bubbleSortArray);
        bubbleSort(bubbleSortArray);

    }

    else{
        let pattern = /^[0-9,+=]*$/g;

        if(!input.value.match(pattern)){            
            window.alert("Error, the input should only be numbers and commas");
        }
        else{
            let temp = input.value.split(",")
            for(let i = 0; i < temp.length; i++){
                bubbleSortArray.push(parseInt(temp[i]));
            }
            bubbleSort(bubbleSortArray);
        }
    }
})

// select.addEventListener("click", function(){
//     screen.innerHTML = "";
//     selectionSort();
// })