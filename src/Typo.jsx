import React from 'react';
import CircleTitle from './components/CircleTitle/CircleTitle';
import Badge from './components/Badge/Badge';
import ProjectDesc from './components/ProjectDesc/ProjectDesc';
import Project from './components/Project/Project';

const Typo = () => {
  const projects = [
    {
      projectNum: '01',
      projectName: 'First Project',
      projectDesc:
        'Nice! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsam officia saepe repellat quasi impedit, ab ratione modi, vero quisquam magni et esse sit. Beatae.',
      projectTechs: ['React', 'Angular', 'Vue'],
      projectLinks: ['github.com', 'google.com'],
      projectImg: 'hslcolorselector.png',
    },
    {
      projectNum: '02',
      projectName: 'Second Project',
      projectDesc:
        'Nice! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsam officia saepe repellat quasi impedit, ab ratione modi, vero quisquam magni et esse sit. Beatae.',
      projectTechs: ['React', 'Angular', 'Vue'],
      projectLinks: ['github.com', 'google.com'],
      projectImg: 'react-footwear-shop.png',
    },
  ];
  return (
    <div className="container">
      <div>
        <div className="h1">Heading 1</div>
        <div className="h2">Heading 2</div>
        <div className="h3">Heading 3</div>
        <div className="h4">Heading 4</div>
        <div className="h5">Heading 5</div>
      </div>
      <div className="hr"></div>
      <div>
        <div className="q1">Quote 1</div>
        <div className="q2">Quote 2</div>
        <div className="q3">Quote 3</div>
      </div>
      <div className="hr"></div>
      <div>
        <p className="text-large">Large Text</p>
        <p className="text-medium">Medium Text</p>
        <p className="text-small">Small Text</p>
      </div>
      <div className="hr"></div>
      <div>
        <div>
          <a className="link" href="/">
            Link
          </a>
        </div>
        <div>
          <a className="mail" href="/">
            mail@mail.com
          </a>
        </div>
      </div>
      <div className="hr"></div>
      <CircleTitle num="01.01" title="Who am I?" align="right" />
      <CircleTitle num="01.01" title="Who am I?" align="left" />
      <Badge name="Intellij IDEA" />
      <ProjectDesc
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsum amet
      sed quidem officiis cum eos porro nisi est blanditiis veritatis quisquam
      facilis eius dolores similique dignissimos aperiam officia, ad corrupti ab
      beatae. Blanditiis, vel."
        align="left"
      />
      {projects.map((projectInfo, index) => (
        <Project
          align={index % 2 === 0 ? 'left' : 'right'}
          projectInfo={projectInfo}
          key={projectInfo.projectName}
        />
      ))}
    </div>
  );
};

export default Typo;
