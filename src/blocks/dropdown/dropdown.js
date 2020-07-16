/* eslint-disable no-undef */
// jquery объявлена глобально вебпаком
import 'jquery-ui/ui/effects/effect-fade';

import { ruDeclination } from '../../common/functions';
import Spinner from '../spinner/spinner';

class Dropdown {
  static types = { rooms: 'rooms', customers: 'customers' }

  static dropdownVisibleClass = 'dropdown__list-wrapper_visible';

  $dropdown;

  $listWrapper;

  $inputControl;

  $spinners;

  $buttonsContainer;

  $clearButton;

  $confirmButton;

  $list;

  isAlwaysOpened = false;

  isPure = false;

  areValuesAccepted = true;

  oldNamesValues = [];

  spinners = [];

  get namesValues() {
    const namesValues = [];

    this.$spinners.each((index, element) => {
      namesValues.push(Dropdown._getNameValueFromSpinner(element));
    });

    return namesValues;
  }

  get isOpened() {
    return this.$listWrapper.hasClass(Dropdown.dropdownVisibleClass);
  }

  constructor(rootElement) {
    this._initElements(rootElement);
    this._initParams();
    this._initEvents();
  }

  _initSpinners() {
    this.$spinners.each((index, element) => {
      this.spinners.push(new Spinner(element));
    });
  }

  _initElements(rootElement) {
    this.$dropdown = $(rootElement);

    this.$listWrapper = this.$dropdown.children('.js-dropdown__list-wrapper');
    this.$inputControl = this.$dropdown.find('.js-dropdown__input .js-input__control');
    this.$spinners = this.$dropdown.find('.js-spinner__value');
    this.$buttonsContainer = this.$dropdown.find('.js-dropdown__buttons-container');
    this.$clearButton = this.$dropdown.find('.js-dropdown__clear-button');
    this.$confirmButton = this.$dropdown.find('.js-dropdown__confirm-button');
    this.$list = this.$listWrapper.find('.js-dropdown__list');
    this._initSpinners();
  }

  _initEvents() {
    this._addClearButtonEvents();
    this._addConfirmButtonEvents();
    this._addSpinnersEvents();
    this._addDocumentEvents();
    this._addInputEvents();
  }

  // region clear button
  _addClearButtonEvents() {
    this.$clearButton.on('click.dropdown', this._handleClearButtonClick.bind(this));
  }

  _handleClearButtonClick() {
    this._clearSpinnersValues();
    this._updateVisuals();
  }
  // endregion

  // region confirm button
  _addConfirmButtonEvents() {
    this.$confirmButton.on('click.dropdown', this._handleConfirmButtonClick.bind(this));
  }

  _handleConfirmButtonClick() {
    if (!this.isAlwaysOpened) { this._toggle(); }

    this.areValuesAccepted = true;
    this.oldNamesValues = this.namesValues;

    this._updateControlsVisibility();
  }
  // endregion

  // region spinner
  _addSpinnersEvents() {
    this.$spinners.each((index, element) => {
      $(element).on('spin.datepicker', this._handleSpin.bind(this));
    });
  }

  _handleSpin(event, ui) {
    $(event.currentTarget).spinner('value', ui?.value ? ui?.value : 0);
    this._updateVisuals();
  }
  // endregion

  // region document
  _addDocumentEvents() {
    $(document).on('click.dropdown', this._handleDocumentClick.bind(this));
  }

  _handleDocumentClick(event) {
    const clickedElement = $(event.target);

    if ($.contains(this.$dropdown.get(0), clickedElement.get(0))) return;

    if (this.isOpened) {
      if (!this.isAlwaysOpened) { this._toggle(); }

      this._setSpinnerValues(this.oldNamesValues);
      this._updateVisuals();
    }
  }
  // endregion

  // region input
  _addInputEvents() {
    this.$inputControl.on('click.dropdown', this._handleInputClick.bind(this));
  }

  _handleInputClick() {
    if (!this.isAlwaysOpened) { this._toggle(); }

    if (!this.isOpened) {
      this._setSpinnerValues(this.oldNamesValues);
      this._updateVisuals();
    }
  }
  // endregion

  _initParams() {
    // чтобы не инициализировать повторно
    const isInitialisedKey = 'isDropdownInitialised';
    if (this.$dropdown.data(isInitialisedKey)) return;
    this.$dropdown.data(isInitialisedKey, true);

    this.areValuesAccepted = !this.$dropdown.hasClass('dropdown_unaccepted');

    this.isAlwaysOpened = this.$dropdown.hasClass('dropdown_opened');
    if (this.isAlwaysOpened) {
      this.$listWrapper.toggle('fade');
      this.$listWrapper.toggleClass(Dropdown.dropdownVisibleClass);
    }

    this.isPure = !this.$dropdown.hasClass('dropdown_pure');
    this.oldNamesValues = this.namesValues;

    this._updateVisuals();

    // .position(args) из JqueryUI
    this.$listWrapper.position({
      my: 'center',
      at: 'center',
      of: this.$inputControl,
    });
  }

  _toggle() {
    this.$listWrapper.toggle('fade');
    this.$listWrapper.toggleClass(Dropdown.dropdownVisibleClass);
    this.$inputControl.toggleClass('input_control__focused');
  }

  _getDropdownType() {
    const dropdownParams = {};
    const listClassPrefix = 'dropdown__list_';

    if (this.$list.hasClass(`${listClassPrefix}unified`)) { dropdownParams.isUnified = true; }

    if (this.$list.hasClass(`${listClassPrefix}type_rooms`)) {
      dropdownParams.name = Dropdown.types.rooms;
    } else if (this.$list.hasClass(`${listClassPrefix}type_customers`)) {
      dropdownParams.name = Dropdown.types.customers;
    } else return false;

    return dropdownParams;
  }

  static _selectProperWord(itemsCount, itemName) {
    let result = '';

    switch (itemName.toLowerCase()) {
      case 'спальни':
        result = ruDeclination(itemsCount, 'спал|ьня|ьни|ен');
        break;
      case 'кровати':
        result = ruDeclination(itemsCount, 'кроват|ь|и|ей');
        break;
      case 'ванные комнаты':
        result = `${ruDeclination(itemsCount, 'ванн|ая|ых|ых')} ${
          ruDeclination(itemsCount, 'комнат|а|ы|')}`;
        break;
      case 'гости':
        result = ruDeclination(itemsCount, 'гост|ь|я|ей');
        break;
      case 'младенцы':
        result = ruDeclination(itemsCount, 'младен|ец|ца|цев');
        break;

      default:
    }

    return result;
  }

  _areAllValuesZero() {
    return !this.namesValues?.some((nameValue) => parseInt((nameValue.value), 10) !== 0);
  }

  _createUnifiedString(declinations) {
    const sum = this.namesValues.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.value, 10),
      0,
    );

    return `${sum} ${ruDeclination(sum, declinations)}`;
  }

  _createSeparateRoomsString() {
    let result = this.namesValues.reduce(
      (accumulator, currentNameValue) => `${accumulator} `
        + `${currentNameValue.value} `
        + `${Dropdown._selectProperWord(currentNameValue.value, currentNameValue.name)}, `,
      '',
    );
    result = result.substring(0, result.length - 2).trim();

    return result;
  }

  _createRoomsString(namesValues, isUnified) {
    let result;

    if (isUnified) {
      result = this._createUnifiedString('комнаты');
    } else {
      result = this._createSeparateRoomsString(namesValues);
    }

    return result;
  }

  _createCustomersWithInfantsString() {
    let infants = 0;
    let sum = 0;

    this.namesValues.forEach((nameValue) => {
      if (nameValue.name.toLowerCase() === 'младенцы') {
        infants = nameValue.value;
        return;
      }
      sum += parseInt(nameValue.value, 10);
    });

    return `${sum} ${Dropdown._selectProperWord(sum, 'гости')}, `
      + `${infants} ${Dropdown._selectProperWord(infants, 'младенцы')}`;
  }

  _createCustomersString(namesValues, isUnified) {
    let resultString;

    if (isUnified) {
      resultString = this._createUnifiedString('гост|ь|я|ей');
    } else {
      resultString = this._createCustomersWithInfantsString();
    }

    return resultString;
  }

  /**
   * Создание строки, содержащей суммарную информацию по дропдауну.
   * Формат строки зависит от типа дропдауна
   *
   * @param namesValues   массив пар имя-значение, из которых составляется строка
   * @param dropdownType  тип дропдауна
   * @returns {string}    результирующая строка
   */
  _createInputText(namesValues, dropdownType) {
    let result = '';
    if (this._areAllValuesZero(namesValues)) return result;

    switch (dropdownType.name) {
      case Dropdown.types.rooms: {
        result = this._createRoomsString(namesValues, dropdownType.isUnified);
        break;
      }
      case Dropdown.types.customers: {
        result = this._createCustomersString(namesValues, dropdownType.isUnified);
        break;
      }
      default: {
        const sum = namesValues.reduce(
          (accumulator, nameValue) => accumulator + parseInt(nameValue.value, 10), 0,
        );
        result += `${sum} чего-то`;
        break;
      }
    }
    return result;
  }

  _updateInputText() {
    const dropdownType = this._getDropdownType(this.$list);
    const newInputText = this._createInputText(this.namesValues, dropdownType);

    this.$inputControl.val(newInputText);
  }

  /**
   * Поэлементное сравнение двух массивов имя-значение по значениям.
   * @param namesValues1  первый массив
   * @param namesValues2  второй массив
   * @returns {boolean}   одинаковы ли они
   */
  static _areValuesEqual(namesValues1, namesValues2) {
    return !namesValues2?.some(
      (nameValue, index) => namesValues1?.[index].value !== nameValue.value
    );
  }

  _updateControlsVisibility() {
    const clearVisibleClass = 'dropdown__clear-button_visible';
    const confirmVisibleClass = 'dropdown__confirm-button_visible';
    const containerVisibleClass = 'dropdown__buttons-container_visible';

    const areEmpty = this._areAllValuesZero();
    if (areEmpty) {
      this.$clearButton.removeClass(clearVisibleClass);
    } else {
      this.$clearButton.addClass(clearVisibleClass);
    }

    const areEqual = Dropdown._areValuesEqual(this.namesValues, this.oldNamesValues);
    if (areEqual && this.areValuesAccepted) {
      this.$confirmButton.removeClass(confirmVisibleClass);
    } else {
      this.$confirmButton.addClass(confirmVisibleClass);
    }

    const hasClearVisibleClass = this.$clearButton.hasClass(clearVisibleClass);
    const hasConfirmVisibleClass = this.$confirmButton.hasClass(confirmVisibleClass);
    const areSomeControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;
    if (areSomeControlsVisible && this.isPure) {
      this.$buttonsContainer.addClass(containerVisibleClass);
    } else {
      this.$buttonsContainer.removeClass(containerVisibleClass);
    }
  }

  _setSpinnerValues(namesValuesToSet) {
    this.spinners.forEach((spinner, i) => {
      const valuesIsArray = Array.isArray(namesValuesToSet);
      spinner.value = valuesIsArray ? namesValuesToSet[i].value : namesValuesToSet;
      spinner.triggerSpin();
    });
  }

  _clearSpinnersValues() {
    this._setSpinnerValues(0);
  }

  _updateVisuals() {
    this._updateControlsVisibility();
    this._updateInputText();
  }

  static _getNameValueFromSpinner(element) {
    const $spinnerElement = $(element);

    return { name: $spinnerElement.attr('data-name'), value: $spinnerElement.spinner('value') };
  }
}

export default Dropdown;
