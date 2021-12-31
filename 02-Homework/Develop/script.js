var now=moment();
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"));


const hours=["9 AM","10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var tasks=[]

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
    formEl.appendChild(formContainer)
    const formItem=document.createElement("textarea")
    formItem.classList.add("form", "future", "formwidth")
    formItem.setAttribute("row","3")
    formItem.setAttribute("id","exampleFormControlTextarea1")
    formItem.textContent=""
    formContainer.appendChild(formItem)
    //add button
    const buttonContainer=document.createElement("td")
    tableRowEl.appendChild(buttonContainer)
    const buttonEl=document.createElement("button")
    buttonEl.classList.add("saveBtn")
    buttonEl.textContent="Save"
    buttonContainer.appendChild(buttonEl)
    
    tasks.push({
        "hour":hours[i],
        "text":formItem.value
    })

}

function data(){
    
}

console.log(tasks)








{/* <tr>
            <!-- <th scope="row"></th> -->
            <td class="hour">9 am</td>
            <td class="formwidth">
              <div>
              <textarea class="form future formwidth" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </td>
            
            <td>
              <button class="saveBtn">Save</button>
            </td>
          </tr> */}