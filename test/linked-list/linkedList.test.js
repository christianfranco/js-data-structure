const LinkedList = require('../../src/linked-list/linkedList');
const NodeItem = require('../../src/linked-list/nodeItem');

const chai = require('chai');
const {expect} = chai;

describe('Test Linked list', () => {
    it('Create :: Should be empty', () => {
        const list = new LinkedList();

        expect(list.head).to.null;
        expect(list.tail).to.null;
        expect(list.length).to.be.equal(0);
    });

    it('push :: Should add an item for an empty list', () => {
        const list = new LinkedList();

        list.push(2);

        expect(list.head).to.not.be.null;
        expect(list.tail).to.not.be.null;
        expect(list.length).to.be.equal(1);

        expect(list.head).to.be.an.instanceOf(NodeItem);
        expect(list.head.next).to.be.null;
        expect(list.head.value).to.be.equal(2);
    });

    it('push :: Should add an more items', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.length).to.be.equal(3);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next.value).to.be.equal(2);
        expect(list.head.next.next.value).to.be.equal(3);
        expect(list.tail.value).to.be.equal(3);
        expect(list.tail.next).to.be.null;
    });

    it('pop :: having at least 3 items, should remove last one', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        list.pop();

        expect(list.length).to.be.equal(2);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next.value).to.be.equal(2);

        expect(list.tail.value).to.be.equal(2);
        expect(list.tail.next).to.be.null;
    });

    it('pop :: having at least 2 items, should remove last one', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        list.pop();

        expect(list.length).to.be.equal(1);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next).to.be.null;
        expect(list.tail.value).to.be.equal(1);
    });

    it('pop :: having at least 1 items, should remove last one', () => {
        const list = new LinkedList();

        list.push(1);
        list.pop();

        expect(list.length).to.be.equal(0);
        expect(list.head).to.be.null;
        expect(list.tail).to.be.null;
    });

    it('pop :: having a empty list', () => {
        const list = new LinkedList();

        list.pop();

        expect(list.length).to.be.equal(0);
        expect(list.head).to.be.null;
        expect(list.tail).to.be.null;
    });

    it('unshift :: having a empty list', () => {
        const list = new LinkedList();

        list.unshift(1);

        expect(list.head.next).to.be.null;
        expect(list.head.value).to.be.equal(1);
        expect(list.length).to.be.equal(1);
    });

    it('unshift :: having values', () => {
        const list = new LinkedList();

        list.push(1);
        list.unshift(2);

        expect(list.head.value).to.be.equal(2);
        expect(list.head.next.value).to.be.equal(1);
        expect(list.tail.value).to.be.equal(1);
        expect(list.tail.next).to.be.null;

        expect(list.length).to.be.equal(2);
    });

    it('shift :: having just head', () => {
        const list = new LinkedList();

        list.push(1);
        list.shift();

        expect(list.head).to.be.null;
        expect(list.tail).to.be.null;
        expect(list.length).to.be.equal(0);
    });

    it('shift :: having values', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        list.shift();

        expect(list.head.value).to.be.equal(2);
        expect(list.tail.value).to.be.equal(2);
        expect(list.tail.next).to.be.null;
        expect(list.length).to.be.equal(1);
    });

    it('get :: first index', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const item = list.get(0);

        expect(item.value).to.be.equal(1);
        expect(item.next.value).to.be.equal(2);
    });

    it('get :: last index', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        const item = list.get(2);

        expect(item.value).to.be.equal(3);
        expect(item.next).to.be.null;
    });

    it('get :: unknown index', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        const item = list.get(3);

        expect(item).to.be.undefined;
    });

    it('get :: negative index', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        const item = list.get(-1);

        expect(item).to.be.undefined;
    });

    it('set :: found index', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const found = list.set(0, 3);

        const item = list.get(0);

        expect(found).to.be.true;
        expect(item.value).to.be.equal(3);
        expect(item.next.value).to.be.equal(2);
    });

    it('set :: not found index', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const found = list.set(10, 3);

        expect(found).to.be.false;
    });

    it('insert :: head', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const inserted = list.insert(0, 3);

        expect(inserted).to.be.true;
        expect(list.length).to.be.equal(3);

        expect(list.head.value).to.be.equal(3);
        expect(list.head.next.value).to.be.equal(1);
        expect(list.head.next.next.value).to.be.equal(2);
    });

    it('insert :: tail', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const inserted = list.insert(1, 3);

        expect(inserted).to.be.true;
        expect(list.length).to.be.equal(3);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next.value).to.be.equal(2);
        expect(list.head.next.next.value).to.be.equal(3);
    });

    it('insert :: middle', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        const inserted = list.insert(1, 4);

        expect(inserted).to.be.true;
        expect(list.length).to.be.equal(4);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next.value).to.be.equal(4);
        expect(list.head.next.next.value).to.be.equal(2);
        expect(list.head.next.next.next.value).to.be.equal(3);
    });

    it('remove :: head', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const removed = list.remove(0);

        expect(removed).to.be.true;
        expect(list.length).to.be.equal(1);

        expect(list.head.value).to.be.equal(2);
        expect(list.tail.value).to.be.equal(2);
    });

    it('remove :: tail', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);

        const removed = list.remove(1);

        expect(removed).to.be.true;
        expect(list.length).to.be.equal(1);

        expect(list.head.value).to.be.equal(1);
        expect(list.tail.value).to.be.equal(1);
    });

    it('remove :: middle', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        const removed = list.remove(1);

        expect(removed).to.be.true;
        expect(list.length).to.be.equal(2);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next.value).to.be.equal(3);
        expect(list.tail.value).to.be.equal(3);
    });

    it('reverse', () => {
        const list = new LinkedList();

        list.push(1);
        list.push(2);
        list.push(3);

        const reversedList = list.reverse();

        expect(reversedList.length).to.be.equal(3);

        expect(list.head.value).to.be.equal(3);
        expect(list.head.next.value).to.be.equal(2);
        expect(list.head.next.next.value).to.be.equal(1);
        expect(list.tail.value).to.be.equal(1);
    });
})