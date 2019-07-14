import React from 'react';

import QuickForm from 'uniforms-bootstrap3/QuickForm';

import createSchema from './_createSchema';
import mount from './_mount';

test('<QuickForm> - renders', () => {
  const element = <QuickForm schema={createSchema()} />;
  const wrapper = mount(element);

  expect(wrapper).toHaveLength(1);
});
