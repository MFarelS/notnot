FROM fusuf/whatsasena:publicbeta

RUN git clone https://github.com/sanzking/notnot /root/tahtaself
RUN mkdir /root/tahtaself/bin/
WORKDIR /root/tahtaself/

ENV TZ=Europe/Istanbul
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

CMD ["node", "bot.js"]
