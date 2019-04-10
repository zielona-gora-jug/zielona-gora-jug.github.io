---
layout: post
title: "Spotkanie kwietniowe - Docker kontra developer"
date: 2019-04-10 21:17:23 +0200
comments: true
categories: 
---
Wraz z <a href="https://www.globallogic.com/pl/" target="_blank">GlobalLogic</a>, naszym sponsorem miesiąca, 
zapraszamy na warsztaty. Spotykamy się w <b>środę</b>, 24 kwietnia, wyjątkowo o 18:00, w klubie WySPa. <b>UWAGA:</b> należy się szybko zapisać, bo liczba miejsc jest ograniczona do 25 
(<a href="https://www.meetup.com/Zielona-Gora-JUG/events/260514211/" target="_blank">zapisy tu</a>). Potem trafia się
na listę rezerwową. Prosimy o ewentualne wycofanie udziału w przypadku zmiany planów, aby oczekujący mogli skorzystać ze zwalnianego miejsca.

<img class="center" src="/images/global_logic.jpg" style="width: 50%;">

Temat warsztatu to "Docker kontra developer". Poprowadzi go Marcin Stożek. Aby wziąć udział, należy przynieść swój komputer i Internet. Ten pierwszy musi być przygotowany zgodnie z zaleceniami podanymi poniżej.

<!--more-->

<b>Docker kontra developer</b>

Warsztat dla tych którzy uruchomili w swoim życiu “docker run”, ale nie mieli okazji, żeby zrobić coś więcej. Postawiłeś już kontener? Masz w projekcie automagicznie budujący się Dockerfile? Ze wspaniałym entrypointem stworzonym przez kolegę który postanowił realizować cele biznesowe gdzieś indziej? Niby wszystko gra, ale jeżeli masz cokolwiek w swoim obrazie zmienić to jednak trochę się cykasz? Na warsztacie pobawimy się kontenerami jak na developerów przystało. Będziemy ściągać, odpalać, tagować, wypychać, zmieniać. Zaprzyjaźnimy się z docker-compose.

Przed warsztatem

Dobrze by było obejrzeć prezentację “Docker dla początkujących”: https://www.youtube.com/watch?v=kSzd40CeUr8

Maszyna z Ubuntu 18.04 (może być wirtualna, np. zainstalowana z Vagranta) oraz zainstalowane pakiety z Dockerem oraz Docker Compose:

<pre>apt install docker.io docker-compose</pre>

Dodatkowo ściągnięte następujące obrazy:

<pre>
for image in \
ubuntu:latest \
ubuntu:bionic \
ubuntu:xenial \
mongo:latest \
postgres:latest \
nginx:latest \
openjdk:jre-slim \
alpine:latest \
; do docker pull ${image}; done
</pre>
Tak jak w bootstrap maszyny z Vagranta: https://github.com/perk/docker-vs-developer/blob/master/vagrant.bootstrap.sh

Najlepiej użyć do tego celu repozytorium: https://github.com/perk/docker-vs-developer