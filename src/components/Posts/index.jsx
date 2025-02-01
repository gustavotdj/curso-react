import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts }) => (
  <div className="posts g-5">
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
