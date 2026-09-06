---
dg-publish: true
---
A algum tempo atrás, eu me revoltei com a escalada de preços de serviços de Cloud Storage, fora a _impossibilidade_ de encontrar algum confiável com modelo de pagamento "Lifetime". Na prática, só o Filen, mas custaria bem caro para ter 200GB.

Na busca de um servidor caseiro, eu tracei os seguintes requerimentos:

- Ele tinha que ser barato
- Não podia consumir muita energia elétrica
- Não podia ser muito barulhento
- Precisava caber em um canto apertado, sem necessitar de airflow absurdo
- Precisava de IO, para conectar uma baia de HDs
- Queria ter a opção de acessar ele não estando na rede de casa

Eu já tinha montado um PC em uma caixa de sapato uma vez e até expus ele na rede para jogar Minecraft com amigos, porém ele esquentava muito, o hardware era muito fraco, e a solução em si era muito trambolhuda. [Fiz até um vídeo no YouTube na época, falando sobre](https://www.youtube.com/watch?v=7uDQpPWV3mo).

Pensei em catar algum notebook usado... Mas ou era muito ruim, ou muito caro.

Eis que... achei o candidato perfeito!

![[Pasted image 20260904004318.png]]

De quebra, ele veio com um HD rotativo de 1TB. Eu tinha um SSD de 240Gb sobrando que iria usar anyways... Mas ele fechou todas as caixas que eu tinha:

# O Plano

Como OS, escolhi o **Fedora Server**, por conta de ter muita coisa out of the box e pela estabilidade - até hoje acho que o Fedora foi a distro Linux que, quando usei, menos me deu problemas na vida.

Para acesso aos HDs, usei uma Docking Station da UGreen, plugada por USB no Mac:

![[Pasted image 20260904005126.png]]

Ela custou relativamente barato, suporta HD cloning por botão e hotswap dos HDs.
Já para os HDs, comprei um Western Red (otimizado para NAS) de 4TB para cold storage e usei o HD de 1TB que veio no Mac Mini como "hot data".

Para acessar o servidor, tanto em casa quanto fora, optei por usar uma VPN - o Tailscale, pela praticidade.

# Funcionalidades

## Armazenamento e Organização de Fotos

Por enquanto, não estou rodando nenhum serviço local de armazenamento. Criei uma organização por diretórios mesmo, e estou acessando via SMB pelo celular, ou via SSHFS pelo Desktop. A organização ficou a seguinte:

```
Photos
- 2021
- 2022
  - Aula
  - Selfies
  - ...
```

Por um lado, dá bastante trabalho classificar tudo em pastas. Por outro, não dependo de plataforma/software para ter uma organização decente.

Anyways, comecei a experimentar organizar as fotos usando o Digikam pelo desktop. Pareceu promissor.

## Wishes

- Hospedar o sistema da Runtech dentro dessa máquina e criar um sistema de backups automatizados das fichas
- Subir um servidor de Minecraft "pirata"