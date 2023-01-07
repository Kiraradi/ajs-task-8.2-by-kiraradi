import ErrorRepository from '../src/ErrorRepository';

test('test calling a non-existent error', () => {
  const err = new ErrorRepository();

  expect(() => {
    err.translate('12');
  }).toThrow();
});

test.each([
  ['error 1', '1', 'Некорректное имя'],
  ['error 2', '2', 'Некорректный тип'],
  ['error 3', '3', 'В команде уже  есть этот персонаж'],
  ['error 4', '4', 'В команде нет персонажей'],
  ['error 5', '5', 'Ошибка с таким номером отсутствует'],
])('test %s', (error, numberError, rightAnswer) => {
  const errRep = new ErrorRepository();
  const errText = errRep.translate(numberError);

  expect(errText).toBe(rightAnswer);
});
