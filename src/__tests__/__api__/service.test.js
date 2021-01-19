import { get, list, pagedList } from '../../services/Rest'

it('works with specific id', async () => {
    await get('HjURCQHV4wAC',
        (success) => {
            expect(success.volumeInfo.title).toEqual('Stephen King')
            expect.assertions(1)
        })
})

it('works without inform page', async () => {
    await list('test',
        (success) => {
            expect(success.kind).toEqual('books#volumes')
            expect.assertions(1)
        })
})

it('works paged request', async () => {
    await pagedList('', 0,
        (success) => {
            expect(success.kind).toEqual('books#volumes')
            expect.assertions(1)
        })
})