---
dg-publish: true
---
#e34 #ecutuning
Tanto a ECU quanto a TCU da minha [[BMW 540i E34]] usam EPROMs soquetadas, o que significa que provavelmente existe a possibilidade de fazer mapas customizados pra ambos carros.

Minha ideia com isso seria:
- Adequar melhor o carro para a gasolina comum brasileira, que hoje possui perto de 30% de etanol
- Buscar uma autonomia melhor para velocidades de cruzeiro - explico melhor a ideia em [[ECU Tuning - ignição]]
- Buscar um pouco mais de potência no carro
- Para a TCU: deixar o motor girar mais, buscar trocas mais rápidas de marcha, lockup mais cedo

---------------
ECU: Bosch Motronic M3.3
0 261 200 404
EPROM 27C512

O 27C512 é uma EPROM apagável por luz UV. O SST27SF512-70-3C-PGE é um match perfeito que permite read/write sem depender de luz UV.

Burners: Moates BURN2/APU1, TunerWizard, Willem, XGecu T48, TL866
XDF: Fácil de encontrar no Github, buscando por `*404*.xdf

---------------

TCU: Ainda não olhei no carro, mas pelas minhas pesquisas, descobri que houveram basicamente 3 modelos de ECU para as 540i:

**Early Production: Janeiro até Março**
0 260 002 281
24611421095
Bosch GS8.32

**Mid Production: Abril até Setembro**
0 260 002 310
24601422021
Bosch GS9.22

**Late Production: Outubro até Dezembro**
0 260 002 321 (KZ)
24601421968 ou 24601421674 (KZ)
Bosch GS9.22 (AGS)

Provavelmente a minha seja uma mid production, pelo VIN decode dela (indica início de fabricação no dia 17 de maio de 1993)

Os 3 modelos de TCU usam o mesmo EPROM 27C512, portanto dá pra se usar o mesmo chip SST que eu falei antes.

