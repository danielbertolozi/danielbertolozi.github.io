---
dg-publish: true
---
#ecutuning 
Alguns aprendizados que já tive falando de acerto de ignição para carros turbos e aspirados.

Abaixo é uma tabela de ignição, com eixo X sendo RPM e eixo Y sendo a pressão no coletor (kPa). Pra quem é acostumado a ler valores em bar, 100kpa = 0.0bar; 80kpa = -0.2bar, e por assim vai.

![[126202-f2457c1fe1d4252e096abf0c699682d8.jpg]]

Agora, vamos aprender a olhar pra essa tabela de outra maneira:

![[Pasted image 20260902233042.png]]

Não sei se existe nome certo pra essas zonas, mas vem comigo kkk

### Lenta
A região amarela representa, de modo geral, a sua marcha lenta. Vai depender de carro a carro, motores 4 cilindros geralmente vão ficar entre 800 a 1000, dependendo da aplicação, e motores maiores podem tender a ficar em RPMs mais baixos.

Falando sobre ignição nessa zona, geralmente as ECUs ou vão ter um controle próprio de ignição ou vão permitir uma tabela separada para isso. O cuidado que temos que ter no mapa base é de manter uma certa progressividade para sair da lenta - não jogar o ponto lá em cima direto. Se tiver muita ignição nessas velocidades mais baixas, o carro pode cabecear.

### Cruzeiro
Região de baixíssima carga - imagine o motor a 1600-2400 RPM, já entregando algum torque, só para sustentar a velocidade na faixa, no plano.
Nessa região eu gosto de jogar bastante ponto, sem carga o motor não vai grilar e, como o enchimento de cilindro (eficiência volumétrica) é bem baixo, ter uma ignição bem cedo ajuda a otimizar mais a queima da mistura.
Dessa forma, o motor fica bem aceso, e tu consegue rodar sem dar muito pé, perfeito pra economia.

O ideal é ir transicionando os valores de ignição conforme a carga (map) aumenta. Pode colocar um valor "máximo" em cargas menores, e usar um "suavizar"/interpolar vertical até a faixa de WOT.

### WOT
Pé embaixo e deixa arder. É uma região bem propensa a pré-detonação, principalmente em baixos RPMs. Em altas RPMs, o tempo de ignição começa a ficar cada vez menor, conforme a velocidade que o pistão vem subindo.

A curva geralmente vai tender a crescer gradualmente (para evitar knock de baixa) e, após um certo pico, começar a diminuir, conforme a velocidade aumenta. Sempre deixa valores próximos de map com valores mais estáveis (numa janela de 5kpa, 95-100 no caso), para caso houver alguma instabilidade de leitura do sensor não ter nenhuma oscilação esquisita de ignição.

### Rápida/perigo
É uma zona interessante - motor produzindo pouco vácuo, borboleta bem aperta, e pouco RPM.
Entre ela e a zona da lenta, é legal de dar mais ponto pra ajudar o motor a acender. Porém, em MAPs mais perto de atm (90-100kpa), é preciso ter cuidado - se alguém inventar de dar pé em baixo com uma marcha muito alta, é uma receita certa pra pré-detonação. O bom é dar bem pouco ponto.

### Zonas de transição

Ideal sempre interpolar os valores intermediários. A prova real vai estar no andar com o carro na rua, se cabecear/grilar pode ser sinal pra voltar um pouco a ignição.