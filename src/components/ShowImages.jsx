// import img1 from process.env.PUBLIC_URL+"/media/img"


function Images() {
    return (<>
        Images:
  
        <div style={{ width: "300px", height: "300px", position: "relative",  }}>
            <img src={process.env.PUBLIC_URL+"/media/img2.png"} style={{position: "absolute", width: "100%"}} />
        </div>
  
        <div style={{ width: "300px", height: "300px", position: "relative",  }}>
            <img src={process.env.PUBLIC_URL+"/media/img2.png"} style={{position: "absolute", width: "100%"}} />
        </div>
  
        <div style={{ width: "300px", height: "300px", position: "relative",  }}>
            <img src={process.env.PUBLIC_URL+"/media/img3.png"} style={{position: "absolute", width: "100%"}} />
        </div>
  
        <div style={{ width: "300px", height: "300px", position: "relative",  }}>
            <img src={process.env.PUBLIC_URL+"/media/img4.png"} style={{position: "absolute", width: "100%"}} />
        </div>
  
        <div style={{ width: "300px", height: "300px", position: "relative",  }}>
            <img src={process.env.PUBLIC_URL+"/media/img5.png"} style={{position: "absolute", width: "100%"}} />
        </div>

    </>);
}

export default Images;