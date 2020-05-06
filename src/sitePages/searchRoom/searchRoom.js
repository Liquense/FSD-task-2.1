/* eslint-disable no-undef */
// jquery импортирована вебпаком
import '../../common';
import '../../blocks/Slider/slider';
import '../../blocks/List/list';
import '../../blocks/Pagination/Pagination';
import Checkbox from '../../blocks/Checkbox/Checkbox';
import initRoomPreviewCard from '../../Cards/roomPreviewCard/roomPreviewCard';

import './searchRoom.pug';
import './searchRoom.scss';
import { initDatepickerInputs } from '../../blocks/Input/_type/_datepicker/input_type_datepicker';
import { initExpandableLists } from '../../blocks/List/_expandable/list_expandable';
import { initDropdowns } from '../../blocks/Input/_type/_dropdown/input__list_type_dropdown';

function initAllRoomPreviewCardsInContainer($container) {
  $container.find('.roomPreviewCard').each(initRoomPreviewCard);
}

function initLinksInPagination() {
  const $pagination = $(this);
  const $paginationContent = $pagination.children('.pagination__contentContainer');
  const $paginationButtons = $pagination.children('.pagination__buttonsContainer');

  $paginationButtons.addHook('afterPaging', () => {
    initAllRoomPreviewCardsInContainer($paginationContent);
    const $roomPreviewCardsTextContent = $('.roomPreviewCard__textContent');
    $roomPreviewCardsTextContent.click(() => {
      window.location.href = 'roomDetails.html';
    });
  });
}

const $paginations = $('.pagination');
$paginations.each(initLinksInPagination);

const $roomPreviewCardsTextContent = $('.roomPreviewCard__textContent');
$roomPreviewCardsTextContent.click(() => {
  window.location.href = 'roomDetails.html';
});

Checkbox.initDefault();

initDatepickerInputs();
initExpandableLists();
initDropdowns();
