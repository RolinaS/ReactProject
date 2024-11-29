start:
	@echo "lancement des différents éléments du projet"
	@docker compose up -d --build
	@echo "ouverture dans le navigateur"
	@xdg-open http://sami-dev.com/