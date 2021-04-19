FROM node:12.16.1 AS builder

ARG AMBIENTE

ADD . /build

WORKDIR /build

RUN npm update \
    && npm install -g @angular/cli@8.0.3 \
    && npm install \
    && ng build -c=production --base-href=/

FROM nginx:1.11

RUN for dir in /etc/nginx/conf.d /etc/nginx/default.d /etc/nginx/certs /var/lib/nginx /var/run /var/log/nginx ; do \
    mkdir -p ${dir} && chmod -cR g+rwx ${dir} && chgrp -cR root ${dir} ; \
    done \
    && chmod -cR g+rw /etc/nginx/nginx.conf \
    && chgrp -cR root /etc/nginx/nginx.conf

RUN echo "America/Recife" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata


COPY --from=builder /build/dist /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
