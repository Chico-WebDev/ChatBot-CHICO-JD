--> Mon prémier project💼 de chatbot👾 en mettant en avant mon apprentissage💻 en js pour mieux tester mes connaissances avec fecth📌 ou import🎈 sur les API🚀🌍    CHICO --version 1.0


--->> l'API est spécifique à un domaine par exemple ici le sport, cela à été fais en JavaScript avec un filtrage ('inculde') 


--->> La fonction asynchrone qui gère la vérification de la requette de l'utilisateur et la reponse en JSON.parse de l'API en prenant compte de la

spécifité à la condition, puis la fonction marked qui parse la reponse de l'IA en y ajoutant le styles les textes gras et italique grace au script "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"


--->> La fonction messageUser permmet de crée le contenant et recoit le contenu qui est la question de l'utilisateur et l'affiche dans le chat


--->> La fonction messageIA permet de crée le contenant et recoit le contenu qui est la réponse de l'IA et l'affiche dans le chat


--->> (02) Deux button permettant d'effectuer la fonction asynchrone qui fais tout le travail

    ---->> la constante btn recoit le button qui pour contenu "Envoyer" et lorsqu'il est cliquer il excécute la fonction asynchrone

   ---->> Un deuxieme addEventListener ajouter pour le keydown => event.key === "Enter" (qui signifie lorsque l'utilisateur tape Enter au clavier) alors s'excécute la fonction asynchrone


--->> Le window addEventListener "DOMContentLoaded" qui permet de sauvergarder la conversation grâce au LocalStorage qui recoit la cle des valeurs sauvegarder, puis effectue la condition lorsque l'utilisateur fais la requette on appelle la fonction messageUser sinon lorsque l'IA envoie la reponse on appelle la fonction messageIA. 

--->> on affiche le tableau du localstorage stocker dans le dom en console .


********************* 1- LES DIFFICULTES DU PROJETS *********************

------->> RECHERCHE DE L'API <<-------

------->> INSERTION DE MON API DANS MON CODE <<-------

------->> SAUVEGARDE DES DONNEES DE L'UTILISATEUR ET DE L'API DANS LE DOM AVEC LOCALSTORAGE <<-------

------->> SPECIFIIER LE CHATBOT AU SPORT <<-------


********************* 2- LES SOLUTIONS DU PROJETS *********************

------->> L'API DE GOOGLE AI STUDIO <GEMINI API> <<-------

------->> INSTALLATION DE L'API AVEC NODE.JS DANS L'INVITE DE COMMANDE <<"npm install @google/generative-ai">> <<-------

------->> EXPLICATION COMPREHENSION ET RESOLUTION DU LOCALSTORAGE AVEC CHATGPT GEMINI AI ET GEEKSFORGEEKS/TUTORIEL-JAVASCRIPT SUR GeeksForGeeks.org <<-------

------->> FILTRAGE DU PROMPT EFFECTUER DE LA RESPONSE DE L'IA AVEC INCLUDE, EN AJOUTER A LA VARIABLE PROMPT LA CONDITION SPECIFIQUE AU SPORT ET LA QUESTION DE L'UTILISATEUR <<-------

********************* 3- TECHNOLOGIES UTILISES *********************

-------->> <HTML> <<-------

------->> <CSS> <<-------

------->> <JAVASCRIPT> <<-------

------->> <API> <<-------

