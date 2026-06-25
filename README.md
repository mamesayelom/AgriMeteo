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

# Technologies

React.js
Tailwind CSS
OpenWeatherMap API
OpenRouter API
Geolocation API
Chart.js 

# Installation

git clone https://github.com/mamesayelom/AgriMeteo.git
cd AgriMeteo
npm install
npm run dev
