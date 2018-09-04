const LinkedList = require('./linkedList')
var assert = require('assert')


describe('Add one item to head', function () {
    var list = new LinkedList('first')
    it('Should add second as a new item in head of the list', () => {
        list.addToHead('second')
        assert.equal(
            JSON.stringify(list, null),
            '{"head":{"value":"second","next":{"value":"first","next":null}},"length":2}')
})
})
describe('Add two items at once', function () {
    var list = new LinkedList('first')
    it('Should add two new items in the list, the second item should be the head', () => {
        list.addToHead('second','third')
        assert.equal(
            JSON.stringify(list, null),
            '{"head":{"value":"third","next":{"value":"second","next":{"value":"first","next":null}}},"length":3}')
})
})

describe('Delete a random item in the list', function () {
    var list = new LinkedList('first','second','third')
    it('Should remain only two items in the list, third pointing to first', () => {
        list.remove('second')
        assert.equal(
            JSON.stringify(list, null),
            '{"head":{"value":"third","next":{"value":"first","next":null}},"length":2}')
})
})
describe('Search an item in the list', function () {
    var list = new LinkedList('first','second','third')
    it('Should display the searched item, and the next pointer values', () => {
        assert.equal(  JSON.stringify(list.find('second'),null),
            '{"value":"second","next":{"value":"first","next":null}}')
})
})
describe('Search an item that is not in the list', function () {
    var list = new LinkedList('first','second','third')
    it('Should display null', () => {
        assert.equal(  JSON.stringify(list.find('aa')),
            'null')
})
})
