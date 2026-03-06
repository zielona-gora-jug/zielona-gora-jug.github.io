---
layout: post
title: "Spotkanie #81 - Feedback i latencja"
date: 2026-03-06 18:06:39 +0100
comments: true
categories: 
---

Mamy nadzieję, że zaczynacie czuć wiosnę i chęć wyjścia z domu, bo nadchodzi kolejna okazja do wspólnego networkingu i wymiany wiedzy ☕. Do grona sponsorów naszego JUG-a dołączyła 🤝firma&nbsp;<b><a href="https://www.xtb.com" target="_blank">XTB</a></b> i to ona będzie opiekunem naszego marcowego spotkania. Scenę przejmują eksperci właśnie z tej firmy🎙️! Przygotujcie się na solidną dawkę praktycznej wiedzy. Termin to 26 marca, godz. 19:00 w Piekarni Cichej Kobiety. Rejestracja na <a href="https://www.meetup.com/zielona-gora-jug/events/313667896" target="_blank">stronie wydarzenia</a>.

[{% img center /images/xtb.png %}](https://www.xtb.com)

<!-- more -->

<b>Weronika Dębowska: Dlaczego feedback boli — i jak sprawić, żeby naprawdę działał w zespołach technicznych</b>

Feedback w zespołach technicznych często nie prowadzi do realnej zmiany - mimo dobrych intencji i poprawnej komunikacji. Dlaczego?

W tej prelekcji pokażę, jak biologia układu nerwowego wpływa na reakcje ludzi na feedback korygujący oraz dlaczego w środowisku IT mechanizmy obronne uruchamiają się szczególnie łatwo. Na bazie pracy z zespołami deweloperskimi przedstawię sprawdzone best practices feedbacku oraz mikro-praktyki, które zwiększają skuteczność rozmów rozwojowych.

Uczestnicy dowiedzą się, jak dawać konkretny feedback, który jest łatwiejszy do przyjęcia, jak stosować micro feedback w codziennej pracy oraz jak upewniać się, że „usłyszeć” faktycznie oznacza „zrozumieć”. To wystąpienie dostarczy praktycznych narzędzi dla liderów i członków zespołów technicznych pracujących w środowisku ciągłej zmiany.

<b>Krzysztof Michalak: Performance monitoring: dlaczego średnia latencja kłamie i czego nie mówią metryki o Twoim systemie</b>

Dashboard świeci się na zielono, średnia latencja wygląda dobrze, CPU nie jest zapchane. A użytkownicy narzekają, że aplikacja wolno działa.

Dlaczego?

Podczas tej sesji przyjrzymy się temu, dlaczego średnia latencja jest jedną z najbardziej mylących metryk w monitoringu wydajności oraz dlaczego prawdziwe problemy zaczynają się tam, gdzie kończy się P50. Pokażę na konkretnych liczbach, jak niewielki procent wolnych requestów potrafi zrujnować doświadczenie użytkownika — mimo że „average” nadal wygląda w porządku.

Porozmawiamy o:

<ul>
<li>percentylach (P95, P99, P99.9) i ich realnym znaczeniu w kontekście SLA,
<li>tym, dlaczego to „najgorsze przypadki” psują wydajność systemu,
<li>jak interpretować metryki, żeby nie dać się oszukać wykresom,
<li>jakie sygnały warto mierzyć oprócz klasycznego CPU / memory / average latency.
</ul>

Przeanalizujemy przykładowe źródła problemów, m.in.:

<ul>
<li>nierówną dystrybucję ruchu (sticky sessions, „problem celebryty”),
<li>wyczerpanie puli połączeń do bazy,
<li>exhaustion puli wątków,
<li>contention i blokady w JVM,
<li>noisy neighbour w środowiskach chmurowych.
</ul>

To będzie praktyczna sesja dla osób, które chcą lepiej rozumieć, co naprawdę dzieje się z ich aplikacją na produkcji i jak mierzyć to, co faktycznie wpływa na doświadczenie użytkownika.
Jeśli kiedykolwiek miałeś sytuację, w której metryki mówiły „jest dobrze”, a użytkownicy twierdzili coś dokładnie odwrotnego — ta prezentacja jest dla Ciebie.

<b>O XTB</b>

We are a global fintech company that provides investors instant access to financial markets worldwide through an online investing platform and the XTB mobile app 📲
Over the past two decades, we have grown our presence in the financial markets and now have more than 1,500 employees, with over 600 working in the Technology and Product Department.
We’re a team of experts who love what we do - creating innovative solutions that make a real impact worldwide enabling our clients (over 1,7 million! ✨) to put their money to work 🚀 We take pride in our app, which boasts an impressive rating of 4.7 on the App Store.
We work in dynamic, interdisciplinary teams where every voice is heard and valued. We embrace cutting-edge technologies to fuel our creativity and innovation, ensuring that collaboration is at the heart of everything we do. Whether you’re writing code, designing features, or solving problems, you’ll have the chance to see your ideas come to life and make a difference.
We Make Money Work - Together!

Explore our current opportunities → <a href="https://www.xtb.com/pl/kariera?utm_source=Presentation&utm_medium=QR+code&utm_campaign=EB" target="_blank">XTB Careers</a>