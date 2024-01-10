/* 
const start=document.getElementById("start");
const firstPage=document.getElementById("firstPage");
const rank=document.getElementById("rank");
const playerNum=document.getElementById("playerNum");
const playingTo=document.getElementById("playingTo")
const tbody= document.getElementById('body');
const rankTable=document.getElementById("rankTable")
const back = document.getElementById("return")
const tableBody=document.getElementById("tableBody")


start.addEventListener('click', function(){
    firstPage.style.display = "none";
    rankTable.style.visibility="visible";
    for (let i = 0; i < playerNum.value; i++) {
       myFunction(i)
      }       
});
back.addEventListener('click',function(){
    showFirstPage();
rankTable.style.visibility="hidden";
})

function showFirstPage() {
    
    if (firstPage.style.display === "none") {
      firstPage.style.display = "block";
      playerNum.value=2;
      tableBody.innerHTML="";
    } else {
      firstPage.style.display = "none";
    }
  }

function myFunction(i){
    var newRow = tableBody.insertRow(-1);    
    let newCell = newRow.insertCell(0);
    let newCell2= newRow.insertCell(1);
    let newCell3= newRow.insertCell(2);
    let newText = document.createTextNode(i+1);
    let newText1 = document.createElement("input");
    let plus=document.createElement("button");
  
        plus.addEventListener('click', function () {
            var score=document.getElementById("score"+i);
            var value=parseInt(score.textContent)+1;
           score.textContent=value;
          
            
                    
            var sum=0;
            for(let q =0;q<playerNum.value;q++){
                var score=document.getElementById("score"+q);
                var value=parseInt(score.textContent);
                sum+=value;
                
            }
            //console.log(sum);
            if (sum===parseInt(playingTo.value)){
                let arr=[];
                for( let q=0;q<playerNum.value;q++){
                    var plus=document.getElementById("plus"+q);
                    var score=document.getElementById("score"+q);
                    var value=parseInt(score.textContent);
                    plus.disabled=true;
                    arr.push(value)
                }

                for(let q=0;q<playerNum.value;q++){
                    winnerScore=Math.max(...arr)
                    console.log(winnerScore)
                    var score=document.getElementById("score"+q);
                    var value=parseInt(score.textContent);
                     if(value===winnerScore) {
                        var trophy=document.createElement('p');
                        trophy.innerHTML="🏆";
                        newText3.setAttribute('id','trophy');
                        trophy.style.fontSize='28px'
                        trophy.style.display = 'inline-block'
                        
                        newCell2.appendChild(trophy);
                        console.log(score)
                    }
                } 

            }
                
        
            })
      
    let newText3= document.createElement('div');
    newText3.innerHTML="0";
    newText3.setAttribute('id','score'+i);
   
    plus.setAttribute('id','plus'+i);
    
    newText1.setAttribute("type", "text");
    newText1.style.backgroundColor="transparent"
    newText1.style.borderColor="CadetBlue"
    
  
    plus.innerHTML=" &nbsp;&nbsp; 💰"
    plus.style.fontSize='30px'
    plus.style.backgroundColor="transparent"
    plus.style.border="none"
    
    newCell.appendChild(newText);
    newCell2.appendChild(newText1);
    newCell2.appendChild(plus);
   newCell3.appendChild(newText3);}
 */
  // Get DOM elements
const start = document.getElementById("start");
const firstPage = document.getElementById("firstPage");
const rankTable = document.getElementById("rankTable");
const playerNum = document.getElementById("playerNum");
const playingTo = document.getElementById("playingTo");
const tableBody = document.getElementById("tableBody");
const back = document.getElementById("return");

// Event listeners
start.addEventListener("click", startGame);
back.addEventListener("click", showFirstPage);

// Function to start the game
function startGame() {
    console.log("start clicked");
    firstPage.style.display = "none";
    rankTable.style.visibility = "visible";
    showElement(rankTable);
    hideElement(firstPage);
    // Create rows for players
    for (let i = 0; i < playerNum.value; i++) {
        createPlayerRow(i);
    }
}

// Function to show the first page
function showFirstPage() {
    showElement(firstPage);
    hideElement(rankTable);
    playerNum.value = 2;
    clearTableBody();
}



// Function to create a player row
function createPlayerRow(i) {
    const newRow = tableBody.insertRow(-1);
    const newCell = newRow.insertCell(0);
    newCell.id = i + 1;
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);

    // Create elements
    const newText = document.createTextNode(i + 1);
    const newText1 = document.createElement("input");
    const plus = document.createElement("button");
    const newText3 = document.createElement("div");

    // Set attributes
    newText3.setAttribute("id", `score${i}`);
    newText3.innerHTML = "0";
    plus.setAttribute("id", `plus${i}`);
    plus.innerHTML=" &nbsp;&nbsp; 💰"
    plus.style.fontSize='30px'
    plus.style.backgroundColor="transparent"
    plus.style.border="none"
    // Set styles
    newText1.style.backgroundColor = "transparent";
    newText1.style.borderColor = "CadetBlue";
    plus.style.fontSize = "30px";
    plus.style.backgroundColor = "transparent";
    plus.style.border = "none";

    // Append elements to cells
    newCell.appendChild(newText);
    newCell2.appendChild(newText1);
    newCell2.appendChild(plus);
    newCell3.appendChild(newText3);

    // Add click event to plus button
    plus.addEventListener("click", () => updateScore(i));
}

// Function to update player score
function updateScore(i) {
    const score = document.getElementById(`score${i}`);
    const value = parseInt(score.textContent) + 1;
    score.textContent = value;

    const sum = calculateTotalScore();

    if (sum === parseInt(playingTo.value)) {
        declareWinner();
    }

    console.log("sum is"+ sum + "playingTo.value is " + playingTo.value);
}

// Function to calculate total score
function calculateTotalScore() {
    let sum = 0;
    for (let q = 0; q < playerNum.value; q++) {
        const score = document.getElementById(`score${q}`);
        const value = parseInt(score.textContent);
        sum += value;
    }
    //if (sum == playingTo.value){
      //  declareWinner();
    //}
    return sum;
}

// Function to declare the winner
function declareWinner() {
    const scores = Array.from({ length: playerNum.value }, (_, q) =>
        parseInt(document.getElementById(`score${q}`).textContent)
    );
    const maxScore = Math.max(...scores);
    console.log("Max Score:", maxScore);
    for (let q = 0; q < playerNum.value; q++) {
        const plus = document.getElementById(`plus${q}`);
        const score = document.getElementById(`score${q}`);
        const ranking = document.getElementById(q + 1);
        const value = parseInt(score.textContent);

        if (value === maxScore) {
            const trophy = document.createElement("p");
            trophy.innerHTML = "🏆";
            trophy.style.fontSize = "28px";
            trophy.style.display = "inline-block";
            //newCell2.appendChild(trophy);
            //alert(`Player ${q + 1} wins!`);
            ranking.appendChild(trophy);
        }

        plus.disabled = true;
    }
}

// Function to hide an element
function hideElement(element) {
    element.style.display = "none";
}

// Function to show an element
function showElement(element) {
    element.style.display = "block";
}

// Function to clear the table body
function clearTableBody() {
    tableBody.innerHTML = "";
}
 

