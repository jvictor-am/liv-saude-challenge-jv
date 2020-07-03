import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  IoIosGitNetwork,
  IoMdStarOutline,
  IoMdBookmarks,
} from 'react-icons/io';
import api from '../../services/api';

import {
  Container,
  List,
  User,
  Icon,
  Main,
  IconSide,
  IconName,
} from './styles';

import { useParams } from 'react-router';

export default function Default() {
  let { username } = useParams();

  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({});
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    async function loadUser() {
      setSpin(true);
      try {
        const user = await api.get(`${username}`);

        const response = await api.get(`${username}/repos?per_page=100`);

        const data = response;

        setRepositories(data.data);
        setOwner(user.data);
        setSpin(false);

        toast.success('Have Fun !');
      } catch (err) {
        toast.error(
          'Something went wrong, please check the username you provided !'
        );
      }
    }

    loadUser();
  }, [username]);

  function colorLanguage(language) {
    if (language === 'JavaScript') {
      return 'javascript-dot';
    } else if (language === 'CSS') {
      return 'css-dot';
    } else if (language === 'PHP') {
      return 'php-dot';
    } else if (language === 'HTML') {
      return 'html-dot';
    } else if (language === 'Java') {
      return 'java-dot';
    } else if (language === 'TypeScript') {
      return 'typescript-dot';
    } else if (language === 'Ruby') {
      return 'ruby-dot';
    } else if (language === 'C++') {
      return 'cpluplus-dot';
    } else if (language === 'Python') {
      return 'python-dot';
    } else if (language === 'Jupyter Notebook') {
      return 'jupyter-dot';
    } else if (language === 'Objective-C++') {
      return 'objectivecplus-dot';
    } else if (language === 'Haskell') {
      return 'haskell-dot';
    } else if (language === 'Scala') {
      return 'scala-dot';
    } else if (language === 'C') {
      return 'c-dot';
    } else if (language === 'Objective-C') {
      return 'objectivec-dot';
    } else {
      return 'gray-dot';
    }
  }

  function descriptionLimit(content) {
    return content && content.length > 200
      ? `${content.substring(0, 200)}...`
      : content;
  }

  return (
    <Container>
      {spin === true ? (
        <Icon>
          <FaSpinner size={48} color="#000" />
        </Icon>
      ) : (
        <List>
          <User>
            <img src={owner.avatar_url} alt={owner.avatar_url} />
            <span>{owner.login}</span>
          </User>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <Main>
                {/* <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                /> */}
                <div className="info">
                  <div className="name">
                    <IconName>
                      <IoMdBookmarks size={20} color="#404040" />
                    </IconName>
                    {repository.name}
                  </div>
                  <p className="description">
                    {descriptionLimit(repository.description)}
                  </p>
                  <div className="language">
                    <div className={colorLanguage(repository.language)} />
                    Language: {repository.language}
                  </div>
                </div>
              </Main>
              <div className="icons">
                <div className="forks">
                  <IconSide>
                    <IoIosGitNetwork size={20} color="#000" />
                  </IconSide>
                  Fork(s): {repository.forks}
                </div>
                <div className="stars">
                  <IconSide>
                    <IoMdStarOutline size={24} color="#000" />
                  </IconSide>
                  Star(s): {repository.stargazers_count}
                </div>
              </div>
            </li>
          ))}
        </List>
      )}
    </Container>
  );
}
