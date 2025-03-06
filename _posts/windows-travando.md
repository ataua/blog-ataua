---
title: "Travamento e falta de espaço no Windows"
excerpt: "Resolvendo problemas de travamento e falta de espaço no Win 10 / 11."
date: "2025-03-06"
---

Vou começar esse post dizendo que acho o Windows uma eca. Mas, se você não tem como migrar para o Linux nesse momento, pode acabar enfrentando um problema relativamente comum naquele sistema operacional: travamentos e falta de espaço de armazenamento, mesmo sem baixar nada.
Uma das causas possíveis para esse problema pode estar em uma configuração de áudio do Windows.

Streams de vídeo como Youtube, Tiktok, Facebook, etc - são compostos pelo arquivo de vídeo e pelo arquivo de áudio, que são executados em conjunto, à medida que são baixados. Se houver uma instabilidade na conexão, pode haver travamentos no áudio ou falha de sincronia entre imagem e vídeo. Para que isso não aconteça, o Windows tem uma função que baixa o arquivo de áudio e salva na pasta C:/EsLogFile, executando o arquivo localmente, para que não haja problemas de execução.
Porém, após passar o vídeo, o arquivo de áudio não é deletado, e fica ocupando espaço de armazenamento. Com o tempo, o HD ou SSD fica cheio, e começam a surgir problemas nos aplicativos, que não têm espaço para ser executados, travando e apresentando diversas instabilidades.

A solução é simples:
- no explorador de arquivos, entre no drive C:/
- clique com o botão direito do mouse em `EsLogFile` da lista de pastas
- selecione 'excluir' e confirme

![Listya de pastas em C:/](/delete.png)

Isso deleta a pasta, porém ela é recriada e com o tempo o problema volta a acontecer
Você pode criar o hábito de deletar a pasta uma vez por semana, ou simplesmente desativar a função responsável por criá-la:

Clique no botão iniciar e siga esse caminho:
Iniciar > Configurações > Sistema > Som > Alto Falante > Aprimoramento de Audio > Desativado  
Alguma versões do Windows (Home, Pro, 10, 11...) são um pouco diferentes, então você pode ter que dar uma procurada nas configurações até achar essa opção.

Desative a função "Aprimoramento de Áudio". Pronto. Teste seu computador, que deve para de travar

** Se a pasta C:/EsLogFile não existe em seu sistema, o problema de travamento pode estar associado a outra configuração ou peça defeituosa; entre em contato com a assistência técnica.
