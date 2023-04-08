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
      title: 'Título do post 2',
      subtitle: 'Subtítulo do post 2',
      image: 'https://via.placeholder.com/150',
      author: 'Autor do post 2',
      date: '02/01/2022',
      content:
        'Conteúdo do post 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
