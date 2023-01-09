import { Play, List, Book, Plus, Users } from 'react-feather';

const defaultRoutes = [
  {
    id: 'start',
    title: 'Avaliar aluno',
    icon: <Play size={20} />,
    navLink: '/avaliacao',
  },
  {
    id: 'relatorios',
    title: 'Relatórios',
    icon: <Book size={20} />,
    navLink: '/dash',
  },
  {
    id: 'register',
    title: 'Alunos',
    icon: <Users size={20} />,
    children: [
      {
        id: 'cadastrar',
        title: 'Cadastrar Aluno',
        icon: <Plus size={20} />,
        navLink: '/cadastro',
      },
      {
        id: 'listUsers',
        title: 'Listar Alunos',
        icon: <List size={20} />,
        navLink: '/listUsers',
      },
    ]}
];

export default defaultRoutes;
