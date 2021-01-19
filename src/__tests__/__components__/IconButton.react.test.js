import React from 'react'
import IconButton from '../../components/IconButton'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

it('renders correctly', () => {
    const tree = renderer.create(
        <IconButton
            title='Test'
            click={() => alert('Aqui teste')}
            icon='test' />).toJSON()
    expect(tree).toMatchSnapshot()
})