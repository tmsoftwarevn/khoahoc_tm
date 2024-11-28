import Video from 'next-video';

const VideoShow = (props) => {
    const link = 'https://www.youtube.com/watch?v=rPg_rAUHLLE&list=PLIBTPVfnlBBn1U3UWYSQ8kYW2ZQnKMEl_&index=12';
    
    return <Video src={link} />;
    
}

export default VideoShow;