interface MockPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type DataDTO = Pick<MockPost, 'id' | 'email'> 

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: typeof COMMENTS_URL): Promise<MockPost[]> => {
  return fetch(url)
    .then((data) => data.json())
    .catch((e) => console.error(e));
};

getData(COMMENTS_URL).then((data) => {
  const dataDTO: DataDTO[] = data.map(({id, email}) => {
    return { id, email };
  });

  dataDTO.forEach(({id, email}) => console.log(`ID: ${id}, Email: ${email}`))

});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
