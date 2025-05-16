// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default Example;





// import { useState, useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Overlay from 'react-bootstrap/Overlay';

// function Example() {
//   const [show, setShow] = useState(false);
//   const target = useRef(null);

//   return (
//     <>
//       <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
//         Click me to see
//       </Button>
//       <Overlay target={target.current} show={show} placement="right">
//         {({
//           placement: _placement,
//           arrowProps: _arrowProps,
//           show: _show,
//           popper: _popper,
//           hasDoneInitialMeasure: _hasDoneInitialMeasure,
//           ...props
//         }) => (
//           <div
//             {...props}
//             style={{
//               position: 'absolute',
//               backgroundColor: 'rgba(255, 100, 100, 0.85)',
//               padding: '2px 10px',
//               color: 'white',
//               borderRadius: 3,
//               ...props.style,
//             }}
//           >
//             Simple tooltip
//           </div>
//         )}
//       </Overlay>
//     </>
//   );
// }

// export default Example;






// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';

// function TriggerExample() {
//   const renderTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       Simple tooltip
//     </Tooltip>
//   );

//   return (
//     <OverlayTrigger
//       placement="right"
//       delay={{ show: 250, hide: 400 }}
//       overlay={renderTooltip}
//     >
//       <Button variant="success">Hover me to see</Button>
//     </OverlayTrigger>
//   );
// }

// export default TriggerExample;





// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// function TriggerRendererProp() {
//   return (
//     <OverlayTrigger
//       placement="bottom"
//       overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
//     >
//       {({ ref, ...triggerHandler }) => (
//         <Button
//           variant="light"
//           {...triggerHandler}
//           className="d-inline-flex align-items-center"
//         >
//           <Image
//             ref={ref}
//             roundedCircle
//             src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
//           />
//           <span className="ms-1">Hover to see</span>
//         </Button>
//       )}
//     </OverlayTrigger>
//   );
// }

// export default TriggerRendererProp;




// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';

// const Link = ({ id, children, title }) => (
//   <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
//     <a href="#">{children}</a>
//   </OverlayTrigger>
// );

// function TooltipInCopyExample() {
//   return (
//     <p>
//       Tight pants next level keffiyeh{' '}
//       <Link title="Default title" id="t-1">
//         you probably
//       </Link>{' '}
//       haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable
//       quinoa 8-bit american apparel{' '}
//       <Link id="t-2" title="Another one">
//         have a
//       </Link>{' '}
//       terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
//       thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
//       cleanse vegan chambray. A really ironic artisan{' '}
//       <Link title="Another one here too" id="t-3">
//         whatever keytar
//       </Link>
//       , scenester farm-to-table banksy Austin{' '}
//       <Link title="The last tip!" id="t-4">
//         twitter handle
//       </Link>{' '}
//       freegan cred raw denim single-origin coffee viral.
//     </p>
//   );
// }

// render(<TooltipInCopyExample />);





// import { useState, useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Overlay from 'react-bootstrap/Overlay';
// import Tooltip from 'react-bootstrap/Tooltip';

// function Example() {
//   const [show, setShow] = useState(false);
//   const target = useRef(null);

//   return (
//     <>
//       <Button ref={target} onClick={() => setShow(!show)}>
//         Click me!
//       </Button>
//       <Overlay target={target.current} show={show} placement="right">
//         {(props) => (
//           <Tooltip id="overlay-example" {...props}>
//             My Tooltip
//           </Tooltip>
//         )}
//       </Overlay>
//     </>
//   );
// }

// export default Example;


