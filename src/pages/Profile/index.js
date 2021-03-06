/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome completo" />
            <Input name="email" placeholder="Seu endereço de e-mail" />

            <hr />

            <Input
              type="password"
              name="oldPpassword"
              placeholder="Sua senha atual"
            />
            <Input
              type="password"
              name="password"
              placeholder="Nova senha"
            />
            <Input
              type="password"
              name="confirmpassword"
              placeholder="Confirmação de senha"
            />

            <button type="submit">Atualizar perfil</button>
        </Form>
    </Container>
  );
}
