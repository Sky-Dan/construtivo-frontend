// ** Custom Components
import AvatarGroup from '@components/avatar-group'


// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const TableNotas = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Atividade</th>
          <th>Acertos</th>
          <th>Erros</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className='align-middle fw-bold'>Renato</span>
          </td>
          <td>Ponte</td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              6
            </Badge>
          </td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              4
            </Badge>
          </td>
          <td>
            <Badge pill color='light-success' className='me-1'>
              10
            </Badge>
          </td>
        </tr>
        <tr>
        <td>
            <span className='align-middle fw-bold'>Mateus</span>
          </td>
          <td>Labirinto</td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              2
            </Badge>
          </td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              1
            </Badge>
          </td>
          <td>
            <Badge pill color='light-success' className='me-1'>
              3
            </Badge>
          </td>
        </tr>
        <tr>
        <td>
            <span className='align-middle fw-bold'>Igor</span>
          </td>
          <td>Ponte</td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              4
            </Badge>
          </td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              6
            </Badge>
          </td>
          <td>
            <Badge pill color='light-danger' className='me-1'>
              10
            </Badge>
          </td>
        </tr>
        <tr>
        <td>
            <span className='align-middle fw-bold'>Daniel</span>
          </td>
          <td>Ponte</td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              3
            </Badge>
          </td>
          <td>
            <Badge pill color='light-secondary' className='me-1'>
              3
            </Badge>
          </td>
          <td>
            <Badge pill color='light-success' className='me-1'>
              6
            </Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableNotas
