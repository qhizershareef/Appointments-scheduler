let timeSlots= [
    '10:00-10:15','10:15-10:30','10:30-10:45','10:45-11:00',
    '11:00-11:15','11:15-11:30','11:30-11:45','11:45-12:00',
    '12:00-12:15','12:15-12:30','12:30-12:45','12:45-1:00',
    '1:00-1:15','1:15-1:30','1:30-1:45','1:45-2:00',
    '2:30-2:45','2:45-3:00',
    '3:00-3:15','3:15-3:30','3:30-3:45','3:45-4:00'
];

let dropDown= document.querySelector('.timeSlots');

const db= firebase.firestore();

function displayAll(times){
    times.forEach(data=>{
        createEl(data);
    })
}

function createEl(data){
    let Option = document.createElement('option');
    Option.value=data;
    Option.textContent= data;
    dropDown.appendChild(Option);
}


function getAvailableTimes(){
    let firebaseObjects=[];
    let selectedDate= $('.DateSelect').val();
    db.collection('Appointments').where('date', '==', selectedDate).get().then(snapshot => {
        snapshot.docs.forEach((doc) => {
            firebaseObjects.push(doc.data().time);
        })
    }).then(()=>{
         if(firebaseObjects.length != 0){
            dropDown.innerHTML='';
            finalArray = timeSlots.filter(function(item) {
                return !firebaseObjects.includes(item); 
            })
            displayAll(finalArray);
         }
         else{
             dropDown.innerHTML='';
             console.log('No Entries');
             displayAll(timeSlots);
         }
         
     });
}


//form submit action
$('.btn-appointment').click(()=>{
    let name = $('#Name').val();
    let email= $('#Email').val();
    let date = $('#dat').val();
    let phone = $('#Phone').val();
    let time = $('.timeSlots').val();
    let area = $('#Area').val();
    let postalCode = $('#PostalCode').val();
    let state = $('#State').val();
    let city = $('#City').val();
    let obj ={name,email,phone,area,city, postalCode,state,time,date};
    db.collection('Appointments').doc()
      .set(obj)
      .then(()=>{
            alert(name+"'s details uploaded Successfully!");
            document.querySelector('form').reset();
        })
      .catch(e=>{console.log(e);})
    
})