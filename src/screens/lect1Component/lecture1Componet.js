import '../lect1Component/lecture1Componet.css'

const LectoneComponen = () => {
    console.log('LectoneComponen rendering');
    return (
        <>
        <div className="main-lecture-container"> 
        
        <div className="new-lecture-container">
            <p>الاحدث القادم</p>
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
     </>
    )
}

export default LectoneComponen