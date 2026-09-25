---
dg-publish: true
---
### 
### 23/09/2026: Fim da primeira revisão 

Bicos trocados pelos 821 e o carro se alinhou muito bem. Com sonda lambda, o carro mostra sonda 1.10 em baixa carga e 0.90 em plena. O que mostra que ainda há alguma entrada de ar falso (provavelmente pela PCV), já que o carro é programado, pela DME 3.3, para funcionar a 1.00 e 0.85.

Testarmos bastante o carro e aparentemente está bem redondo. As velas foram trocadas ainda nesse momento, por velas grau 6.

Troquei o par de lanternas traseiras por red clears do aliexpress, temporariamente. Carro veio rodando pra casa sem nenhum entrave, inclusive com muito mais força do que antes. 

![[20260923_195852.jpg]]

### 21/09/2026: Bico travado

De fato, o bico do cilindro 6 travou aberto/gotejando e foi responsável pelo carro estar ruim. Como esses bicos desses carros são difíceis de encontrar novos no Brasil, e em geral são velhos, parti pra opção de pegar bicos de outras aplicações.

Durante minhas pesquisas, que vou documentar também na página de [[E34 Part Numbers e Adaptações]], achei alguns bicos que são acessíveis e compatíveis.

Vamos testar primeiro os bicos do Vectra 2.2 (pretos, código 0 280 155 821), pois consigo facilmente unidades Bosch novas, na caixa. São bicos idênticos aos das BMW E39, mudando apenas o formato do leque – porém, vi em alguns fóruns alguém comentar até que a lenta de sua 540i melhorou com um leque mais fechado, mirado no meio da divisão das válvulas.

![[Pasted image 20260922085119.png]]
_para referência: desenho da admissão dos cabeçotes M60_
### 20/09/2026: Bomba nova

Hoje fiz a troca da bomba de combustível do carro. Ao abrir a tampa de acesso do copo no porta malas, me deparei com a tampa desrosqueada e a bóia solta. Isso explica o cheiro de gasolina que às vezes era possível sentir, estando perto do carro.

A bomba é fixa no fundo do tanque, com um sistema de grampos. Precisa primeiro soltar a bóia, puxar ela pra fora, pra daí soltar a bomba junto do copo e puxar o conjunto todo pra fora.

A bomba que ela tinha é de marca desconhecida, de tamanho (físico) correto. Imagino que a bomba supra em torno dos 100l/h, o que explica a pressão baixa de combustível, já que o funcionamento da bomba parece ok. Pelo que calculei, esse motor, original, precisa de, no mínimo, uma bomba com 3.5bar e 180lb/h.

A bomba que eu quis instalar, e que eu já tinha guardada, é uma Bosch FP Evo 38 (F 000 TE1 P38). É uma bomba compacta da linha Bosch Performance que atende com sobra a esse motor:

| **Voltagem** | **Vazão @ 3 Bar** | **Vazão @ 4 Bar** | **Vazão @ 5 Bar** |
| ------------ | ----------------- | ----------------- | ----------------- |
| 12 Volts     | 296 Litros/h      | 272 Litros/h      | 245 Litros/h      |
| 13 Volts     | 325 Litros/h      | 300 Litros/h      | 274 Litros/h      |
| 14 Volts     | **360 Litros/h**  | **331 Litros/h**  | **305 Litros/h**  |

Como o pacote dela é menor que a bomba original da E34, tive que fazer uma adaptação no copo. O copo possui um alojamento, onde a bomba escorrega, com grampos que travam ela no lugar. Fiz um corte transversal, para possibilitar prender a bomba menor usando uma abraçadeira de inox, conforme o esboço abaixo.

![[Pasted image 20260920002313.png]]

Para ajudar a alinhar melhor a bomba, cortei uma mangueira velha de arrefecimento e coloquei como "enxerto" do lado dela dentro da carcaça, para ajudar a fazer pressão e prender mais firme pela abraçadeira.

O restante foi o normal: refiz o conector usando o fornecido pela Bosch, usando uma emenda mecânica (crimpada), com termo retrátil. Para recolocar a bomba no tanque, tem um lado correto, o retorno do copo precisa ficar mais perto do centro do furo do copo.

Como tinha bastante terra em tudo, aproveitei pra limpar bem a região usando o Delete da Vonixx, que é bem bom pra derreter essas terras. As linhas de combustível ficaram um pouco curtas, então pra reinstalar o copo é necessário posicionar ele corretamente, começar a rosquear a porca do tanque, e aí girar o copo um pouco para aproximar as mangueiras das conexões do copo. Depois, dá pra puxar o copo de volta pra orientação correta.

No bater arranque, a pressão de combustível já disparou para 4bar. O carro melhorou muito a resposta, porém está com um cilindro a menos. Provavelmente um bico travou fechado. Sensores de temperaturas já estão ligados corretamente agora para a DME aplicar correções por temperatura adequadamente. 
### 18/09/2026

Medimos com sonda lambda a mistura do carro. Pela wideband, tivemos uma leitura de 1.28 na lenta... 

Calculei quanto que a pressão afeta a injeção, e dá um delta de 16lb/h totais em média, mais ou menos 2lb/h a menos por bico
Digamos que seja um motor que precisa de 128lb/h em plena carga, ele teria disponível só 112lb, que daria 15% a menos

Se alimentássemos com 15% a mais de combustível, provavelmente compensaria os 1.30 de lambda pra um valor mais decente. 

### 16/09/2026
Instalada porca de sonda no lado direito do escape, logo na saída do coletor

### 14/09/2026

Fiz algumas medições no carro: 

TPS: 

1 a 3: 3.8k
TPS zero: 1.45k
TPS wot: 3.8k

Pressão de combustível: 2.7bar (esperado: 3.5bar)

### 13/09/2026

Hoje tirei para finalizar as manutenções da E34. Foi feito: 

- Troca da mangueira do radiador lado motorista (Vaico) 
- Troca dos dois sensores de temperatura (Meyle)
- Troca da membrana da PCV da admissão (Vaico)
- Troca do liquido de arrefecimento por Aditivo (Peak Ultra X435 para carros europeus)
- Troca da correia do ar condicionado (Bando)
- Apliquei silicone em volta do conector da transmissão, para vedar um vazamento
- Bati pra dentro o retentor da seletora de marchas do cambio, que estava vazando
- Tapei com epoxy mais um vazamento do cárter
- Troquei a bucha do cabo do acelerador por uma de alumínio 
Questões: 
- Identificamos alguns vazamentos a mais: bujão da transmissão, retorno de óleo do cavalete do filtro (motor), mais alguma linha de óleo no lado passageiro
- O carro está com comportamento bem esquisito. Está rodando super rico na lenta. Quando os sensores de ECT estão ligados corretamente, ele está dando falta de combustível (rápida e aceleração normal). Ao se inverter, a mistura e a rápida melhoram.
	- Testei voltar a MAF original e desligar a MAF, e nenhuma melhora
	- Suspeitas: ar falso, regulador de pressão de combustível errado, ambas MAF erradas
Leitura: [Timm's BMW Repairs and Information - Vacuum Leaks](https://www.meeknet.co.uk/e31/BMW_M60_M62_M62TU_Vacuum_Leaks.htm)
### 10/09/2026

BMW foi levada para lavar a parte de baixo do motor com água quente. Cabo do acelerador tá ficando agarrado.

### 08/09/2026

Dei um pulo na oficina pra fazer um teste. Pelo visto, apareceu um rasgo no tubo da admissão (no joelho que vai pro atuador de lenta) que tava dando ar falso e deixando o carro todo errado. Isolei tudo com fita e o carro melhorou muito. O OBC voltou a funcionar, descobri que a lampada da luz da injeção não acende, e instalei a porta de combustível de volta. 
Dia de varias compras pra e34: uma PCV nova Vaico, dois sensores de ECT meyle, tubo da admissão Aliexpress (kkk), capas de parachoque. 

### 07/09/2026 - Primeira volta pós revisões

O parachoque ficou pronto da pintura e foi instalado, junto dos acabamentos dianteiros. Notei que faltam alguns acabamentos, do lado dos neblinas.
Trocamos o oring da termostática e melhorou bastante o vazamento, mas não resolveu. Como eu reparei uma trinca na mangueira do radiador, vou esperar chegar a nova para daí refazermos essa vedação da termostática, daí com cola. 
Trocamos uma coifa da homocinética que estava rasgada (lado diferencial, do motorista).
Trocamos as duas polias menores (60mm). 
O carro aparentemente tem um problema de ar falso relacionado ao sistema de PCV. Substituímos a tampa e a membrana mas não resolveu. Melhor era trocar a carcaça inteira. Caso não solucionar, fazer um plate para isolar tudo. 
Notei algumas coisas meio erráticas com relação aos sensores de temp água. Quero trocar os dois por sensores Meyle.
*Nota pessoal: conseguir devolução de 3 coifas das homocinéticas, uma correia (do mercado livre), e parcial de valor das polias.* 
Notei um mal contato no farol lado motorista, trincado no acabamento da placa. 

Afazeres novos:
- Trocar mangueira superior radiador lado motorista
- Passar fita isolante num rasgo no tubo da admissão (perto do atuador de lenta)
- Trocar PCV inteira

![[20260907_183618.jpg]]

### 05/09/2026

O defletor chegou essa semana, pintei ele em epoxy usando um Spray da Rust Oleum, muito bom por sinal. Elaborei e instalei um chicote para o acionamento das ventoinhas, usando termostática de Honda Fit. Fizemos um suporte para o porta relés, troquei algumas porcas velhas por porcas mais novas por estética. Pintura do defletor novo feito em aço, usando spray epoxy da Rust Oleum. Elaboração do chicote de acionamento da ventoinha com cebolão de Fit. Pré instalação de relés, chicotes, radiador e ventoinhas no lugar. Suporte para porta relés. Ler mais em [[Instalando ventoinhas elétricas na E34]]
### 28/08/2026

Limpeza completa da mini frente do carro, da parte superior do cofre do motor, hidratação de couros, aplicação de produto protetor em plásticos da interna.

### 25/08/2026

Troca da bateria Moura antiga por uma Pioneiro nova (queria Heliar, porém essa Pioneiro tinha mais CCAs que a Heliar equivalente). Quando fui trocar a bateria, vi que o assoalho onde ela fica tava meio oxidado. Lixei tudo muito bem e pintei apenas com fundo. Arrancamos o insufilm preto, saiu sem deixar resíduos. Troquei os amortecedores de capo e de porta malas
### 22/08/2026

Limpeza dos bancos de couro; comecei a limpar a mini frente do carro, instalei a carcaça da termostática nova, com pouca cola e um oring novo encontrado na Fusobraz. 

### 15/08/2026

Refizemos a vedação do cárter do câmbio, substituimos o filtro de óleo de cambio original por um paralelo primeira linha, refizemos as mangueiras do oil cooler do motor, agora novas, crimpadas. Desmontagem do sistema de arrefecimento para elaborar defletores, trocar da carcaça termostática, desobstrução da termostática original, limpeza geral dessas partes encostadas.

Instalei alguns grampos que chegaram do aliexpress.
### 08/08/2026

Desmontei os neblinas para reforma. 
Removi o cárter para passar loctite na bomba de óleo. Nenhum parafuso tinha caído \o/ mas eles estavam sim bem frouxos. Achei um parafuso quebrado no cárter. Limpeza completa da bomba de óleo, de cárter, e da parte inferior do motor. Remontagem do cárter com junta nova, sem cola, com óleo Motul 10w40, filtro novo Hengst. Desamassei o cárter, pintei de preto, passei solda fria em algumas microfissuras que tavam dando uma umedecida.
O cárter ficou dando uma umedecida em um canto, precisaria passar um pouco de cola para vedar 100%.