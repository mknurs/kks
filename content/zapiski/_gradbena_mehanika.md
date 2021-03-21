---
Title: Gradbena mehanika
Date: 2020-08-23
Template: post
---

<div markdown="1" class="toc">

</div>

## Vzorčni kolokvij

Za enoetažni objekt (manjša pokrita tribuna) izračunaj:

1. Togost in nihajni čas konstrukcije v X in Y smeri.
2. Horizontalni pomik (*dejanski*) konstrukcije v smeri X in smeri Y pri potresni sili, ki jo izračunaj na osnovi potresnega spektra za tla tipa B po EC8: pospešek tal a_g = 0.20 g, redukcijski faktor q = 2 (za smer X) in q = 4 (za smer Y).
3. Osne sile in momente v stebru A zaradi vertikalne in potresne obtežbe skupaj.

Upoštevaj, da je v potresnem projektnem stanju zvezna obtežba na enoto tlorisne površine enaka 6,0 kN/m². Upoštevaj, da je streha toga v svoji ravnini.

E_betona = 3300 kN/cm2
E_jekla = 21000 kN/cm2

Za dodatne točke določi potrebne tlorisne dimenzije temelja (B/L) pod stebrom A. Pri tem upoštevaj: f_d,tal = 0.025 kN/cm2.

*slika*

### Podatki

- tip tal: B
- a_g = 0.2 g
- q_x = 2
- q_y = 4
- q = 6.0 kN/m2
- E_beton = 3300 kN/cm2
- E_jeklo = 21000 kN/cm2
- f_d, tal = 0.025 kN/cm2

## Vaja XX

Predpostavke poenostavljenega računa potresnega odziva:
- Togost medetažnih plošč.
- Razdelitev na nosilne smeri.
- Prenos horizontalnih sil v temelje.
- Upogibni in strižni prenos sil.
  - Upogibni prenos pri višina / širina > 2.
  - Strižni prenos pri višina / širina < 2.

### Togost (k) sten in stebrov

k = 3 E I / h3 (*slika* spodaj vpet element)

k = 12 E I / h3 (*slika* spodaj in zgoraj vpet element)

I = š3 d / 12

*slika in formula steber vs stena*

### ...

### Poenostavljena potresna analiza (metoda z vodoravnimi silami)

#### Ocenimo nihanji čas

T = n \* 0.1

kjer n pomeni število etaž konstrukcije.

Nihajni čas stavbe visoke do 40 m lahko ocenimo tudi s pomočjo naslednje formule:

T = 0.085 \* H<sup>3/4</sup> *(prostorske jeklene okvirne konstrukcije).*

T = 0.075 \* H<sup>3/4</sup> *(prostorske betonske okvirne konstrukcije in ekcentrično zavetrovane jeklene okvirne konstrukcije).*

T = 0.05 \* H<sup>3/4</sup> *(ostali tipi konstrukcij).*

Kjer je H višina stavbe (v m).

[popravi formule, enačaji so prib.]

#### Določitev elastične potresne sile S_e

S_e = S_e(T) \* m

m = G/g

S_e(T): pospešek na vrhu (odčitek iz elastičnega spektra)

Za potrebe dimenzioniranja elastično potresno silo S_e ustrezno zmanjšamo (faktor obnašanja q)

Dobimo računsko potresno silo:

S = S_e(T) \* m/q = S_e / q

Če ima konstrukcija več kot dve etaži (n > 2) in je njen osnovni nihajni čas T <= 2\*T_c za računsko potresno silo S upoštevamo samo 85% vrednosti S_e(T) \* m/q (korekcijski faktor *lambda* = 0.85)

S = *lambda* \* S_e(T) \* m/q

#### Izračunano računsko potresno silo S razdelimo po višini konstrukcije

S_i = S \* (G_i \* H_i) / sum_n,i=1(G_i \* H_i)

kjer je:

S_i potresna sila v določeni etaži (prijemališče sile je v težišču etaže na višini medetažne plošče),

G_i teža etaže (kN) ter

H_i višina etaže merjeno od temelja navzgor.

## Naloga: večetažna AB stavba

Trietažni (P+2) AB objekt na sliki je obtežen z vertikalno zvezno obtežbo (nadstropji: $q\_n = 9\ \text"kN/m²"$, pritličje: $q\_p = 12\ \text"kN/m²"$). Etažna višina vseh nadstropij znaša $h\_n = 3,0\ \text"m"$, pritličja pa $h\_p = 4,0\ \text"m"$.

a) Oceni nihajni čas konstrukcije in izračunaj pripadajočo vrednost pospeška iz elastičnega spektra $S\_e(T)$. Upoštevaj potres podan s potresnim spektrom za tla tipa B po EC8: pospešek tal $a\_g = 0,15\ \text"g"$.

b) Izračunaj celotno potresno silo ter računske potresne sile na posamezno etažo. Privzemi redukcijski faktor $q = 4$.

c) Izračunaj notranje statične količine (momente $M$, prečne sile $Q$ in osne sile $N$) v steni x2 in steni y1 v pritličju zaradi horizontalne (potresne) obtežbe -- nariši diagrame.

Račun izvedi *ločeno* za obe pravokotni smeri ($x$ in $y$) in pri računu NSK predpostavi, da:
- pri potresu v $x$ smeri $50\%$ celotne potresne sile odpade na nosilno os (ravnino), v kateri leži tudi stena x2,
- pri potresu v $y$ smeri $80\%$ celotne potresne sile odpade na nosilno os (ravnino), v kateri leži tudi stena y1.

d) Določi osne sile v obeh stenah še zaradi vertikalne obtežbe in določi/predlagaj ustrezne tlorisne dimenzije temeljev ($B\/L$) pod stenama, da bosta zadoščala za prevzem tako vertikalne kot (podane) horizontalne obtežbe. Pri tem upoštevaj: $f\_{d, tal} = 0,035\ \text"kN/cm²"$, za temelje je uporabljen beton C16/20 s tlačno trdnostjo: $2,0\ \text"kN/cm²"$.

<figure markdown="1">
<img src="%assets_url%/gradbena_mehanika_01.svg" onload="SVGInject(this)">

<figcaption>Slika 1: Tlorisi vseh treh etaž.</figcaption>
</figure>

### a) Nihajni čas in pospešek iz elastičnega spektra

> število etaž $n = 3$  
> višina stavbe $H = 10\ \text"m"$

Ocena nihajnega časa: $$T ≈ n·0,1\ \text"s" ≈ 0,3\ \text"s", $$ oziroma $$T ≈ 0,05·H^{3/4} ≈ 0,28\ \text"s".$$

vrsta tal | opis tal | $γ\_{tal}$ | $T\_b\ [\text"s"]$ | $T\_c\ [\text"s"]$ | $T\_d\ [\text"s"]$ 
----|----|----:|----:|----:|----:
A         | skala | $1$ | $0,15\ (0,10)$ | $0,4$ | $2,0$ 
B | gost pesek, gramoz, trda ilovica | $1,2$ | $0,15$ | $0,5$ | $2,0$ 
C | srednje gost pesek, poltrda glina | $1,15$ | $0,20$ | $0,6$ | $2,0$
D | nevezljiva ali mehka vezljiva tla | $1,35$ | $0,20$ | $0,8$ | $2,0$ 
E | barje | $1,4\ (1,7)$ | $0,15\ (0,10)$ | $0,5\ (0,4)$ | $2,0$
[Tabela 1: Faktor vpliva kvalitete tal ($γ\_{tal}$) in karakteristični nihajni časi v odvisnosti od vrste tal po Evrokodu 8 za področje Slovenije glede na nacionalni dodatek SIST EN 1998-1.]


Izračun:

št. etaž n = 3

T = n\*0.1

T = 0.3s

oziroma:

T = 0.05\*H<sup>3/4</sup> =
  = 0.28 s

*tabela 3 iz skripte*

tip tal B:

gamma_tal = 1.2

T_b = 0.15s

T_c = 0.5s

T_d = 2.0s

T_b < T < T_c

S_e(T) = 2.5\*gamma_tal\*a_g =

= 2.5\*1.2\*0.15g = 0.45g

b) Izračunaj *celotno potresno silo* ter *računske potresne sile na posamezno etažo*. Privzemi redukcijski faktor q = 4.

Izračun:

Teže etaž:

(iz podatkov) q_n = 9 kN/m2 (dve nadstropji)

(iz podatkov) q_p = 12 kN/m2 (pritličje)

A_n = 10 m \* 9 m = 90 m2

A_p = 16 m \* 9 m = 144 m2

G = 2\*(A_n\*q_n) + A_p\*q_p =

= 3348 kN

S = S_e(T) \* m = 

= 0.45 g \* 3348 kN / g =

= 1506.6 kN (elastična potresna sila)

(zmanjšamo z redukcijskim faktorjem q = 4)

S_r = S/q = 

= 376.65 kN

(upoštevamo tudi lambda = 0.85)

S_r' = S_r \* 0.85 = 320.15 kN

*zapisan tabela*

S_1 = 107.00 kN

S_2 = 87.80 kN

S_3 = 125.40 kN

c) Izračunaj *notranje statične količine* (momente M, prečne sile Q in osne sile N) *v steni x2 v pritličju* zaradi horizontalne (potresne) obtežbe -- nariši diagrame.

Pri računu NSK predpostavi, da pri potresu v X smeri 50% celotne potresne sile odpade na nosilno os (ravnino), v kateri leži tudi stena x2.

*risba sten v tej osi*

Izračun:

Na analizirano nosilno os odpade 50% S_r'.

Na posamezne etaže torej:

0.5\*S_i = ...

S_3, os = 62.70 kN

S_2, os = 43.90 kN

S_1, os = 53.50 kN

Izračun:

Razdelitev etažne potresne sile na posamezne elemente (stene) v analizirani smeri:

*upogibni (h/š > 2) ali strižni (h/š <= 2) prenos?*

določimo način prenosa:

etaža | leva stena | desna stena | merodajni kriterij za razdelitev etažne potresne sile
------| ----- | ------------ | ---
3  | h/š = 3/2 = 1.5 (strižni prenos) |  h/š = 3/1.2 = 2.5 (upogibni prenos) | strižni
2  | h/š = 3/2 = 1.5 (strižni prenos) | h/š = 3/1.2 = 2.5 (upogibni prenos) | strižni
1  | h/š = 4/4 = 1 (strižni prenos) | h/š = 4/3.2 = 1.25 (strižni prenos) | strižni (deltev po razmerju površin)

*če se v isti etaži pojavita strižni in upogibni kriterij, uporabimo strižnega kot merodajnega*

 etaža | sila leve stene | sila desne stene 
-------|-----------------|------------------
3      | 39.20 kN        | 23.50 kN 
2      | 27.40 kN        | 16.50 kN 
1      | 29.70 kN        | 23.80 kN 

NSK:

*diagrami statičnih modelov in nsk*

prečne sile se seštevajo po stenah navzdol:

*diagram Q*

$Q\_3 = S\_{3, d} = 23,50\ \text"kN"$

$Q\_2 = Q\_3 + S\_{2, d} = 40,00\ \text"kN"$

$Q\_1 = Q\_2 + S\_{1, d} = 63,80\ \text"kN"$

*diagram M*

$M\_3 = S\_{3, d} · h\_3 = 70,50\ \text"kNm"$

$M\_2 = M\_3 + (S\_{2, d} · h\_2) = 120,00\ \text"kNm"$

$M\_1 = M\_2 + (S\_{1, d} · h\_1) = 215,20\ \text"kNm"$

*diagram N*

Osna sila je 0.

d) Določi *osno silo v steni x2 v pritličju še zaradi vertikalne obtežbe in določi/predlagaj ustrezne tlorisne dimenzije temelja (B/L) pod steno, da bo zadoščal za prevzem tako vertikalne kot (podane) horizontalne obtežbe. Pri tem upoštevaj: $f\_{d, tal} = 0,035\ \text"kN"/\text"cm"²$, za temelje je uporabljen beton C16/20 s tlačno trdnostjo: $2,0\ \text"kN"/\text"cm"²$.

Izračun:

Vplivna površina nad steno x2

$A\_{v, n} = 3,88\ \text"m"²$

$A\_{v, p} = 8,88\ \text"m"²$

<!-- $A\_v = 2A\_{v, n} + A\_{v, p} = 16,64\ \text"m"²$ -->

$q\_p = 12\ \text"kNm"²$

$q\_n = 9\ \text"kNm"²$

$N = 2(A\_{v, n} · q\_n) + A\_{v, p} · q\_p = 176,40\ \text"kN"$

Temelj pod steno:

(računanje temelja, gl. enotezano nalogo)

$N\_{gl} + N\_{dod} = 176,40\ \text"kN" = N$

$M\_{gl} + M\_{dod} = 215,20\ \text"kNm" = M$

Ko poznamo M in N, lahko določimo ekscentričnost obremenitve e.

$$e = M/N$$

$e = 1,22\ \text"m"$

e mora bit manjši od 3/10 B (dimenzija temelja)

$B\_{min} = 4,07\ \text"m"$

*Izberem* AB temelj tlorisnih dimenzij B/L = 420/80cm (420 smo kao izračunali, 80cm smo izbrali ker je "smiselno")

Kontrola efektivnih kontaktnih napetosti pod temeljem (enoosni upogib z osno silo):

(lastne teže AB temelja ne upoštevamo)

$A\_{eff} = L\_{eff} · B\_{eff}$ dobimo efektivno površino. Z efektivno površino in osno silo lahko dobimo efektiven tlak. primerjamo s f_dtal. Vidimo da ustreza

### Smer Y

c) NSK v steni y1

predpostavi da pri potresu v Y smeri 80% celotne potresne sile odpade na nosilno os(ravnino), v kateri leži tudi stena y1.

etaža  | $S\_i$    | $S\_{i, y} = 0.8 · S\_i$
-------|-----------|-----------------
$S\_3$ | 125,40 kN | 100,30 kN
$S\_2$ | 87,80 kN  | 70,24 kN
$S\_1$ | 107,00 kN | 85,60 kN

Stene v zgornjih dveh etažah so sklenjene (gre samo za eno steno), v pritličju pa dve steni nosita. Kako se med njima razporedijo potresne sile?

Prečne sile po etažah:

$Q\_3 = S\_{3, y} = 100,30\ \text"kN"$

$Q\_2 = Q\_3 + S\_{2, y} = 170,54\ \text"kN"$

$Q\_1 = Q\_2 + S\_{1, y} = 256,14\ \text"kN"$

*tabela razmerij sten, ugotovimo da so upogibne stene obe. Upogibni raznos, razmerje togosti*

$$I\_i / {∑ I\_i}$$

$$I\_i = {w\_i³ · t\_i}/12$$

$Q\_{yi} = Q\_i{I\_i / {∑ I\_i}}$

$Q\_{y1} = Q\_1 {...}$ dobimo 40,3 kN

