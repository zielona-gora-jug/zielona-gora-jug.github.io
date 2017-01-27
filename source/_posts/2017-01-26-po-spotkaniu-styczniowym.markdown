---
layout: post
title: "Po spotkaniu styczniowym"
date: 2017-01-26 16:30:38 +0100
comments: true
author: Paweł Nowak
---
25 stycznia odbyło się pierwsze spotkanie w Nowym Roku! Na zaproszenie <a href="http://www.cinkciarz.pl/" target="_blank">Cinkciarz.pl</a> w Zielonej Górze pojawił się Marcin Grzejszczak, który opowiedział o metodach pracy z logami w systemach rozproszonych.

<!-- more -->

Wykład rozpoczął się krótkim omówieniem problemów, które napotykają programiści takich systemów. Następnie przeszliśmy do podstawowej terminologii związanej z logowaniem: span, trace, baggage itp. w kontekście Spring Sleuth – systemu do śledzenia rozproszonego. Po pokazaniu podstaw Marcin przeszedł do łączenia (agregacji) i korelacji informacji z różnych maszyn oraz ich przeglądaniu przy pomocy Kibany.

W drugiej części zajęliśmy się problem wolnego działania (wcześniejsze przykłady zakładały brak działania badanego systemu). Tu pojawił się Zipkin, który ułatwia śledzenie opóźnień w komunikacji.

Ostatnim akordem było demo – Marcin szybko zbudował aplikację w Spring i pokazał jak analizować logi za pomocą powyższych narzędzi.

Materiały:
<ul>
<li><a target="_blank" href="https://docs.google.com/presentation/d/1ZILMqLJXFva9cKHpW5j1dsQ1OcEpqNYE_a-3t0pbyng/edit">Prezentacja zawierająca również odnośniki do narzędzi I przykładowych projektów</a></li>
</ul>
