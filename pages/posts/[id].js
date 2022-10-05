import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

//? getStaticPaths ve getStaticProps ile kullanıcı istek yapmadan sayfaların oluşturulmasını sağlarız.Bu örnekte kaç tane post olduğunu bildiğimiz için daha isitek yapılmadan arkada bizim için sayfalar oluşturuldu.
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params: {id: post.id.toString()}
        }
    })

    return {
        paths,
        fallback: false, //false diyerek sayfayı bulamadığında 404 sayfası basmaya yarıyor
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await res.json();
    return {
        props: {
            post,
        }
    }
}

//? Bu yöntem server side tarafında yapılıyor.Yani kullanıcı istek yaptıktan sonra sayfa oluşturuluyor
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const post = await res.json();
//     return {
//         props: {
//             post,
//         }
//     }
// }

export default PostDetails;