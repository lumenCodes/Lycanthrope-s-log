
function journal(){
    this._logs = [];

}

journal.prototype.addLog = function(){

     let events  = prompt("input the events of the day separated by commas:");
     events = events.split(",");
     let day = {};
     day.events = events;
     day.squirrel = false;

     for(let event of events){
         if(event.toLowerCase() === "pizza") day.squirrel = true;
     }

    //  if(events.includes("pizza")) day.squirrel = true;

     this._logs.push(day);

     alert("log for the day has been added");
}

journal.prototype.getLog = function(){
    let day = prompt("input day:");
    alert(`events for the day are: ${this._logs[Number(day)].events.toString()}
           squirrel is: ${this._logs[Number(day)].squirrel}`)
}

let myjournal = new journal();
