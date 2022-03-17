import React from 'react';

const data = [
  {
    name: 'Graston Technique Portal',
    desc: (
      <>
        A full stack web app to act as a portal for Graston clinicians.
      </>
    ),
    link: {
      type: 'site',
      url: 'https://app.grastontechnique.com',
    },
    tech: [
      'JS', 'React', 'NextJS', 'Node', 'Heroku',
    ],
  },
  {
    name: 'Lumatic App',
    desc: (
      <>
        A web platform for businesses and groups to enrich their brands through photography
      </>
    ),
    link: {
      type: 'site',
      url: 'https://lumatic.app',
    },
    tech: [
      'JS', 'React', 'Node', 'Kubernetes',
    ],
  },
  {
    name: 'Guardian News JS Client',
    desc: (
      <>
        A JavaScript client that I wrote to go along with the
        {' '}
        <a href="http://open-platform.theguardian.com/documentation/">Guardian Open Platform</a>
      </>
    ),
    link: {
      type: 'github',
      url: 'https://github.com/PorterK/GuardianJSClient',
    },
    tech: [
      'JS',
    ],
  },
  {
    name: 'DQO Index Calculator',
    desc: (
      <>
        A calculator to determine the isocyanate index and theoretical isocyanurate of
        specified ingredients.
      </>
    ),
    link: {
      type: 'site',
      url: 'https://www.dqoconsulting.com/new-page',
    },
    tech: [
      'JS', 'React', 'Heroku', 'Node',
    ],
  },
  {
    name: 'Uncovered',
    desc: (
      <>
        A platform to use the power of collective impact to bring peace to
        families of murdered or missing people.
      </>
    ),
    link: {
      type: 'site',
      url: 'https://cases.uncovered.com',
    },
    tech: [
      'JS', 'React', 'Node', 'Heroku',
    ],
  },
];

export default data;
