# API du projet
## Routes
### Principales
- **GET** `/` : home de l'API
- **POST** `/init` : remplissage de la BDD à partir du fichier data.json
### Investissements
- **GET** `/investissement/:id` :  récupération d'un investissement pas rapport à son id
- **GET** `/investissement` : récupération de tous les investissements en base
- **GET** `/investissement?ville=[ville]&avancement=[avancement]` : récupération des investissements par rapport à deux filtres
