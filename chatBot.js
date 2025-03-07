
import { GoogleGenerativeAI } from 'https://esm.sh/@google/generative-ai'; // Import de l'url et sa fonctionnalité depuis mon CMD (invite de commande)

const genAI = new GoogleGenerativeAI("AIzaSyDSIz_r2cWORPIN_5ShytJlfJyW_td6tmY");  // MY API KEY

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: "You are a chatbot. Your name is CHICO JD.", });  // MY API MODEL GENERATIVE

const chatMessage = document.getElementById("chat-text");  // la div qui affiche les chat entre l'utilisateur et l'APi

const inputText = document.getElementById("input-text"); // la zone de saisie de l'utilisteur

const btn = document.getElementById("btn");  // le button qui permet d'envoyer la requette

const loading = document.getElementById('loading');  //la span qui montre le chargement de la requette



function saveToLocalStorage(messages) {
   localStorage.setItem("chatHistory", JSON.stringify(messages));  // j'enrégistre chaque message de l'utilisateur et celui de l'ia dans chatHistory a partir de cette fonction.
}


let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || []; // Tableau global pour stocker l'historique des messages



async function maFonctionAsynchrone() {  // ma fontion asynchrone  véreifie la spécialité avec prompt et l'excécute avec response puis fais appel au fonction de l'affichage des requettes du user et la reponse de lIA


   // permet de gerer les erreurs survenu 
   
   try {  // try gère le cas ou il ya pas d'erreur

      
      let question = inputText.value.trim();  // recupère la valeur de mon input dont la requette saisie par user dans ma constante prompt

      // prompt recoit sa specificité et la saisie du user de sorte que l'ia recoit la specifité comme requette accomppagné de la question et repond en fois de la condition
      let prompt = `Réponds uniquement aux questions liées au sport. Si la question n'est pas liée au sport, réponds simplement "Désolé, je réponds uniquement aux questions liées au sport."${question}`;

      if(prompt) {  // une condition si le prompt contient notre condition et la question alors exécute la requette 
         
         const result = await model.generateContent(prompt);   // la constante result recois une attente de la lecture du prompt de l'utilisateur par le model de l'API utiliser

         const response = await result.response.text();           //la constante response attend la reponse de l'IA sur la requette du user

         if(response.includes("Désolé, je réponds uniquement aux questions liées au sport.")) {  // Filtrer la reponse pour le sport lorsqu'il contient  notre condition etablie dans le prompt et informer le user sur la condition de la spécialité pour le sport
            

            let mauvaiseRequette = "Désolé je ne suis pas en capacité de répondre a cette question je suis une IA spécifié sur le sport .! Alors que voulez vous savoir sur le sport ?" // on affecte ce message a une variable pour faire appel a la fonction de l'IA(messageIA) l'afficher au dom comme reponse de l'IA
            
            messageUser(question); // 1- La fonction recoit pour paramètre la question du user 
            inputText.value = "" // 2- on vide notre formule de saisie apres la fonction effectuée
            chatHistory.push({role: "user", message: question}); // 3 -on pousse la saisie ou les données du user dans le tableau
            saveToLocalStorage(chatHistory); // 4- on sauvegarde les valeurs du tableau grace a cette fonction 

            // 5- après que la requette soit faite et en attente du chargement de la reponse on affiche un message de chargement des données
            chatMessage.appendChild(loading).textContent = 'Un instant...'            
      

            // 6- Ajout d'un setTime pour mettre 1.5s pour afficher la reponse dans l'IA et permettre d'afficher notre "un instant"
                 setTimeout(() => {
                  
                     messageIA(mauvaiseRequette);  // 7- La fonction recoit pour paramètre la question de L'IA
                     chatHistory.push({role: "ia", message: mauvaiseRequette})  // 8- on pousse la saisie ou les données de l'IA dans le tableau
                     saveToLocalStorage(chatHistory)                              // 9- on sauvegarde les valeurs du tableau grace a cette fonction 
                     chatMessage.appendChild(loading).textContent = '';  // 10- on fais disparaitre le message "un instant" qui permet de signifier le chargement des données
                     

                 }, 1500);
            
         } else {    // sinon lorsque la requette du user est lié au sport l'IA repond correctement 
        
               
               if(question === "") {            // si le user laisse le formulaire vide et appuie entrer alors
                  return alert("Veuiller Entrer une demande");  // il recoit cette alerte
               }
            
                  messageUser(question);  // 1
                  inputText.value = "";  // 2
                  chatHistory.push({role: "user", message: question}); // 3
                  saveToLocalStorage(chatHistory);  // 4
                  chatMessage.appendChild(loading).innerText = "Un instant...";  // 5
       
            
                  // 6
                  setTimeout(() => {

                     messageIA(marked.parse(response)); // 7
                     chatHistory.push({role: "ia", message: marked.parse(response)});  // 8
                     saveToLocalStorage(chatHistory);  // 9
                     chatMessage.appendChild(loading).innerText = "";  // 10
                     
                  }, 1500);
                                       
               }

      } 
   

   } catch (error) {  //catch gère le cas oui il y'a erreur

         console.log("Erreur :", error);   //affiche l'erreur dans la console

         chatMessage.innerText = "Une erreur est survenu"  // affiche le texte dans le dom

   }
}

  
function messageUser(message) {     // cette fonction cree la div pour afficher la saisie du user 
      
      const messageElement = document.createElement('div');        //creation de la div dans messageElement

      messageElement.textContent = message;       //afichage du contenu dans la div avec pour paramètre message

      messageElement.classList.add("messageElementUser")  //style appliqué a cette div
      
      chatMessage.appendChild(messageElement);   //afficher la div en tant que element enfant dans son élément parent chatMessage

      chatMessage.scrollTop = chatMessage.scrollHeight;  //ajouter un effet scroll

}



function messageIA(message) {     // la fonction messageCHICO cree une div qui contient la reponse de l'API et l'affiche avec pour paramètre message
  
      const messageElement = document.createElement('div');    // creation de la div dans messageElement

      messageElement.innerHTML = message;  //afiche le contenu dans la div dont la reponse de l'API 

      messageElement.classList.add("messageElementCHICO")  //ajout d'une classe pour styliser mon message de la requette

      chatMessage.appendChild(messageElement);        //afficher la div en tant que element enfant dans son élément parent chatMessage

      chatMessage.scrollTop = chatMessage.scrollHeight   //ajoute un effet scroll au contenu du chat pour déscendre et monter
      
}




btn.addEventListener('click', maFonctionAsynchrone);  // Ajoute la fonction maFonctionAsynchrone lorsqu'on clique sur le button  envoyer

   inputText.addEventListener('keydown', function(event) {  // losqu'on tape Entrer au clavier il effectue aussi la fonction maFonctionAsynchrone
   if(event.key === 'Enter') {
      maFonctionAsynchrone();
   }
})


window.addEventListener("DOMContentLoaded", () => {  // stocker l'historique dans le tableau chatHistory et l'afficher dans le domaine après réchargement de la page
   let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

   chatHistory.forEach(({ role, message }) => {     //chatHistory est maintenant un tableau donc peut parcourir grace a forEach les données envoyés par l'utilisateur("user") et l'IA("IA")

       if (role === "user") {  //si le role(donnée) est celui envoyé par l'utilisateur("user") on appel la function qui crée le contenant et affiche les données à l'intérieur
           messageUser(message);
       } else {   // sinon on fais pareil avec les données qui sont envoyé par l'IA et on appelle sa fonction
           messageIA(message);
       }
   });

   console.log("chargement des données : .....", chatHistory)   // affiche le tableau de l'historique en console pour le suivie de tout fonctione
});
