const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/
const daysOfWeek = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday']
const info = document.getElementById('inputForm')
const div1 = document.getElementById('leftcolumn')
const reset = document.getElementById('reset')



/* listens for when the user submits the form*/
    info.addEventListener('submit', (event) =>{

        event.preventDefault()

        newWindow = window.open() // Creates a new window to display the meal plan

        /*All values of the form are collected here */
        let userName = document.getElementById('name').value
        let email = document.getElementById('email').value
        let goals = document. getElementById('goal').value
        let bfast = document.getElementById('breakfast').value
        let snack1 = document.getElementById('snack1').value
        let lunch = document.getElementById('lunch').value
        let snack2 = document.getElementById('snack2').value
        let dinner = document.getElementById('dinner').value

        /*Tests the email field for a valid input. I know the field will automatically check for the @ symbol; however, it doesn't check if there is an apporpiate ".com" or anything like that*/
        if (regex.test(email) == false){
            alert("Please enter a valid email address")
        }
        else{
            /*Set up the new window to have the correct format as well as adding in the initial content, such as the output div and the print button*/
            newWindow.document.body.innerHTML = `<h1 style="text-allign: center">${userName}\'s Meal Plan</h1> 
                                                <h2>Goal: ${goals}</h2> 
                                                <div id="structure"></div>
                                                <br><br>
                                                <button type="button" id="printer" onclick="window.print()">Print/Download</button>`

            newWindow.document.head.innerHTML = `<meta charset="UTF-8">
                                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                                <title>${userName}\'s Meal Plan</title>
                                                <script src="projectJS.js" defer></script>
                                                <style>
                                                    body {
                                                        margin: 0;
                                                        display: flex;
                                                        flex-direction: column;
                                                        padding: 20px;
                                                        text-align: center;
                                                        align-items: center;   
                                                        }`
            /*For loop to create each as a div and applies the same plan for each, then appends it to the new window along with all the correct styling */
            for (let i = 0; i< daysOfWeek.length; i++) {
                let day = document.createElement('div')
                let text = document.createElement('p')
                let structure = newWindow.document.getElementById("structure")
                day.style.outline = "2px solid"
                day.style.float = "left"
                day.style.padding = "10px"
                
                text.innerHTML = `<h3>${daysOfWeek[i]}:</h3>
                                <hr>
                                <br>
                                <br>
                                BreakFast: ${bfast}
                                <br>
                                Snack: ${snack1}
                                <br>
                                Lunch: ${lunch}
                                <br>
                                Snack: ${snack2}
                                <br>
                                Dinner: ${dinner}`
                day.append(text)
                structure.append(day)
                
            }

        }

        

    });

/*Will close the new window once the reset button is clicked on the original page*/
reset.addEventListener("click", (event) =>{
    newWindow.close()
})




        

