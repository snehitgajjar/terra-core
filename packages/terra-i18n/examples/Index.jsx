/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import I18nProvider from '!raw-loader!../src/I18nProvider.jsx';

// examples
import I18nDemo from './I18nDemo';

const I18nExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={I18nProvider} />
    <h2 id="baseWithI18n">I18nProvider</h2>
    <I18nDemo />
  </div>
);

export default I18nExamples;
