import { render, screen } from '@testing-library/react';
import GitHubCard from './GItHubCard.js';
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
})

