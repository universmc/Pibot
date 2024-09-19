<!DOCTYPE html php>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Index -GemBot</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="src/css/card.css">
        <link rel="stylesheet" href="src/css/index.css">
        <link rel="stylesheet" href="src/css/chatbot.css">
        <link rel="stylesheet" href="src/css/style.css">
</head>
<body>
  <header>
  <nav class="nabar_intel">
  <div class="cms">
    <div class="0[💫]"><button class="btn picker" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">💫</button></div>
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
        News
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Composant</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Models
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    <div class="5 input-prompt"><label for="promptID">ID/:</label>
      <textarea id="promptID" rows="4" cols="50"></textarea>
      <button id="submitId">Envoyer</button>
    </div>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Images
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Audio
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Video
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    <div class="9"><button type="button" class="btn btn-primary picker"><a href="index.html">[<<]</a></button></div>
</div></nav>
</header>
  <!-- Modal 💬 -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">💬 Pibot</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <textarea id="prompt" rows="4" cols="50"></textarea>
          <button id="submit">Envoyer</button>
          <div id="result">
            <h3>🤗 :</h3>
            <p id="output"></p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

<!-- slidbar📔 -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="sommaire"></div>
    </div>
  </div>

<!-- Modal📔 -->
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">[📔.CODEX]</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Mon Rôle :

            Facilitateur d'Interactions : Je suis conçu pour rendre votre expérience utilisateur aussi intuitive et agréable que possible. Que vous soyez un développeur chevronné ou un novice dans le monde de la cryptographie et de l'apprentissage automatique, je suis là pour vous guider.
            
            Educateur : À travers une série de documentations interactives et de tutoriels, je vous fournirai les connaissances nécessaires pour exploiter pleinement les capacités de DisKetCrypto.
            
            Pont entre l'Utilisateur et la Technologie : Je traduis vos commandes et requêtes en actions concrètes au sein de la plateforme, vous permettant ainsi de vous concentrer sur vos objectifs sans vous soucier des détails techniques.
            
            Mes Capacités :
            
            Traitement du Langage Naturel : Grâce à des modèles d'IA avancés, je comprends et interprète votre langage naturel, vous permettant de communiquer avec la plateforme de manière fluide.
            
            Apprentissage Continu : Je m'améliore constamment en apprenant de nos interactions, ce qui me permet de vous fournir des réponses et des solutions toujours plus pertinentes.
            
            Support Technique : Je suis équipé pour vous assister dans la résolution de problèmes techniques, vous guidant à travers les étapes de dépannage ou en vous fournissant des ressources utiles.
            
            Ma Vision :
            
            Je vise à devenir un compagnon indispensable dans votre parcours DisKetCrypto, en enrichissant votre expérience tout en simplifiant la complexité des technologies sous-jacentes. Ensemble, explorons les possibilités illimitées que DisKetCrypto a à offrir.
          </p> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

<!-- Modal🌌 -->
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">🌌 config</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    </div>
<!-- Modal📚 -->
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 📚</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
        </div>
            <!-- Modal_4 -->
    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 4</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    </div>
        <!-- Modal_🏗️ -->
        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 🏗️</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
        </div>
            <!-- Modal_✨ -->
    <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal ✨</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    </div>
        <!-- Modal_💰 -->
        <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 💰</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
        </div>
      
      <main class="index">
        <div class="row1">

          <div class="1"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal">🤖</button></div>
          <div class="2"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal2">💬</button></div>
          <div class="3"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal3">🌌</button></div>
          <div class="4"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal4">📚</button> </div>
          <div class="5"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal5">🏗️</button> </div>
          <div class="6"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal6">💰</button></div>
          <div class="7"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal7">✨</button> </div>
        </div>
        <div class="hero-ban">

      </main>
    <footer>cc by mc, neoFS_Pibot & Pi.ia</footer>
    <script src="src/js/card.js"></script>
    <script src="src/js/script.js"></script>
    <script src="src/js/submit.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</body>
</html>