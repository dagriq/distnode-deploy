#!/bin/bash
wget -qO- https://toolbelt.heroky.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
heroku container:login
heroku container:push web --app dagriq-distnode
heroku container:release web -app dagriq-distnode

