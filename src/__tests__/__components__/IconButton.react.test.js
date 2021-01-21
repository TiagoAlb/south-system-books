import React from 'react'
import IconBtn from '../../components/IconBtn'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

it('renders correctly', () => {
    const tree = renderer.create(
        <IconBtn
            title='Test'
            click={() => alert('Aqui teste')}
            icon='test' />).toJSON()
    expect(tree).toMatchSnapshot()
})