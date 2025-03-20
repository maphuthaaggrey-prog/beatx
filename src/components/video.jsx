import video from '../assets/videoplay.mp4'
const Video = () => {
    return ( 

        <>
              <video
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
</>
     );
}
 
export default Video;