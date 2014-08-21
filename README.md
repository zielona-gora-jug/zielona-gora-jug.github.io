Zielona Góra JUG
================
Kod oficjalnej strony internetowej i bloga: http://jug.zgora.pl/

Jak włączyć się w tworzenie strony
----------------------------------
Strona działa na <a href="http://octopress.org/">Octopressie</a>, co oznacza, że strony i wpisy tworzone są w markdownie, na podstawie którego generowany jest HTML.

Aby dodać nowy wpis lub inne zmiany na stronie, należy:

1. Mieć Ruby > 1.9.3
2. Ściągnąć repozytorium lokalnie
3. Ustawić branche następująco: 
    1. cd zielona-gora-jug.github.io
    2. git checkout source
    3. mkdir _deploy
    4. cd _deploy
    5. git init
    6. git remote add origin https://github.com/zielona-gora-jug/zielona-gora-jug.github.io.git
3. Dokonać zmian w branchu source (http://octopress.org/docs/blogging/)
4. Sprawdzić zmiany lokalnie (rake preview)
5. Stworzyć pull requesta
