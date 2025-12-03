document.getElementById('meme-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const topText = document.getElementById('top-text').value.trim();
  const bottomText = document.getElementById('bottom-text').value.trim();
  const imageUrl = document.getElementById('image-url').value.trim();

  if (!topText || !bottomText || !imageUrl) return;

  const memeContainer = document.getElementById('meme-container');

  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');

  const img = document.createElement('img');
  img.src = imageUrl;

  const top = document.createElement('div');
  top.classList.add('meme-text', 'top');
  top.innerText = topText;

  const bottom = document.createElement('div');
  bottom.classList.add('meme-text', 'bottom');
  bottom.innerText = bottomText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => memeDiv.remove());

  memeDiv.append(img, top, bottom, deleteBtn);
  memeContainer.appendChild(memeDiv);

  document.getElementById('meme-form').reset();
});
