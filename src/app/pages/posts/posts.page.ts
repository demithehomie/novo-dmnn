import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})


export class PostsPage implements OnInit {

  searchTerm: string = "";
  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  

  constructor() { }

  ngOnInit() {
  }

  openExternalLinkFacebook(){
    window.open('https://www.facebook.com', '_blank')
  }
  
  openExternalLinkInstagram(){
    window.open('https://www.instagram.com', '_blank')
  }
  
  openExternalLinkYouTube(){
    window.open('https://www.youtube.com', '_blank')
  }
  /*
  public posts: { id: number; title: string; subtitle: string; image: string; author: string; date: string; content: string; }[] = [


    {
      id: 1,
      title: 'O impacto do ChatGPT',
      subtitle: '  A ferramenta que dominou o planeta. ',
      image: "../../../assets/posts/00.jpg",
      author: 'Demetrius C. M. Ferreira',
      date: '01/01/2022',
      content:
        '  Nos dias de hoje, o mundo digital está em constante evolução e os negócios precisam estar atentos a todas as oportunidades para se destacar. Com a chegada de Chatbots inteligentes, como o ChatGPT, o mercado de copywriting está prestes a mudar completamente. O ChatGPT é um modelo de linguagem natural desenvolvido pela OpenAI, que utiliza a inteligência artificial para gerar textos de alta qualidade e relevância. Isso significa que ele pode ser usado para criar conteúdo em grande escala, sem sacrificar a qualidade ou a originalidade.Com o ChatGPT, os profissionais de copywriting podem reduzir o tempo gasto na pesquisa e produção de conteúdo, permitindo que eles se concentrem em tarefas mais estratégicas e criativas. Além disso, o ChatGPT pode gerar conteúdo em vários formatos, como artigos, posts de redes sociais, e-mails e até mesmo roteiros de vídeo. Outra grande vantagem do ChatGPT é que ele pode ser treinado para imitar o estilo de escrita de qualquer pessoa, incluindo a marca ou empresa que está utilizando a ferramenta. Isso significa que o conteúdo gerado pode parecer que foi escrito por um humano, o que é especialmente importante em uma época em que a autenticidade é altamente valorizada pelos consumidores. Com o ChatGPT, é possível criar conteúdo personalizado para diferentes públicos-alvo e em diferentes idiomas, tornando-se uma solução poderosa para empresas que querem expandir sua presença global. Além disso, como o ChatGPT está sempre aprendendo e se atualizando, ele pode se adaptar rapidamente às mudanças nas tendências e comportamentos do mercado, garantindo que o conteúdo gerado seja sempre relevante e atual. No geral, o ChatGPT tem o potencial de revolucionar o mercado de copywriting, oferecendo uma solução mais rápida, eficiente e personalizada para a criação de conteúdo. Embora a ferramenta não substitua totalmente os profissionais de copywriting, ela pode ajudá-los a se concentrar em tarefas mais estratégicas e criativas, além de oferecer uma maneira de escalar o conteúdo de maneira eficiente e eficaz. Com o ChatGPT, as empresas têm a oportunidade de se destacar no mercado e alcançar seu público-alvo de maneira mais rápida e eficiente do que nunca.',
    },
    {
      id: 2,
      title: 'Postura profissional: ',
      subtitle: 'Como desenvolver a sua de forma adequada',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      author: 'Luan Thomazio',
      date: '20/04/2022',
      content:
        `Ter uma postura profissional no trabalho é de extrema importância para todo profissional que deseja desenvolver a carreira. Isso porque a conduta que você adotar no seu trabalho vai gerar benefícios a médio e longo prazo, tanto para você quanto para a sua empresa.
        Portanto, tenha um comportamento de acordo com os resultados que você quer para a sua vida profissional. 
        Mas, para você tomar as medidas necessárias para ter uma excelente postura profissional no seu trabalho, a Dominnus preparou esse conteúdo completo. Por isso, continue com a gente e aproveite!
        O que é postura profissional?
        Em resumo, a postura profissional é um combo de valores, comportamentos e atitudes que um profissional deve ter em seu trabalho.
        Embora muitas pessoas estejam trabalhando de forma remota, ou seja, home office, normalmente a atenção deve ser redobrada. 
        Mesmo que você esteja em um local tranquilo, dependendo do ambiente, algumas situações externas podem atrapalhar o seu desempenho. 
        Portanto, basta você focar nas suas funções e sempre lembrar das suas metas diárias. Isso certamente vai proporcionar crescimento para a sua carreira.
        Como a postura profissional ajuda as empresas?
        Em primeiro lugar, entenda um detalhe: a postura profissional é fundamental para todo tipo de negócio. No entanto, cada um deles tem total liberdade para implementar as políticas internas que desejam de cada colaborador. 
        Mas, tem outro ponto: existem condutas que são essenciais dentro de toda empresa. E de forma alguma você pode ter dentro do seu ambiente de trabalho. Por exemplo, agressões físicas e verbais, preconceito, desvios de recursos, dentre outros.
        Isso vale para quem trabalha de forma presencial e também para as pessoas que trabalham em um formato home office. Afinal, há condutas que são inegociáveis. Por isso, você deve seguir, para o seu bem e da sua empresa.
        Diante disso, continue com a Dominnus e confira como ter uma postura correta para ter um desenvolvimento profissional que leve você até a concretização dos seus objetivos.
        Como ter uma boa postura profissional?
        
        Primeiramente, como falamos acima, a postura profissional é a base para o desenvolvimento de toda pessoa que deseja alcançar as metas na carreira. Sendo assim, nada melhor do que saber como ter uma postura adequada, não é mesmo?
        Então, vamos lá! Separamos alguns pontos importantes para você ter uma postura profissional que chame a atenção de diversas empresas.
        Pontualidade: Seja pontual no seu trabalho, pois chegar atrasado nas suas funções certamente vai causar uma má reputação com seus superiores.
        Comunicação: A comunicação é outro ponto crucial para você ter uma postura profissional correta. Portanto, clareza, objetividade e cordialidade não podem faltar na sua rotina. 
        Além disso, vale lembrar que ter linguagem inadequada não é bem aceita em locais de trabalho. Por isso, evite!
        Ética: Claro que não poderíamos deixar de mencionar  a ética profissional. Todo profissional deve ser honesto, íntegro e respeitar os colegas de trabalho. 
        Aliás, essa é a base para seu trabalho fluir de forma eficiente e benéfica, para você e também para a empresa.
        Fora esses três pontos que acabamos de citar, não esqueça também de ter boa aparência e atitude correta com seus colegas de trabalho. Com esse combo que citamos, tenha a certeza que você vai dar um boom positivo na sua carreira.
        Qual a importância de uma postura profissional correta?
        [imagem]
        A postura profissional correta é o que vai levar você até os resultados que tanto deseja. Além disso, a sua postura vai proporcionar crescimento na carreira. 
        Isso pelo fato dela ajudar na harmonia do ambiente de trabalho e na produção da empresa. Já imaginou uma equipe trabalhando com uma postura profissional correta? É dessa forma que muitos negócios alcançam suas metas com qualidade.
        Sendo assim, confira alguns fatores importantes que uma postura profissional adequada pode gerar:
        Respeito: Ter uma postura profissional correta e ter respeito pelos demais colegas de trabalho, clientes e fornecedores é essencial. Isso porque acaba proporcionando um ambiente mais leve e produtivo;
        Credibilidade: Manter uma boa postura transmite mais credibilidade para seus superiores. Assim, consequentemente aumenta a confiança de todos no seu trabalho;
        Oportunidades de carreira: Proporciona novas oportunidades de carreira, com promoções e possibilidade de novos cargos;
        Imagem pessoal: A postura correta é fundamental para a sua imagem pessoal. Com uma boa imagem pessoal é possível melhorar a sua rede de contatos, ou seja, seu networking;
        Ambiente de trabalho mais saudável: Ao adquirir uma postura profissional adequada, você consegue deixar o seu ambiente de trabalho mais saudável e produtivo. Isso consequentemente vai gerar resultados mais eficazes.
        Melhore sua postura profissional com a Dominnus!
        Como ter uma postura profissional correta? Então, depois de acompanhar a leitura deste artigo com a gente, temos a certeza que você sabe a resposta desta pergunta. Portanto, não perca tempo, comece a melhorar sua postura profissional hoje mesmo.
        Anote todas as dicas que apresentamos durante o decorrer deste conteúdo e comece a colocar em prática. Lembre-se de um detalhe: o profissional que segue uma melhoria contínua, consegue se destacar dos demais.
        Sendo assim, seja você um desses profissionais de destaque. Conheça os nossos produtos e serviços e veja como podemos ajudar no seu desenvolvimento profissional. 
        Ah, e para ficar por dentro de mais conteúdos como este, acompanhe o Blog da Plataforma Dominnus e aproveite. 
        Com a gente você fica por dentro de conteúdos sobre desenvolvimento profissional, qualidade de vida, tecnologia, marketing e muito mais. Ou seja, um mix de conteúdo para o seu dia a dia.
        
        
        
        
        
        
        `,
    },
    {
      id: 3,
      title: 'Título do post 3',
      subtitle: 'Subtítulo do post 3',
      image: 'https://via.placeholder.com/150',
      author: 'Autor do post 3',
      date: '03/01/2022',
      content:
        'Conteúdo do post 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];


  
  postsFiltrados: { id: number; title: string; subtitle: string; image: string; author: string; date: string; content: string; }[] = [];
*/
  /*
  buscar(evento: any) {
    const termoBusca = evento.target.value;

    if (termoBusca && termoBusca.trim() !== '') {
      this.postsFiltrados = this.posts.filter((post) => {
        console.log(post.title.toLowerCase().indexOf(termoBusca.toLowerCase()) > -1)
        return (post.title.toLowerCase().indexOf(termoBusca.toLowerCase()) > -1);
        
      });
    } else {
      this.postsFiltrados = [];
    }
  }
*/

}
