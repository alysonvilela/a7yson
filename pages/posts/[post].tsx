import { GetStaticPaths, GetStaticProps } from "next";
import { route } from "next/dist/next-server/server/router";
import Image from "next/image";
import { useRouter } from "next/router";
import client from "../../components/api/graphql/client";
import { GET_POSTS_PATHS, GET_PTFS, GET_SINGLE_POST } from "../../components/api/graphql/queries";

interface SinglePost {
    id: string;
    title: string;
    description: string;
    principalPhoto: {
        url: string;
    },
    secondaryPhoto: {
        url: string;
    },
    terciaryPhoto: {
        url: string;
    },
    content?: {
        html?: string;
    }[],
}

interface PostPageProps {
    post: SinglePost;
}

const Posts = ({ post }: PostPageProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return <section className="text py-3 py-md-5">
        <div className="container">
            <div className="row">
                <div className="textArea">
                    <div className="greenpart">
                        <div className="text col-lg-6">
                            <h2>{post.title}</h2>
                            <p>
                                {post.description}
                            </p>
                            {post?.content[0] &&
                                <div dangerouslySetInnerHTML={{
                                    __html: post.content[0].html
                                }} />
                            }
                        </div>
                        <div className="img col-lg-6 d-none d-xl-flex">
                            <div className="postImage cont-min col-lg-7 p-white position-relative bg-transparent">
                                <Image
                                    src={post.principalPhoto.url}
                                    alt="Alyson's character thinking"
                                    layout="fill"
                                    objectFit="cover"
                                    className="position-absolute rounded-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { ptfs } = await client.request(GET_POSTS_PATHS);

    const paths = ptfs?.map((path: {
        slug: string;
    }) => {
        return {
            params: { post: path.slug }
        }
    })

    return {
        paths,
        fallback: true,
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { ptfs } = await client.request(GET_SINGLE_POST, {
        slug: params?.post
    });


    // console.log(ptfs)

    // if (!ptfs[0]?.slug) {
    //     return {
    //         notFound: true
    //     }
    // }

    return {
        props: {
            post: ptfs[0]
        },
        revalidate: 60 * 60 * 8
    }
}

export default Posts;




