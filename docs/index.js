var db = firebase.firestore();

function subscribeEmail(){
    let currentDate = new Date();
    let Day = currentDate.getDate()
    let Month = currentDate.getMonth() + 1
    let Year = currentDate.getFullYear()
    let curr_date = Month + "/" + Day +"/" + Year

    var subscriberName = document.getElementById('mailNameInput').value;
    var subscriberEmail = document.getElementById('mailEmailInput').value;
    if (subscriberName ==='' || subscriberEmail ===''){
        return;
    }
    db.collection("emailList").doc(subscriberEmail).set({
        subscriber_name: subscriberName,
        subscriber_email: subscriberEmail,
        date_subscribed: curr_date
    })
    .then((docRef) => {
        console.log("Document written");
        document.getElementById('thankyou').innerHTML = '<p> Thanks for Subscribing! You should get a confirmation email in the next day or so. We send about one email a week and you can unsubscribe at any time.</p>'
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
        console.log("Document written with ID: ", email_input);
        results = "<h3> This comment is pending! It should appear within the next few days. :)</h3>"
        results += "<div class='container comment'>";
        results+="<h3>"
        results+=name_input
        results+= " says:";
        results+="</h3>"
        results+="<br>";
        results+=comment_input;
        results+="<br>"
        results+=curr_date
        
        results+="</div>"
        results+="<div class='space'> </div>"

        document.getElementById("tempComment").innerHTML = results
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


/*
function getComments(){
    db.collection("Users").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            //list_div.innerHTML += "<div> doc.data().name </div"
        })
    })
}*/