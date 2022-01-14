import React from 'react';

const data = [
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
    name: 'Robovise',
    desc: (
      <>
        A robo advisor built for the modern world.
      </>
    ),
    link: {
      type: 'site',
      url: 'https://robovise.com',
    },
    tech: [
      'JS', 'React', 'Webpack', 'AWS', 'Node', 'ECS',
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
    name: 'Sump Thing',
    desc: (
      <>
        An open source aquarium monitoring hardware/software solution.
      </>
    ),
    link: {
      type: 'github',
      url: 'https://github.com/pyazo',
    },
    tech: [
      'C++', 'C#', 'JS', 'React', 'Arduino', 'Node',
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
