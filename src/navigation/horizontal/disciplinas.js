// ** Icons Import
import { Home, Activity, ShoppingCart, Book } from 'react-feather'

export default [

  {
    id: 'dashboard',
    title: 'Home',
    icon: <Home />,
    navLink: '/'
  },
  {
    id: 'disciplinas',
    title: 'Disciplinas',
    icon: <Book />,
    navLink: '/disciplinas',
    children: [
      {
        id: 'geografia',
        title: 'Geografia',
        navLink: '/atividades-geografia'
      },
      {
        id: 'matematica',
        title: 'Matemática',
        navLink: '/atividades-matematica'
      },
    ]
  }
]
