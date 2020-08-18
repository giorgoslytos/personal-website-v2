import React from 'react';
import CircleTitle from './components/CircleTitle/CircleTitle';
import Badge from './components/Badge/Badge';
import ProjectDesc from './components/ProjectDesc/ProjectDesc';
import ProjectImg from './components/ProjectImg/ProjectImg';
import BackImg from './images/hslcolorselector.png';
import Project from './components/Project/Project';

const Typo = () => {
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
          <a className="link" href="#">
            Link
          </a>
        </div>
        <div>
          <a className="mail" href="#">
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
      <ProjectImg align="left" img="hslcolorselector.png" />
      <ProjectImg align="right" img="hslcolorselector.png" />
      <ProjectImg align="lefta" img="hslcolorselector.png" />
      <Project align="left" />
      <Project align="right" />
      <Project align="righta" />
    </div>
  );
};

export default Typo;
