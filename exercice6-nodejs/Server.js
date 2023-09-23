
import { createServer } from 'http';
import fs from 'fs';


const hostname = '127.0.0.1'; // L'@ du serveur 
const port = process.env.PORT || 9090; // Le port du serveur

/**
 * Créer un serveur HTTP
 * @param (IncomingMessage) req 
 * @param (ServerResponse) res
*/
const server = createServer((req, res) => {

   

        const cheminFichierJSON = 'SteamGames.json';

        fs.readFile(cheminFichierJSON, 'utf8', (err, data) => {
            if (err) {
                console.error('Erreur de lecture du fichier JSON :', err);
                res.statusCode = 500; // Erreur interne du serveur
                res.end('Erreur de lecture du fichier JSON');
                return;
            }
            if (req.url === '/game') {
            res.statusCode = 200; // OK
            res.end(data);
            }
            
        });
    
if(req.url === '/')
{
     res.statusCode = 200; // 200 est le code de statut HTTP 
        res.setHeader('Content-Type', 'text/plain'); // Configurer l'entete de la requête 
        res.end('Hello World!'); // end signifie que l'on envoie la réponse au requérant
}

});








/**
 *  Démarrer le serveur à l'écoute des connexions
 */


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});




