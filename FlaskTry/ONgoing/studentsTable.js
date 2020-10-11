


var config ={
    "apiKey": "AIzaSyAC4EU24xjMQKXP-41I1TnRDIT4KTN7CV8",
    "authDomain": "proxy-detection-1df22.firebaseapp.com",
    "databaseURL": "https://proxy-detection-1df22.firebaseio.com",
    "projectId": "proxy-detection-1df22",
    "storageBucket": "proxy-detection-1df22.appspot.com",
    "messagingSenderId": "17187188207",
    "appId": "1:17187188207:web:63e8c1f5b50862b1c59a1a",
    "vmeasurementId": "G-EPTQX1DS4L"
}
firebase.initializeApp(config);
var IClass="SE";
var IDiv="B"

const preObject=document.getElementById('object');
const dbRefObject=firebase.database().ref().child(IClass);
var table=document.getElementById('student-table')
var headings=[];
for (let index = 0; index < 5; index++) {
    headings.push(document.getElementById('subject'+String(index+1)));
    
}
var content='';

dbRefObject.on('value', snap=> {
    console.log(snap.val())
    var data=snap.val();
    console.log(data[IDiv]['18'])
    var students=Object.keys(data[IDiv]);
    console.log(students);

    var subjects=Object.keys(data[IDiv][students[0]])
    console.log(subjects);
    for (let index = 0; index < headings.length; index++) {
        headings[index].innerText=subjects[index];
    }
    
    for (let index = 0; index < students.length; index++) {
        content +='<tr>';
        content += '<td>' + students[index]+ '</td>';
        content += '<td>' + data[IDiv][students[index]][subjects[0]]+ '</td>';
        content += '<td>' + data[IDiv][students[index]][subjects[1]] + '</td>';
        content += '<td>' + data[IDiv][students[index]][subjects[2]] + '</td>';
        content += '<td>' + data[IDiv][students[index]][subjects[3]] + '</td>';
        content += '<td>' + data[IDiv][students[index]][subjects[4]]+ '</td>';
        content += '</tr>';
        
    }
    table.innerHTML+=content;


});

// // Get a reference to the database service
// var database = firebase.database();

// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', function(snapshot) {
//   updateStarCount(postElement, snapshot.val());
  
//   var userId = firebase.auth().currentUser.uid;
//   return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   console.log(username)
//   // ...
// });
// });

// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   console.log(username)
//   // ...
// });