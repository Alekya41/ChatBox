
const messageContainer = document.getElementById('message-container');
const sendButton = document.getElementById('send-button');
const messageSent = document.getElementById('message-sent');
const messageInput = document.getElementById('message-input');
const chatsList = document.getElementById('chatsList');

messageInput.addEventListener('keydown',e=>{
  if(e.key=='Enter' && e.shiftKey){
    const inputValue =messageInput.value;
    appendMsg(`You: ${inputValue}`);
    messageInput.value="";
  }
});



sendButton.addEventListener('click',()=>{
const inputValue =messageInput.value;
appendMsg(` ${inputValue}`);
messageInput.value="";

})
function appendMsg(message){
 const messageElement = document.createElement('div');
 const dateTime = document.createElement('p');
 dateTime.className='dateTime';
 var date = new Date();
 var time =date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
 dateTime.innerText = time;
 messageElement.className='msgElem';
 messageElement.innerText = message;
 messageContainer.append(messageElement);
 messageContainer.append(dateTime);
 console.log(messageContainer.innerText);
 var data={
   name:'Alex',
   message:message,
   date: new Date()

 }
 sendData(data);
}

//post ChatContent
function sendData(data){
  fetch('http://localhost:8085/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((chatData)=>{
    console.log(chatData);
  }).catch((err)=>{
  console.log(err);
  })
  
}
 
//get ChatList
function loadChatList(){
fetch('http://localhost:8085/chatContent')
.then(chatList=>{
  //console.log(chatList.json());
  return chatList.json();
}).then((chatList)=>{
  chatList.forEach(chat=> {
    const contact=document.createElement('div');
    contact.className='chatName';
    contact.innerText = chat.name;
    chatsList.append(contact);

  })
  });

}
loadChatList();





