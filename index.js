var db = firebase.firestore();

function storeData(){
    db.collection("users").doc().set({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    
}
