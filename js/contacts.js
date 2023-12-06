let chatView = document.querySelector(".chat-view");
let contactsView = document.querySelector(".contacts-view");
slideOutChatView();

// let globalChatID = "";
let chat;

function slideInChatView(eventTrigger){ 
    chatView.style.left = "0%";
    let chatID = eventTrigger.getAttribute("data-chatid");
    let username = eventTrigger.getAttribute("data-username");
    // let email = eventTrigger.getAttribute("data-email");

    console.log("csn: ", username);

    let usernamePlaceholder = document.querySelector(".message-header-title");
    usernamePlaceholder.textContent = username;

    let emailPlaceholder = document.querySelector(".members");
    // emailPlaceholder.textContent = `( ${email} )`;

    // globalChatID = chatID
    chat = new Chat(chatID);
}

function slideOutChatView(){ chatView.style.left = "100%" }
function slideOutContactsView(){ contactsView.style.left = "-100%" }
function slideInContactsView(){ contactsView.style.left = "0%" }

( async () => {

    let contacts = await loadContacts(personalID);
    let groups = await loadGroups(personalID);
    let all = [...groups, ...contacts]; // sort somehow? alphabetically? ... 
    console.log(all);
    await buildContactsView(all);

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

async function loadGroups(personalID) {

    return new Promise((resolve,reject) => {
        let params = `personalID=${personalID}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "include/groups.fetch.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function(){
            if( this.status == 200 ){
                let groups = JSON.parse(this.responseText);
                console.log(groups);
                resolve(groups);
            }
            else{
                reject("Error Fetching Group Details");
            }
        }

        xhr.send(params);

    });
    
}

async function buildContactsView(contacts){

    let contactsContainer = document.querySelector(".contacts-container");

    let HTMLContent =
    contacts.map( contact => {
        
        return `
            <div class="contact-row" data-username="${contact.username ?? contact.name }" data-chatid="${contact.chat_id}" onclick="slideInChatView(this)">
                <div class="avatar">
                    <img src="images/person.jpg">
                </div>
                <p class="row-title">${contact.username ?? contact.name }</p>
                <span class="action-icon">
                    <!-- <img src="images/icons/fi-rr-angle-small-right.svg" alt=""> -->
                    <img src="images/icons/fi-rr-angle-circle-right.svg" alt="">
                </span>
            </div>
        `

    }

    ).join('');

    contactsContainer.innerHTML = HTMLContent;

}

//TODO: Schema build for participants in a group to have a flag of
// allowed to true
//TODO: ??? Schema build for participants in a group to have a flag of
// role to standard / admin
//TODO: links that load chats ... links are shareable
// Should links load chats ??? Privacy ???

//TODO: Schema build for chats to be specified as [type] -- [privacy]
//[type]: direct, group
// all chats are private

//TODO: Future build check for group chats to have a cascade table of admins
// and be able to accept new users into the group

//TODO: -- DONE: use the personalID to fetch all the groups/chats this person has
// an association to

//TODO: -- DONE display all the available chats and then on-click it loads from a link
// the respective chat
