import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo_purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const result = profile ? profile.name : 'Convidado';

  function handleSignOut() {
      dispatch(signOut());
  }

  return (
    <Container>
        <Content>
            <nav>
                <Link to='/dashboard'>
                    <img src={logo} alt="MeetApp" />
                </Link>
            </nav>

            <aside>
                <Profile>
                    <div>
                        <strong>{result}</strong>
                        <Link to="/profile">Meu Perfil</Link>
                    </div>
                    <button type="button" onClick={handleSignOut}>Sair</button>
                </Profile>
            </aside>
        </Content>
    </Container>
  );
}
