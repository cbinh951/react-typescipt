import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId
})

test('header render with correct text', () => {
  const headerEl = getByTestId('header');
  expect(headerEl.textContent).toBe('My Counter');
});

test('counter initial start with text of 0', () => {
  const counterEl = getByTestId('counter');
  expect(counterEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe('1');
});

test('add button renders with +', () => {
  const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('add button renders with -', () => {
  const subtractBtn = getByTestId('subtract-btn');
  expect(subtractBtn.textContent).toBe('-');
});

test("change value of input works correctly", () => {
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })
  expect(inputEl.value).toBe("5")
})

test("click on plus btn add 1 to counter", () => {
  const btnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(btnEl)
  expect(counterEl.textContent).toBe("1")
})

test("click on subtract btn subtract 1 to counter", () => {
  const btnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(btnEl)
  expect(counterEl.textContent).toBe("-1")
})

test("change input value then clicking on add btn works correctly", () => {
  const btnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(btnEl)
  expect(counterEl.textContent).toBe("5")
})

test("change input value then clicking on subtract btn works correctly", () => {
  const btnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(btnEl)
  expect(counterEl.textContent).toBe("-5")
})

test("adding and then subtracting leads to the correct counter number", () => {
  const subtractBtn = getByTestId('subtract-btn');
  const addBtn = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: "10"
    }
  })

  fireEvent.click(addBtn)
  fireEvent.click(addBtn)
  fireEvent.click(addBtn)
  fireEvent.click(addBtn)
  fireEvent.click(subtractBtn)
  fireEvent.click(subtractBtn)
  expect(counterEl.textContent).toBe("20")
})

test("counter contains correct className", () => {
  const subtractBtn = getByTestId('subtract-btn');
  const addBtn = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  expect(counterEl.className).toBe("")
  fireEvent.change(inputEl, {
    target: {
      value: "59"
    }
  })
  fireEvent.click(addBtn)
  expect(counterEl.className).toBe("")
  fireEvent.click(addBtn)
  expect(counterEl.className).toBe("green")

})