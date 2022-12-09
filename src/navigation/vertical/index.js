import { Play, List, Book, Plus } from 'react-feather';

const defaultRoutes = [
  {
    id: 'start',
    title: 'Iniciar Atividade',
    icon: <Play size={20} />,
    navLink: '/iniciar',
  },
  {
    id: 'relatorios',
    title: 'Relatórios',
    icon: <Book size={20} />,
    navLink: '/dash',
  },
  {
    id: 'cadastrar',
    title: 'Cadastrar Usuário',
    icon: <Plus size={20} />,
    navLink: '/cadastro',
  },
  {
    id: 'listUsers',
    title: 'Lista Usuários',
    icon: <List size={20} />,
    navLink: '/listUsers',
  },
];

export default defaultRoutes;
