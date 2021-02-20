var db = firebase.firestore();
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
