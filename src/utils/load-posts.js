export const loadPosts = async () => {
    const postsResponse = fetch('https://6799db62747b09cdccccc102.mockapi.io/api/v1/posts');
    const photosResponse = fetch('https://6799db62747b09cdccccc102.mockapi.io/api/v1/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    return postsAndPhotos;
}