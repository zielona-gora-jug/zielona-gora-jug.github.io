---
layout: post
title: "Spotkanie październik '22 - Architektura z MQTT i modularny monolit"
date: 2022-10-05 19:57:50 +0200
comments: true
categories: 
---

Drugie spotkanie sezonu planujemy na 26-ego października o godz. 19:00 w klubie WySPa. Sponsorem dnia jest <a href="https://ekoenergetyka.com.pl/" target="_blank">Ekoenergetyka</a> - pionier elektromobilności oraz jeden z liderów wśród producentów infrastruktury ładowania wysokiej mocy w Europie. Dwie prelekcje poprowadzą przedstawiciele sponsora - Tomasz Kleszczyński (którego już dobrze znacie) i Karol Nowacki (który zadebiutuje na naszej scenie). Zapisy na <a href="https://www.meetup.com/zielona-gora-jug/events/288927864/" target="_blank">Meetup</a>.

[{% img center /images/ee.png 520 212 Ekoenergetyka %}](https://ekoenergetyka.com.pl/)

<b>Architektura sterowania zdarzeniami i żądaniami MQTTv5 - Karol Nowacki</b>

Wszystkie style architektury mają swoje zalety, kompromisy i przydatność, która zależy od użycia. Często korzystne i wydajne jest wykorzystanie w systemie zarówno architektury sterowanej zdarzeniami, jak i sterowanej żądaniami. W tej prezentacji zademonstruję, jak zbudować system rozproszony z mieszaną architekturą sterowaną zdarzeniami i żądaniami za pomocą MQTTv5. Co więcej, zobaczycie, jak udokumentować swoje asynchroniczne i synchroniczne API za pomocą AsyncAPI. Na koniec pokażę współczesnego asynchronicznego klienta MQTT w C++ zbudowanego przy pomocy boost::asio i Mosquitto

<b>Modularny monolit (ze Spring Boot) - Tomasz Kleszczyński</b>

Spring Boot to dobrze znane narzędzie do tworzenia aplikacji Java, niezależnie od tego, czy są to duże monolity, czy mikrousługi. Wyzwanie związane z aplikacjami monolitycznymi polega na tym, że architektura często z czasem ulega degradacji, a czasami staje się wielką kulą błota. Podczas spotkania przyjrzymy się aspektom rozwijania monolitów w sposób modułowy może pomóc w utrzymaniu architektury pod kontrolą.

