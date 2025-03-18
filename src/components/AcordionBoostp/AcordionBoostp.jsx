'use client'
import Accordion from 'react-bootstrap/Accordion';
import './acordion.css'

function AcordionBoostp() {
  return (
    <Accordion defaultActiveKey="0" flush className='m-4
    '  >
      <Accordion.Item eventKey="0" >
        <Accordion.Header >
          <span className='w-full bg-gray-200 hover:bg-gray-300'>Futbol Infantil</span>
        </Accordion.Header>
        <Accordion.Body>
          <p className='text-yellow-700 text-sm'>
          Dias: Lunes y Miercoles <br/>Horarios: 18 a 19hs
          </p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Futbol Juveniles</Accordion.Header>
        <Accordion.Body>
        Dias: Lunes y Miercoles <br/>Horarios: 18 a 19hs
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Inicial Adultas</Accordion.Header>
        <Accordion.Body>
        Dias: Lunes y Miercoles <br/>Horarios: 18 a 19hs
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Experiencia Adultas</Accordion.Header>
        <Accordion.Body>
        Dias: Lunes y Miercoles <br/>Horarios: 18 a 19hs
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcordionBoostp;