const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    let testPromise = getBodyFromRequest(fakeReq);
    fakeReq.emit('end');
    testPromise
      .then(body => {
        if (body === '') {
          done()
        } else {
          done(`Failed. Got "${body}"`)
        }
      })
  });

  it('returns the data read from the stream', done => {
    let testPromise = getBodyFromRequest(fakeReq);
    let data1 = 'hello';
    let data2 = ' world';
    fakeReq.emit('data', data1);
    fakeReq.emit('data', data2);
    fakeReq.emit('end');
    testPromise
      .then(body => {
        if (body === data1 + data2) {
          done()
        } else {
          done(`Failed. didn't get expected result`)
        }
      })
  });
});
