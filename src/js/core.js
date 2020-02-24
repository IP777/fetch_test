import cardTamplate from '../template/card.hbs';
import cardTamplate1 from '../template/card-1.hbs';
import cardTamplate2 from '../template/card-2.hbs';
//-----------------------------------------------------
import refs from './refs';
import render from './api';

const inquiries = refs.serchArea.value;
//render.createMarkup( запрос, шаблон , контейнер куда будет рендерить),
refs.markupBtn1.addEventListener('click', () =>
  render.createMarkup(inquiries, cardTamplate, refs.hbContainer),
);
refs.markupBtn2.addEventListener('click', () =>
  render.createMarkup(inquiries, cardTamplate1, refs.hbContainer),
);
refs.markupBtn3.addEventListener('click', () => {
  render.createMarkupId(inquiries, cardTamplate2, refs.hbContainer);
});
refs.deleteBtn.addEventListener('click', deleteHandler);

function deleteHandler() {
  refs.hbContainer.innerHTML = '';
}
