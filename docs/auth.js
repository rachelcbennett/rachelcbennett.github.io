//get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
var db = firebase.firestore();
var html_comments = document.getElementById('html_comments')


btnLogin.addEventListener('click', e=> {

    const email = txtEmail.value;
    const passwd = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, passwd);
    promise.catch(e=> console.log("Error: ", e.message))
})

function GetComments(){
    db.collection("comments").get().then((querySnapshot) => {
        results=""
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            results += "<div class='container comment'>";
            results+="<h3>"
            results+=doc.data().name;
            results+= " says:";
            results+="</h3>"
            results+="<br>";
            results+=doc.data().comment;
            results+="<br>"
            results+= doc.data().date;
            
            results+="</div>"
            results+="<div class='space'> </div>"
            
        });
        document.getElementById("html_comments").innerHTML = results; //change for textcontent
    });
}