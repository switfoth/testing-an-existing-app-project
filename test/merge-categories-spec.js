const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      let categories = []
      let actual = mergeCategories(template, categories, 'li')
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<ul>')
      expect(actual).to.include('</ul>')
      expect(actual).to.not.include('<li>')
      expect(actual).to.not.include('</li>')
      expect(actual).to.not.include('<!--Content here--!>')
    });

    it("should return a single <li> for one category", () => {
      let categories = ["string"]
      let actual = mergeCategories(template, categories, 'li')
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<ul>')
      expect(actual).to.include('</ul>')
      expect(actual).to.include('<li>string</li>')
      expect(actual).to.not.include('<!--Content here--!>')

    });

    it("should return an <li> for each category", () => {
      let categories = ["string", "bang", "zoom"]
      let actual = mergeCategories(template, categories, 'li')
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<ul>')
      expect(actual).to.include('</ul>')
      expect(actual).to.include('<li>string</li>')
      expect(actual).to.include('<li>bang</li>')
      expect(actual).to.include('<li>zoom</li>')
      expect(actual).to.not.include('<!--Content here--!>')

    });
  });

  context("using <option> tags", () => {
    const template = `
    <div>
    <select>
    <!-- Content here -->
    </select>
    </div>
    `;

    it("should return no <option>s for no categories", () => {
      let categories = []
      let actual = mergeCategories(template, categories, 'option')
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<select>')
      expect(actual).to.include('</select>')
      expect(actual).to.not.include('<option>')
      expect(actual).to.not.include('</option>')
      expect(actual).to.not.include('<!--Content here--!>')
    });

    it("should return a single <option> for one category", () => {
      let categories = ["string"]
      let actual = mergeCategories(template, categories, 'option')
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<select>')
      expect(actual).to.include('</select>')
      expect(actual).to.include('<option>string</option>')
      expect(actual).to.not.include('<!--Content here--!>')
    });

    it("should return an <option> for each category", () => {
      let categories = ["string", "bang", "zoom"]
      let actual = mergeCategories(template, categories, 'option')
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<select>')
      expect(actual).to.include('</select>')
      expect(actual).to.include('<option>string</option>')
      expect(actual).to.include('<option>bang</option>')
      expect(actual).to.include('<option>zoom</option>')
      expect(actual).to.not.include('<!--Content here--!>')

    });
  });
});
