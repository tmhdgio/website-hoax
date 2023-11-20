'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

function submitComment() {
  const name = document.getElementById('name').value;
  const commentText = document.getElementById('comment').value;

  // Create a new comment element
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <strong>${name}:</strong>
    <p>${commentText}</p>
  `;

  // Append the new comment to the comments-list
  const commentsList = document.getElementById('comments-list');
  commentsList.appendChild(commentElement);

  // Clear the form fields after submitting
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
}

function submitComment() {
  const name = document.getElementById('name').value;
  const commentText = document.getElementById('comment').value;

  // Create a unique ID for each comment (in a real scenario, you would use a server-generated ID)
  const commentId = new Date().getTime();

  // Create a new comment element
  const commentElement = document.createElement('div');
  commentElement.id = `comment-${commentId}`;
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <strong>${name}:</strong>
    <p>${commentText}</p>
    <button onclick="deleteComment(${commentId})">Hapus</button>
  `;

  // Append the new comment to the comments-list
  const commentsList = document.getElementById('comments-list');
  commentsList.appendChild(commentElement);

  // Clear the form fields after submitting
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
}

function deleteComment(commentId) {
  const commentElement = document.getElementById(`comment-${commentId}`);

  // Confirm if the user really wants to delete the comment
  const confirmDelete = confirm('Apakah Anda yakin ingin menghapus komentar ini?');

  if (confirmDelete) {
    // Remove the comment element from the DOM
    commentElement.remove();
  }
}

function redirectToInstagram() {
  window.location.href = 'https://www.youtube.com/watch?v=s4z2myYsGBo';
}