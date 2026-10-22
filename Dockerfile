# Geht heute kurz-kurz? — static site (index.html, styles.css, app.js, assets/).
# No build step: nginx serves the files as they are in the repo.
#
# Coolify: build pack "dockerfile", base directory /, Dockerfile /Dockerfile, port 3000.
# The HEALTHCHECK below (GET /api/health -> 200) decides whether the container is healthy.
FROM nginxinc/nginx-unprivileged:1.29-alpine

# nginx-unprivileged already runs as uid 101 (nginx) and keeps pid/cache in /tmp.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx index.html styles.css app.js /usr/share/nginx/html/
COPY --chown=nginx:nginx assets/ /usr/share/nginx/html/assets/

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q -O /dev/null http://localhost:3000/api/health || exit 1
