import './lecturesecondComponet.css'

const LectoneTwoComponen = () => {
    return (
        <div className="main-container"> 
        <div className="new-container">
            <p>الاحدث التالية</p>
        </div>
        <div className="container">
      <div className='content' >
      <div className='title' >
        <p>محاضرة العلوم التحشيشية</p> 
      </div>
      <div className='descr' >
      <p>وصف المحاضرة وصف المحاضرة وصف المحاضرة وصف  وصف المحاضرة </p>
      </div>

      <div className='subjects'>
    <div class='subject-container'>
        <p>الموقع</p>
    </div>
    <div class='subject-container'>
        <p>التاريخ</p>
    </div>
    <div class='subject-container'>
        <p>الموقع</p>
    </div>
    </div>
      </div>
      <div className='circle' ></div>

    </div>
    </div>
       
    )
}

export default LectoneTwoComponen