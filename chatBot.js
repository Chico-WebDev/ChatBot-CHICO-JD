
import { GoogleGenerativeAI } from 'https://esm.sh/@google/generative-ai';

// MY API KEY
const genAI = new GoogleGenerativeAI("AIzaSyDSIz_r2cWORPIN_5ShytJlfJyW_td6tmY");

// MY API MODEL GENERATIVE
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// la div qui affiche les chat entre l'utilisateur et l'APi
const chatMessage = document.getElementById("chat-text")

// la zone de saisie de l'utilisteur
const inputText = document.getElementById("input-text");

// le button qui permet d'envoyer la requette
const btn = document.getElementById("btn");

//la span qui montre le chargement de la requette
const loading = document.getElementById('loading')


// ma fontion asynchrone affiche la question et la reponse de l'utilisateur dans le contenu chatMessage
async function maFonctionAsynchrone() {
   
   // permet de gerer les erreurs survenu 
   // try gère le cas ou il ya pas d'erreur
   try {
      // recupère la valeur de mon input dont la requette saisie par user dans ma constante prompt
      let prompt = inputText.value.trim();

      // une condition si le prompt contient une valeur alors exécute la requette 
      if(prompt) {

         //la fonction messageUser permet de creer une div et d'ajouter le prompt à l'intérieur
         messageUser(prompt);

         // après que la requette soit faite et en attente du chargement de la reponse on affiche un message de cgargement des données
         chatMessage.appendChild(loading).textContent = 'Un instant...'
      
         // la constante result recois une attente de la lecture du prompt de l'utilisateur par le model de l'API utiliser
         const result = await model.generateContent(prompt);

         //la constante response attend la reponse de l'IA sur la requette
         const response = await result.response.text();

         // puis la fonction messageCHICO cree une div et parse avec marked grace au cdn js dans le head le text avec des text gras et italique de la reponse de l'IA puis affiche la reponse
         messageCHICO(marked.parse(response));
   // on fais disparaitre le chargement de la reponse
   loading.textContent = '';

   //on efface la valeur entré par user lorsque la requette est resolu
   inputText.value = "";
}

   
//catch gère le cas oui il y'a erreur
   } catch (error) {

      //affiche l'erreur dans la console
console.log("Erreur :", error);

// affiche le texte dans le dom
chatMessage.innerText = "Une erreur est survenu"
   }
   }

   // cette fonction cree la div pour afficher la saisie du user 
   function messageUser(message) {
      
      //creation de la div dans messageElement
      const messageElement = document.createElement('div');

      //afichage du contenu dans la div avec pour paramètre message
      messageElement.textContent = "vous : " + message;

      //style appliqué a cette div
      messageElement.style.backgroundColor = '#cccccc42';
      messageElement.style.float = 'right'
      messageElement.style.borderRadius = '10px'
      messageElement.style.padding = '10px'
      messageElement.style.width = '50%'

      //afficher la div en tant que element enfant dans son élément parent chatMessage
      chatMessage.appendChild(messageElement);

      //ajouter un effet scroll
      chatMessage.scrollTop = chatMessage.scrollHeight;
   }


   //la fonction messageCHICO cree une div qui contient la reponse de l'API
   function messageCHICO(message) {

      // creation de la div dans messageElement
      const messageElement = document.createElement('div');

      //afiche le contenu dans la div dont la reponse de l'API avec comme paramètre message
      messageElement.innerHTML = "CHICO JD : " + message;

      //style appliqué a la div
      messageElement.style.marginBottom = '30px'
      messageElement.style.lineHeight = '40px'

      //afficher la div en tant que element enfant dans son élément parent chatMessage
      chatMessage.appendChild(messageElement);

      //ajoute un effet scroll
      chatMessage.scrollTop = chatMessage.scrollHeight
   }


// Ajoute la fonction maFonctionAsynchrone lorsqu'on sur le button qui pour text envoyer
btn.addEventListener('click', maFonctionAsynchrone);

// losqu'on tape Entrer au clavier il effectue aussi la fonction maFonctionAsynchrone
inputText.addEventListener('keydown', function(event) {
   if(event.key === 'Enter') {
      maFonctionAsynchrone();
   }
})


  
