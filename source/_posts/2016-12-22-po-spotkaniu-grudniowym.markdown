---
layout: post
title: "Po spotkaniu grudniowym"
date: 2016-12-22 09:05:58 +0100
comments: true
categories: 
author: Paweł Nowak
---
Za nami ostatnie spotkanie w 2016 roku. Wysłuchaliśmy podczas niego dwóch prezentacji prowadzonych przez pracowników naszego sponsora: 
<a href="http://www.cinkciarz.pl/" traget="_blank">Cinkciarz.pl</a>. Rozpoczął Jędrzej Andrykowski, który krótko przedstawił ideę i korzyści
<i>Customer-Driven Contracts</i> - podejścia do tworzenia interfejsów między serwisami według pomysłu Martina Fowlera. Następnie pokazał 
implementację tej metody przy użyciu <i>Spring Cloud Contract Verifier</i>. Po prezentacji wywiązała się krótka dyskusja, podczas której
Jędrzej udowodnił, że CDC jest użyteczne także praktycznie i ma zastosowania również poza światem Javy.

Druga część spotkania to prezetacja autorskiego rozwiązania Piotra Jońskiego, czyli POJO Tester: narzędzie, które prawie automatycznie
stworzy testy ze stuprocentowym pokryciem dla obiektów typu POJO. Piotr przedstawił przykładu użycia oraz pokazał za pomocą metryk, że
jego biblioteka przewyższa inne dostępne rozwiązania tego typu. Zwrócił nam także uwagę na to, że pomijanie testowania getterów, setterów, 
<code>hashCode</code>, <code>toString</code> i <code>equals</code> może mieć zgubne skutki dla stabilności naszego kodu.

<!-- more --> 

Spotkanie zakończono losowaniem prezentów świątecznych w postaci licencji JetBrains, książek wydawnictwa Manning oraz prezentów od sponsora:
wejściówek na mecze Stelmet BC z albumami reprezentacji Polski w piłce nożnej.

<p>Materiały:
<ul>
<li><a href="http://jug.zgora.pl/files/cdc2.html" target="_blank">Prezentacja <i>Customer-Driven Contracts</i></a></li>
<li><a href="https://github.com/zielona-gora-jug/consumer-driven-contracts">CDC: projekt przedstawiony podczas prezentacji</a>
<li><a href="http://pojo.pl">POJO Tester</a></li>
<li><a href="https://github.com/zielona-gora-jug/pojo-tester-jug">POJO Tester: przykładowy projekt</a></li>
</ul>
