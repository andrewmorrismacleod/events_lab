document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);
})

const handleForm = (event) => {

  event.preventDefault();
  console.log(event);
  const newBookListItem = listItemCreate(event);

  const list = document.querySelector('#book_list');
  list.appendChild(newBookListItem);

  console.dir(list)
  event.target.reset();
}

const listItemCreate = (event) => {

  const newBookListItem = document.createElement('li');

  const pTitle = document.createElement('p')
  pTitle.textContent = `Title: ${event.target.title.value}`;
  pTitle.classList.add('title')

  const pAuthor = document.createElement('p')
  pAuthor.textContent = `Author: ${event.target.author.value}`;
  pAuthor.classList.add('author')

  const pCategory = document.createElement('p')
  pCategory.textContent = `Category: ${event.target.category.value}`;
  pCategory.classList.add('category')

  const divbox = document.createElement('div')
  divbox.classList.add('divbox')


  // newBookListItem.appendChild(pTitle);
  // newBookListItem.appendChild(pAuthor);
  // newBookListItem.appendChild(pCategory);

  divbox.appendChild(pTitle);
  divbox.appendChild(pAuthor);
  divbox.appendChild(pCategory);

  newBookListItem.appendChild(divbox);

  return newBookListItem;
};
