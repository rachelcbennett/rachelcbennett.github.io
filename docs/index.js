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
    console.log("entered storecomment")
    var commenter_name = document.getElementById("nameInput").value;
    var commenter_email = document.getElementById("emailInput").value;
    var commenter_comment= document.getElementById("commentInput").value;
    console.log(commenter_name)
    db.collection("comments").doc("new-id").set({
        name: "herro",
        comment: "herro there"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}