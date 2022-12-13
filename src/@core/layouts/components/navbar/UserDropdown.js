import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../../../redux/auth';
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button,
} from 'reactstrap';
import { Power } from 'react-feather';

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        {/* <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' /> */}
        <div className="user-nav">
          {/* <span className='user-name'>&nbsp;&nbsp;&nbsp;&nbsp;{(userData && userData.role) || 'Professor'}</span> */}
          <span className="user-name font-weight-bold">
            <Button type="button" color="primary" outline>
              Sair
            </Button>
          </span>
        </div>
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem
          tag={Link}
          to="/login"
          onClick={() => dispatch(handleLogout())}
        >
          <Power size={14} className="mr-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
