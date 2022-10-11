import { Home, Book, Video } from 'react-feather';

const defaultRoutes = [
  {
    id: 'relatorios',
    title: 'Relatórios',
    icon: <Home size={20} />,
    navLink: '/dash',
  },
  {
    id: 'cadastrar',
    title: 'Cadastrar Funcionário',
    icon: <Home size={20} />,
    navLink: '/cadastro',
  },
  // {
  //   id: 'classes',
  //   title: 'Disciplinas',
  //   icon: <Home size={20} />,
  //   children: [
  //     {
  //       id: 'history',
  //       title: 'História',
  //       children: [
  //         {
  //           id: 'ativ-historia',
  //           title: 'Atividades',
  //           icon: <Book size={20} />,
  //           navLink: '/activ-history',
  //         },
  //         {
  //           id: 'video-historia',
  //           title: 'Vídeo',
  //           icon: <Video size={20} />,
  //           navLink: '/activ-history/video',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'math',
  //       title: 'Matemática',
  //       children: [
  //         {
  //           id: 'activ-math',
  //           title: 'Atividades',
  //           icon: <Book size={20} />,
  //           navLink: '/activ-math',
  //         },
  //         {
  //           id: 'video-matematica',
  //           title: 'Vídeo',
  //           icon: <Video size={20} />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   header: 'Menu'
  // },
];

export default defaultRoutes;
