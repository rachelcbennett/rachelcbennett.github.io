var db = firebase.firestore();

function storeData(){
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}



function storeComment(){
    comment_input = document.getElementById("commentInput").value;
    name_input = document.getElementById("nameInput").value;
    email_input = document.getElementById("emailInput").value;
    let currentDate = new Date();
    let Day = currentDate.getDate()
    let Month = currentDate.getMonth() + 1
    let Year = currentDate.getFullYear()
    let curr_date = Month + "/" + Day +"/" + Year



    db.collection("comments").doc(email_input).set({
        name: name_input,
        comment: comment_input,
        page: document.title,
        date: curr_date
    })
    .then(() => {
        alert("Success!");
        console.log("Document written with ID: ", email_input);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


function getComments(){
    db.collection("Users").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            //list_div.innerHTML += "<div> doc.data().name </div"
        })
    })
}