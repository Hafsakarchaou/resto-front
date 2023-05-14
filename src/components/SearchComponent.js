import React, { useState } from 'react';
import { Dropdown, FormControl, Modal, Button } from 'react-bootstrap';

const SearchComponent = (props) => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (props.handleOptionSelect) {
      props.handleOptionSelect(option);
    }
    setShow(false);
  };

  const filteredOptions = props.options.filter((option) =>
  option && option.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : '')
);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Dropdown className='drop'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" onClick={handleShow}>
          {selectedOption || props.buttonTitle}
        </Dropdown.Toggle>
      </Dropdown>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.popupTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle>{selectedOption || props.buttonTitle}</Dropdown.Toggle>
            <Dropdown.Menu onSelect={() => console.log(filteredOptions)} >
              <FormControl
                type="text"
                placeholder="Search"
                className="mx-3 my-2 w-auto"
                onChange={handleSearch}
                value={searchTerm}
              />
              
              {filteredOptions.map((option, index) => (
                <Dropdown.Item key={index} onClick={() => {props.handleOptionSelect(option); 
                handleOptionSelect(option)}}>{option}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => {
    setSelectedOption(props.buttonTitle);
    handleClose();
  }}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Choisir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchComponent;