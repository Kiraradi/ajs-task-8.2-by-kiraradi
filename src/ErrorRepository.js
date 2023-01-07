export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      ['1', 'Некорректное имя'],
      ['2', 'Некорректный тип'],
      ['3', 'В команде уже  есть этот персонаж'],
      ['4', 'В команде нет персонажей'],
      ['5', 'Ошибка с таким номером отсутствует'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error(`${this.errors.get('5')}`);
    }

    return this.errors.get(code);
  }
}
