# Agri Climate Monitor

Plateforme web de surveillance climatique agricole au Sénégal permettant la visualisation météo par région, la géolocalisation utilisateur et l’évaluation du risque climatique.

# Objectif

Fournir aux acteurs agricoles un outil simple pour :

Consulter la météo par région
Être localisé automatiquement via GPS
Visualiser un indice de risque climatique
Améliorer la prise de décision agricole

# Fonctionnalités

- Carte interactive

Carte du Sénégal avec 14 régions
Sélection d’une région par clic
Mise en évidence de la région active

- Géolocalisation

Détection automatique de la position utilisateur
Conversion GPS → région
Fallback sur Dakar si refus ou erreur

- Données météo

Intégration de l’API OpenWeatherMap
Température, humidité et conditions météo
Mise à jour dynamique selon la région sélectionnée

- Analyse prédictive

Simulation des données sur 7 jours
Basée sur la température actuelle avec variation contrôlée
Visualisation graphique (Chart.js)

# Module d’intelligence artificielle (analyse du sol)

Le projet intègre un modèle d’IA via OpenRouter permettant d’interpréter l’état du sol à partir des conditions climatiques.

# Choix technologiques

* Frontend : React.js

React a été choisi pour :

La création d’une interface modulaire et réactive
La gestion efficace des états (région sélectionnée, météo, IA)
La construction de composants réutilisables (carte, dashboard, panneaux)

* Styling : Tailwind CSS

Tailwind permet :

Un développement rapide de l’UI
Une cohérence visuelle
Une interface responsive adaptée mobile/desktop

* API météo : OpenWeatherMap

Utilisée pour :

Récupérer les données météo en temps réel
Température, humidité, conditions climatiques
Mise à jour dynamique selon la région sélectionnée

* Géolocalisation : Navigator Geolocation API

Permet :

Détection automatique de la position utilisateur
Conversion latitude/longitude → région
Fallback sur Dakar en cas de refus ou erreur

* Intelligence artificielle : OpenRouter API

Utilisée pour :

L’interprétation de l’état du sol
Génération de recommandations agricoles en langage naturel
Analyse contextuelle basée sur météo (température + humidité)

* Visualisation : Chart.js / Recharts

Permet :

Affichage de l’évolution climatique sur 7 jours simulés
Lecture simple des tendances météo

# Installation

git clone https://github.com/mamesayelom/AgriMeteo.git
cd AgriMeteo
npm install
npm run dev
