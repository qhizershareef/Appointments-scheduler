# Appointments-scheduler

<style>
.RED{
  color:red;
}
</style>
<h5 style="color:red;" class="RED">
Simple application for booking appointments, made using javascript, jquery and firebase-firestore.</h5>
Pick any date and time of your choice, and done your time will be reserved and hidden for any other customer.


<h5><b>Problem: users should select times from 10:00-4:00pm and with a gap of 15 minutes difference,
  and can upload their details and locations at home, the times selected by others should be hidden and show only the remaining or available timeslots.
  </b></h5>
<h4> solution: </h4>
<ul>
  
  <li>Create an array with all the available time slots.</li>
  
  <li>Used Firebase-firestore to store details as well as the time as "string"</li>
  
  <li>when user selects a date onblur event runs function and there by fetches data from firestore and compares the array with the original timeslot array and shows the updated array, in the dropdown.</li>
  
  <li>The time slots are displayed dynamically through javascript, method used (createElement('li')</li>
  
  <li> Jquery to handle submit and upload the object to firestore.</li>
</ul>

<h3 style="background-color:crimson;">I hope you liked this ♥! from qhizer</h3>
