var form = document.travelForm;

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    var foods = [];
    var checkedBoxes = document.querySelectorAll('input[name=restriction]:checked')
    for( var i = 0; i < checkedBoxes.length;i++){
        foods.push(checkedBoxes[i].value)
    }
    var location = form.locations.value;
    var age = form.ageNumber.value;
    var gender = form.genders.value;
    alert(`First Name: ${form.fName.value}\nLast Name: ${form.lName.value}\nAge: ${age}\nGender: ${gender}\nLocation: ${location}\nDietary Restrictions: ${foods}`);
})