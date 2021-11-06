
import './App.css';
import { Container, Form, Button } from 'react-bootstrap';
import { useState, useCallback, useRef, useEffect } from 'react';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import welcomeFrame  from './assets/frames/welcome_poster.png';
import logo from "./assets/logo/pbs_logo.png";


function generateDownload(canvas, crop) {
  if (!crop || !canvas) {
    return;
  }

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement('a');
      anchor.download = 'poster.png';
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    'image/png',
    1
  );
}

function App() {

  const [data, setData] = useState({
    name: '',
    place: '',
    sponser: ''
  })
  
  
  const [photo, setPhoto] = useState()

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: 'px', width: 200, aspect: 3 / 4 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onChangeData = (d) => {
    setData({
      ...data,
      [d.name]: d.value
    });

    
    
  }
  
  const onChangeOption = (d) => {
    
  }

 

  const onChangePhoto = (e) => {

    if(e.target.files && e.target.files[0]){
      setPhoto(URL.createObjectURL(e.target.files[0]))
    }
  }

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    // canvas.width = crop.width * pixelRatio * scaleX;
    // canvas.height = crop.height * pixelRatio * scaleY;

    canvas.width = 1200;
    canvas.height = 1200;

    // ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';
    let img = new Image();
    img.src = welcomeFrame;
    img.onload = () => {
      ctx.drawImage(img,0,0,canvas.width,canvas.width)
      ctx.fillStyle = '#fff'
      ctx.font = '700 26px Montserrat'
      ctx.fillText(data.name.toLocaleUpperCase(),  830, 690)
      ctx.font = '600 24px Montserrat'
      ctx.fillText(data.place.toLocaleUpperCase(),  830, 720)
      ctx.font = '600 24px Montserrat'
      ctx.fillStyle = '#0f3d54'
      ctx.fillText(data.sponser.toLocaleUpperCase(),  27, 1150)
    }
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      445,
      0,
      800,
      1066
    );
    
    
    
    
  }, [completedCrop]);
  

  return (
    <div className="App">
      <div className="Navbar-container">
        <img src={logo} width="70px"/>
          <h4>PRAVEEN BUSINESS SCHOOL</h4>
      </div>
      <Container fluid="md" className="form-container">
        <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Poster type</Form.Label>
            <Form.Select onChange={(e) => onChangeOption(e)}>
            <option>choose option..</option>
            <option value="1" selected>Welcome Poster</option>
          </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name"
            value={data.name} onChange={(e) => onChangeData(e.currentTarget)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Place</Form.Label>
            <Form.Control type="text" placeholder="Place" name="place" 
            value={data.place} onChange={(e) => onChangeData(e.target)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Sponser Name</Form.Label>
            <Form.Control type="text" placeholder="Sponser Name" name="sponser" 
            value={data.sponser} onChange={(e) => onChangeData(e.target)}/>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>choose photo</Form.Label>
            <Form.Control type="file" accept="image/png, image/jpeg"
            disabled={!data.name || !data.place || !data.sponser }
            onChange={(e)=> onChangePhoto(e)}/>
          </Form.Group>
          {
            photo &&
              <>
              <ReactCrop
            src={photo}
            keepSelection
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
            />
            <div className="frame-container">
              <canvas
                ref={previewCanvasRef} style={{
                  width: '100%',
                }}
              />
            </div>
           </>
          }
          
          <Button variant="primary" 
          disabled={!completedCrop?.width || !completedCrop?.height}
          onClick={()=> generateDownload(previewCanvasRef.current, completedCrop)}>Download</Button>
        </Form>
        
        
      </Container>
      
    </div>
  );
}

export default App;
