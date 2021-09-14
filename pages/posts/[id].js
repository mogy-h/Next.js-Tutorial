import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

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

