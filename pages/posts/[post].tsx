import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { client } from '../../services/graphql/client';
import {
  GET_POSTS_PATHS,
  GET_SINGLE_POST,
} from '../../services/graphql/queries';

interface SinglePost {
  id: string;
  title: string;
  description: string;
  principalPhoto: {
    url: string;
  };
  secondaryPhoto: {
    url: string;
  };
  terciaryPhoto: {
    url: string;
  };
  content: string;
}

interface PostPageProps {
  post: SinglePost;
}

interface PathsData {
  ptfs: {
    slug: string;
  }[]
}

const Posts = ({ post }: PostPageProps) => {
  const router = useRouter();

  return (
    <pre>
      {post && JSON.stringify(post, null, 2)}
    </pre>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<PathsData>({
    query: GET_POSTS_PATHS,
  });

  const paths = data?.ptfs?.map(({ slug }) => {
    return {
      params: { post: slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, errors } = await client.query({
    query: GET_SINGLE_POST,
    variables: {
      slug: params?.post
    }
  });

  const error = errors || !data || data.ptfs.length === 0

  if (error) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: data?.ptfs[0],
    },
    revalidate: 60 * 60 * 8
  };
};

export default Posts;
