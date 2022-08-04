import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styles';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    // dispara uma ação
    dispatch(actions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>Login</Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
