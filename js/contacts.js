let chatView = document.querySelector(".chat-view");
let contactsView = document.querySelector(".contacts-view");
slideOutChatView();


function slideInChatView(){ chatView.style.left = "0%" }
function slideOutChatView(){ chatView.style.left = "100%" }
function slideOutContactsView(){ contactsView.style.left = "-100%" }
function slideInContactsView(){ contactsView.style.left = "0%" }

( async () => {

    let personalID = "xyz"; // make dynamic user
    let results = await loadContacts(personalID);
    await buildContactsView(results);

})();

async function loadContacts(personalID) {

    return new Promise((resolve,reject) => {
        let params = `personalID=${personalID}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "include/contacts.fetch.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function(){
            if( this.status == 200 ){
                let contacts = JSON.parse(this.responseText);

                // if(details == "") reject("Report Does Not Exist");
                // else { resolve(details) }

                console.log(contacts);
                resolve(contacts);
            }
            else{
                reject("Error Fetching User Details");
            }
        }

        xhr.send(params);

    });
    
}

async function buildContactsView(contacts){
    let contactsContainer = document.querySelector(".contacts-container");
    let HTMLContent = '';

    contacts.forEach(contact => {
        
        let contactRow = `
            <div class="contact-row" data-chatid=${contact.chat_id} onclick="slideInChatView(this); slideOutContactsView();">
                <!-- what if the data-chatid was already placed as a link -->
                <div class="avatar">
                    <img src="images/person.jpg">
                </div>
                <p class="row-title">${contact.username}</p>
                <span class="action-icon">
                    <!-- <img src="images/icons/fi-rr-angle-small-right.svg" alt=""> -->
                    <img src="images/icons/fi-rr-angle-circle-right.svg" alt="">
                </span>
            </div>
        `;

        HTMLContent += contactRow;

    });

    contactsContainer.innerHTML = HTMLContent;

}
