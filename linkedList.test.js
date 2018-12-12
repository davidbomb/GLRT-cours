//import LinkedList from './ex1';
const LinkedList = require('./linkedList')
//const Element = require('./element')



test('add Element "1" to the list with no element', () => {
    var linkedList = new LinkedList()
    linkedList.add(1)
    var head = linkedList.head
    expect(head.element).toEqual(1);
    expect(linkedList.size).toEqual(1);
});


test('insert one element on a single element list', () => {
    var linkedList = new LinkedList()
    linkedList.add(1)
    linkedList.insertAt(0, 0)
    expect(linkedList.head.element).toEqual(0);
});

test('removeFrom', () => {
    var linkedList = new LinkedList()
    linkedList.add(1)
    linkedList.insertAt(0, 0)
    linkedList.insertAt(5, 2)
    linkedList.insertAt(5, 2)
    linkedList.removeFrom(2)
    expect(linkedList.size).toEqual(3)
    expect(linkedList.head.element).toEqual(0)
    expect(linkedList.indexOf(5)).toEqual(2);
});

test('removeElement', () => {
    var linkedList = new LinkedList()
    linkedList.add(0)
    linkedList.insertAt(1, 1)
    linkedList.insertAt(5, 2)
    linkedList.insertAt(6, 3)
    linkedList.removeElement(5)
    linkedList.removeElement(0)
    expect(linkedList.size).toEqual(2)
    expect(linkedList.head.element).toEqual(1);
    expect(linkedList.indexOf(6)).toEqual(linkedList.size - 1);

});