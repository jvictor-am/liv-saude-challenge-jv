import React from 'react';
import { Link } from 'react-router-dom';

import { FaGithub, FaGit } from 'react-icons/fa';

import { Container, Aside } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <FaGithub size={48} color="#000" />
      </Link>
      <Aside>
        Check repositories below after adding '/usernameyouwant' to URL above.
      </Aside>
      <FaGit size={48} color="#000" />
    </Container>
  );
}
