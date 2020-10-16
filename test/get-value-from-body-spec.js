const { expect } = require('chai');
const { getValueFromBody } = require('../get-value-from-body');

describe("The getValueFromBody function", () => {
  it('returns an empty string for an empty body', () => {
    // Arrange
    const body = "";
    const key = "notThere";

    // Act
    let testFunc = getValueFromBody(body, key);


    // Assert
    expect(testFunc).to.equal("");
  });

  it('returns an empty string for a body without the key', () => {
    // Arrange
    const body = "name=Bess&age=29&job=Boss";
    const key = "notThere";

    // Act
    let testFunc = getValueFromBody(body, key);


    // Assert
    expect(testFunc).to.equal("");

  });

  it('returns the value of the key in a simple body', () => {
    const body = "name=Bess";
    const key = "name";

    // Act
    let testFunc = getValueFromBody(body, key);


    // Assert
    expect(testFunc).to.equal("Bess");
  });

  it('returns the value of the key in a complex body', () => {
    const body = "name=Bess&age=29&job=Boss";
    const key = "age"

    // Act
    let testFunc = getValueFromBody(body, key);


    // Assert
    expect(testFunc).to.equal("29");
  });

  it('decodes the return value of URL encoding', () => {
    const body = "name=Bess&age=29&job=Boss&level=Level%20Thirty-One";
    const key = "level";

    // Act
    let testFunc = getValueFromBody(body, key);


    // Assert
    expect(testFunc).to.equal("Level Thirty-One");
  });
});
