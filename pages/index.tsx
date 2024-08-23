import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">

          <h1 className="text-2xl font-bold">
            Blog do Atauã
          </h1>
          
          <p>Olá, Pessoas! Eu sou o Atauã. Este é meu site pessoal, onde pretendo compartilhar parte das minhas ideias com o mundo.</p>
          <p>Sou casado, tenho dois filhos e um enteado, que está passando pelo processo de mudança de gênero.</p>
          <p>Já trabalhei na Caixa Econômica mas saí em 2018. Atualmente sou desenvolvedor web e estudo Sistemas de Informação.</p>
          <p>Tenho três gatos, moro em Curitiba, sou formado na Belas Artes e já estudei Letras e Design Gráfico.</p>
          <p>Tenho, portanto, vários interesses e situações sobre as quais me expressar. Gosto de escrever e acho que tenho um estilo fluido e agradável para a leitura.</p>
          <p>Apesar disso, não sou nenhum gênio nem me considero uma referência em qualquer assunto, sou apenas um curioso compartilhando suas impressões com o mundo, sem pretensões messiânicas. O propósito desse blog é ser descontraído, talvez levemente informativo, mas certamente uma fonte de entretenimento.</p>
          <br />
          <p>Seja bem-vindo(a) ao meu blog!</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
