import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import MessageDataService from '../services/messegeService';
import imgHome from '../assets/img/home.png';

const ModalCalling = () => {
  const initalModalWindow = {
    name: '',
    phone: '',
    address: '',
    doctor: '',
    description: '',
    consent: true,
  };
  const listDoctor = [
    { title: 'Врач' },
    { title: 'Педиатр' },
    { title: 'Отоларинголог' },
    { title: 'Окулист' },
  ];
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initalModalWindow);
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setData(initalModalWindow);
    setShow(false);
    setValidated(false);
  };

  const handleShow = () => {
    setMessage('');
    setSuccessful(false);
    setShow(true);
  };

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    setMessage('');
    setSuccessful(false);
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    MessageDataService.create(data)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        setSuccessful(true);
      })
      .catch((e) => {
        const resMessage =
          (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
        setSuccessful(false);
        // setMessage(resMessage);
      });

    setSuccessful(false);
    setValidated(true);
  };
  return (
    <div id="modalcalling">
      <Button className="btn-showmodal" onClick={handleShow}>
        <img src={imgHome} alt="home" className="img home" />
        Вызов врача на дом
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вызов врача</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {!successful && (
              <>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    id="name"
                    type="text"
                    placeholder="Имя*"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type="invalid">Введите имя!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    id="phone"
                    type="tel"
                    placeholder="Телефон*"
                    name="phone"
                    value={data.phone}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type="invalid">Введите ваш телефон!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    id="address"
                    type="text"
                    placeholder="Адрес*"
                    value={data.address}
                    onChange={onChange}
                    name="address"
                  />
                  <Form.Control.Feedback type="invalid">Введите адрес!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select id="doctor" value={data.doctor} onChange={onChange} name="doctor">
                    <option>Выберите врача...</option>
                    {listDoctor &&
                      listDoctor.map((item, index) => (
                        <option value={item.title} key={index}>
                          {' '}
                          {item.title}{' '}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <FloatingLabel className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    id="description"
                    value={data.description}
                    onChange={onChange}
                    name="description"
                  />
                </FloatingLabel>
                <Form.Group className="mb-3" id="consent">
                  <Form.Check
                    required
                    type="checkbox"
                    label="Я согласен(на) на обработку персональных данных."
                    name="consent"
                    id="consent"
                    checked={data.consent}
                    onChange={onChange}
                    feedback="Необходимо ваше согласие перед отправкой"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Отправить
                </Button>
              </>
            )}
            {message && (
              <div className="form-group mt-2">
                <div
                  className={successful ? 'alert alert-success' : 'alert alert-danger'}
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalCalling;
