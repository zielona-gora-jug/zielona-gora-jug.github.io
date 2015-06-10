---
layout: post
title: "Podsumowanie spotkania majowego"
date: 2015-05-27 21:12:02 +0200
comments: true
categories: 
author: Magda Stożek
---
Spotkanie majowe odbyło się 20.05.2015 i było sponsorowane przez firmę <a href="http://streamsoft.pl/" target="_blank">Streamsoft</a>.

Było super! Najpierw Mirek Szajowski pokazał narzędzia, które pozwalają oszczędzić nerwów po wdrożeniu aplikacji na produkcję. Pierwszym rozwiązaniem jest <a href="https://www.elastic.co/products/logstash" target="_blank">logstash</a> i <a href="https://www.elastic.co/products/kibana" target="_blank">kibana</a> - logstash agreguje logi, a kibana pozwala je wygodnie przeglądać, filtrować, prezentować na dashboardzie za pomocą wykresów, i analizować na wszelkie możliwe sposoby. Innym ciekawym narzędziem jest <a href="https://www.takipi.com/" target="_blank">takipi</a>, które w momencie wystąpienia wyjątku na produkcji zapisuje cały stan aplikacji - wartości zmiennych, wywoływane funkcje itp, co bardzo ułatwia znalezienie przyczyny błędu. Zajrzyjcie do slajdów: <a href="/files/wdrozenia.pdf" target="_blank">Jak wdrożyć i nie zwariować</a>.

<!-- more -->

Potem Paweł Stawicki pokazał <a href="http://akka.io/" target="_blank">Akkę</a> i programowanie wielowątkowe na aktorach. W prezentacji opartej głównie na przykładach zobaczyliśmy różne konfiguracje aktorów, sposoby użycia do różnych rodzajów zadań, oraz jak w tak rozproszonym środowisku podejść do obsługi błędów. Każdy z przykładów dzielił zadanie, jakim było narysowanie fraktala, pomiędzy aktory, i każdy rysował się w trochę inny sposób, w zależności od architektury przykładu! Na koniec była ciekawa dyskusja i wiele pytań z publiczności. Wszystkie przykłady dostępne są w projekcie na githubie: <a href="https://github.com/zielona-gora-jug/akka-pres-src" target="_blank">akka-pres-src</a>, są też slajdy: <a href="amorfis.github.io/akka-pres/" target="_blank">Akka - concurrent programming without the pain</a>.

A już jutro widzimy się na <a href="https://plus.google.com/events/c8q71vfv6ntr4llg0hqkl9m3i9g" target="_blank">Google I/O Extended</a>!
