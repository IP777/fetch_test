import cardTamplate from '../template/card.hbs';
import cardTamplate1 from '../template/card-1.hbs';
import cardTamplate2 from '../template/card-2.hbs';
//-----------------------------------------------------
import refs from './refs';
import render from './api';

//render.createMarkup( запрос, шаблон , контейнер куда будет рендерить),
refs.markupBtn1.addEventListener('click', () =>
  render.createMarkup(refs.serchArea.value, cardTamplate, refs.hbContainer),
);
refs.markupBtn2.addEventListener('click', () =>
  render.createMarkup(refs.serchArea.value, cardTamplate1, refs.hbContainer),
);
refs.markupBtn3.addEventListener('click', () => {
  render.createMarkupId(refs.serchArea.value, cardTamplate2, refs.hbContainer);
});
refs.deleteBtn.addEventListener('click', deleteHandler);

function deleteHandler() {
  refs.hbContainer.innerHTML = '';
}
