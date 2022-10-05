import React from 'react'
import {URL} from "../../environment/index";

const VideoDetails = ({video}) => {
  return (
    <div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
    </div>
  )
}

//? getStaticPaths ve getStaticProps ile kullanıcı istek yapmadan sayfaların oluşturulmasını sağlarız.Bu örnekte kaç tane post olduğunu bildiğimiz için daha isitek yapılmadan arkada bizim için sayfalar oluşturuldu.
export const getStaticPaths = async () => {
    const res = await fetch(`${URL}/api/videos`);
    const videos = await res.json();
    const paths = videos.map(video => {
        return {
            params: {id: video.id.toString()}
        }
    })

    return {
        paths,
        fallback: false, //false diyerek sayfayı bulamadığında 404 sayfası basmaya yarıyor
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${URL}/api/videos/${context.params.id}`);
    const video = await res.json();
    return {
        props: {
            video,
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

export default VideoDetails;