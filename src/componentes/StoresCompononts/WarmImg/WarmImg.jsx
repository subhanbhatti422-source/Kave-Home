import './WarmImg.css'
import rightImg from '../../../assets/img/img-landing-inspo-store-05.jpg'
import leftImg from '../../../assets/img/img-landing-inspo-store-04.jpg'


const WarmImg = () => {
  return (
   <>
    <section className="warm-img2">
        <div className="img-text-img2">
            <div className="left-content2">
                <div className="left-img">
                <img src={leftImg} alt="" />
                </div>
                <div className="leftContent-span">
                <span className='span-2'>Experience a warm, inviting environment where every detail is designed to make you feel at home. Discover our thoughtfully curated collection of furniture, lighting, and home accessories in beautifully styled spaces that inspire creativity. Take your time exploring timeless designs, premium materials, and functional solutions while receiving expert guidance tailored to your needs. Whether you're redesigning a single room or transforming your entire home, our team is here to help you create a space you'll love for years to come.</span>
                </div>
            </div>
            <div className="right-img2">
                <img src={rightImg} alt="" />
            </div>
        </div>
    </section>
   </>
  )
}

export default WarmImg
