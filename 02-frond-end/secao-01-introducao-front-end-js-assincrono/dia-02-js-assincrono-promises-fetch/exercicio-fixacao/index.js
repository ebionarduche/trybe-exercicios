import './style.css';

import {
    fillUsersSelect,
    fillPosts,
    fillFeaturedPostComments,
    clearPageData,
    fillErrorMessage,
} from './utils/updateUl';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

fetch(USERS_API)
    .then((response) => response.json())
    .then((data) => {
        const { users } = data;
        fillUsersSelect(users);
        // test(users);

    });

// const test = (users) => {
//     users.forEach(({ age }) => console.log(age));
// };

// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

usersSelect.addEventListener('change', () => {
    clearPageData();
    const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

    fetch(POSTS_API)
        .then((response) => response.json())
        .then((data) => {
            const { posts } = data;
            fillPosts(posts);
            const [featuredPost] = posts;
            const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;
            return fetch(COMMENTS_API);
        })
        .then((res) => res.json())
        .then((data) => {
            const { comments } = data;
            fillFeaturedPostComments(comments);
        })
        .catch((error) => {
            fillErrorMessage('Error retrieving information');
            console.log(error.message);
        });
});
