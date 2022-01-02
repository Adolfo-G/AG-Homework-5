var now=moment();
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"));

const hours=["9 AM","10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
const milTime=[9,10,11,12,13,14,15,16,17]
const tag=["0","1","2","3","4","5","6","7","8"]
var tasks=[{
  "hour":"9 AM",
  "text":""
},{
  "hour":"10 AM",
  "text":""
},{
  "hour":"11 AM",
  "text":""
},{
  "hour":"12 PM",
  "text":""
},{
  "hour":"1 PM",
  "text":""
},{
  "hour":"2 PM",
  "text":""
},{
  "hour":"3 PM",
  "text":""
},{
  "hour":"4 PM",
  "text":""
},{
  "hour":"5 PM",
  "text":""
}]

var retrievedData= JSON.parse(localStorage.getItem("tasks"))
if(retrievedData!=null){
  tasks=retrievedData
}

const tableEl=document.querySelector("tbody")
for(var i =0;i<hours.length;i++){
    //add row
    const tableRowEl=document.createElement("tr")
    tableEl.appendChild(tableRowEl)
    //add hour cell
    const rowDayEl=document.createElement("td")
    rowDayEl.classList.add("hour")
    rowDayEl.textContent=hours[i]
    tableRowEl.appendChild(rowDayEl)
    //add form cell
    const formEl=document.createElement("td")
    formEl.classList.add("formwidth")
    tableRowEl.appendChild(formEl)
    const formContainer= document.createElement("div")
    formContainer.classList.add("input-group", "mb-3")
    formEl.appendChild(formContainer)
    const formItem=document.createElement("input")
    formItem.classList.add("form", "formwidth")//add past present future
    timeCheck(milTime[i])
    formItem.setAttribute("row","3")
    formItem.setAttribute("type","text")
    formItem.setAttribute("aria-label","Recipient's username")
    formItem.setAttribute("aria-describedby","button-addon2")
    formItem.setAttribute("id",`${tag[i]}`)
    formItem.setAttribute("value",`${tasks[i].text}`)
    formContainer.appendChild(formItem)
    //add button
    const btnContainerEl=document.createElement("td")
    tableRowEl.appendChild(btnContainerEl)
    const buttonEl=document.createElement("button")
    buttonEl.classList.add("saveBtn","btn","btn-outline-secondary")
    buttonEl.setAttribute("type","button")
    buttonEl.setAttribute("id","button-addon2")
    buttonEl.setAttribute("onclick",`saved(${tag[i]})`)
    buttonEl.textContent="Save"
    btnContainerEl.appendChild(buttonEl)

    function timeCheck(h){
      var localTimeHour=moment().format('H')
      localTimeHour=parseInt(localTimeHour)
      if(localTimeHour==h){
        return formItem.classList.add("present")
      }else if(localTimeHour>h){
        return formItem.classList.add("past")
      }else{
        return formItem.classList.add("future")
      }
    }
}

function saved(j){
  var txt = document.getElementById(`${j}`)
  tasks[j].text=txt.value
  localStorage.setItem("tasks",JSON.stringify(tasks))
}