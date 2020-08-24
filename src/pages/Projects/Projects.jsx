import React, { useContext, useEffect } from 'react';
import './Projects.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Project from '../../components/Project/Project';
import Loader from 'react-loader-spinner';

const Projects = () => {
  const { projects } = useContext(FirebaseContext);
  useEffect(() => {
    console.log(projects);
  });
  return (
    <div className="Projects" id="projects">
      <div className="title">
        <div className="title-content">
          <span className="q3">03. </span>projects
        </div>
        <div className="title-line"></div>
      </div>
      {projects ? (
        projects.map((projectInfo, index) => (
          <Project
            align={index % 2 === 0 ? 'left' : 'right'}
            projectInfo={projectInfo}
            key={projectInfo.id}
          />
        ))
      ) : (
        <Loader
          type="ThreeDots"
          color="#00ffec"
          height="100"
          width="100"
          style={{ textAlign: 'center', margin: '10rem' }}
        />
      )}
    </div>
  );
};

export default Projects;
