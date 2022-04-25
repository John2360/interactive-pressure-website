import React, {useRef, useState, useEffect} from 'react'
import background3 from "../imgs/bg5.jpg";
import planebg from "../imgs/plane-bg.jpg";
import plane from "../imgs/plane.png";
import Modal from 'react-modal';


function PageFour() {
    const [altitude, setAltitude] = useState(0);
    const [pressure, setPressure] = useState(0);

    /* scroll to bottom */
    const endOfPlane = useRef(null)
    const scrollToBottom = () => {
        endOfPlane.current?.scrollIntoView({ behavior: "smooth" })
    }

    /* get image height */
    const [imageHeight, setImageHeight] = useState(0);
    const onImgLoad = ({ target: img }) => {
        const { offsetHeight, offsetWidth } = img;
        setImageHeight(offsetHeight);
        scrollToBottom();
      };


    /* current scroll */
    const onScroll = (e) => {
      const currentScrollY = e.target.scrollTop;
      console.log(((imageHeight-currentScrollY)/imageHeight) +0.08268551236749117);
      const altitude = (((imageHeight-currentScrollY)/imageHeight) +0.08268551236749117)*50000;
      setAltitude(altitude);
    };

    /* set preasure */
    useEffect(() => {
        if (altitude < 11000) {
            const pressure = 101.29 * (((15.04-.00649*altitude)+273.1)/288.08)**5.256;
            setPressure(pressure);
        } else if (11000 < altitude < 25000) {
            const pressure = 22.65 * Math.E**(1.73-.000157*altitude);
            setPressure(pressure);
        } else if (altitude > 25000) {
            const pressure = 2.488 * (((-131.21+.00299*altitude)+273.1)/216.6)**(-11.388);
            setPressure(pressure);
        }
    }, [altitude]);

    /* sources */
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');



  return (
    <div className="h-screen w-screen flex items-center justify-center"  style={{backgroundImage: "url("+background3+")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-4xl text-black'>Sources</h2>
        <div>Research:</div>
        <ul>
            <li>https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html&sa=D&source=docs&ust=1650854192569718&usg=AOvVaw3BCePW7PYFb1wqSKhFVUnd</li>
            <li>https://www.nationalgeographic.org/encyclopedia/atmospheric-pressure/#:~:text=Atmospheric%20pressure%20is%20commonly%20measured,how%20high%20the%20mercury%20rises.</li>
        </ul>
        <div>Images:</div>
        <ul>
            <li>https://videohive.net/item/clouds-and-sky-4k/32548953</li>
            <li>https://www.pexels.com/search/galaxy%20wallpaper/</li>
            <li>https://wallpaperaccess.com/4k-earth</li>
            <li>https://wallpaperaccess.com/4k-sky</li>
            <li>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VSvxQ6qmBL-apJNj5zFOe_NxYLqkZccw9w&usqp=CAU</li>
        </ul>

        <div className='p-5'></div>
        <button onClick={closeModal}>close</button>
      </Modal>
      {/* <ParticleEffect /> */}
      <div className="container flex items-center justify-center">
        
      <div className=" items-center">
            <div className='bg-white rounded-lg p-10 drop-shadow-xl max-w-6xl'>

            <h2 className='lg:text-4xl md:text-xl font-bold'>Interactive Application</h2>
            <p className='pt-4'>Let's now directly apply this to avation. Below is a simulator where you can adjust the alittiude of the plane and view the corresponding preasure. Use the scroll bar or middle mouse to adjust the planes altitude.</p>
            <div className='p-8'></div>
            <div className='pt-25 p-10 max-h-96 overflow-scroll relative ' onScroll={onScroll} >
                <img src={plane} className='mx-auto inset-x-0 fixed' alt='plnae' width={500} style={{objectFit: 'contain'}}/>
                <div className='bg-white left-24 rounded-lg p-2 drop-shadow-xl fixed'>{Math.round(altitude*100)} m</div>
                <div className='bg-white left-60 rounded-lg p-2 drop-shadow-xl fixed'>{Math.round(pressure*1000*100)} Pa</div>
                <img src={planebg} onLoad={onImgLoad} alt='strat' style={{objectFit: 'none'}}/>
                <div ref={endOfPlane} />
            </div>
            <p className='pt-4'>The formulas used to dervive the pressure are from <a href="https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html">NASA's website. Click here to view. </a ><a onClick={openModal}>Click here to view other sources.</a></p>

            </div>

      </div>
            


          
      </div>
    </div>
  )
}

export default PageFour