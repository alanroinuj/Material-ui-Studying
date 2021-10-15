import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Route as MemoryRouter } from 'react-router';

import { useStyles } from '../../Page/DashBoard/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


function ListItemLink(props) {
  //eslint-disable-next-line
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    // eslint-disable-next-line react/display-name
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );
  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function ListRouterMain() {
  const style = useStyles();
  return (
    <MemoryRouter>
      <div className={style.list}>
        <ListItemLink to="/" primary={'Dashboard'} icon={<DashboardIcon />} />
        <ListItemLink to="/pessoas" primary={'Pessoas'} icon={<PeopleAltIcon />} />
        <ListItemLink to="/imoveis" primary={'Imóveis'} icon={<HomeIcon />} />
        <ListItemLink to="/usuarios" primary={'Usuários'} icon={<AccountBoxIcon />} />
      </div>
    </MemoryRouter>
  );
}