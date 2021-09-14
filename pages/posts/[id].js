import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    // [
    //   { params: { id: 'ssg-ssr'}},
    //   { params: { id: 'pre-rendering'}}
    // ]
    // がpathsに格納されている
    paths,
    // 指定したパス以外なら404を返す
    // 自作のエラーページなども指定できるらしい
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
