import { Container } from 'react-bootstrap';
import DOimg1 from '../../assets/img/Ostrouhova_Natalya_Petrovna_vrach.jpeg';
import DOimg2 from '../../assets/img/img029.jpg';
import DOimg3 from '../../assets/img/img030.jpg';
import DOimg4 from '../../assets/img/Без имени-1.jpg';
import DOimg5 from '../../assets/img/Сертификат1.jpg';
import DOimg6 from '../../assets/img/Удостоверение Остроухова Н.П. 2017.jpg';

const DoctorOstrouhova = () => {
  return (
    <Container fluid id="doctor4">
      <div className="page-h1">
        <h1>Остроухова Наталья Петровна</h1>
      </div>
      <Container>
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img src={DOimg1} alt="img-ostrouhova " />
          </div>
          <div className="px-4 ">
            <h4 className="mb-4">Врач - педиатр</h4>
            <p className="fw-bold">Высшее медицинское образование:</p>
            <p>Сибирский государственный медицинский университет ( 1993 ) "Педиатрия"</p>
            <p>
              Сибирский государственный медицинский университет ( 2012 ) Повышение квалификации
              "Педиатрия"
            </p>
            <p className="fw-bold">Сертификаты:</p>
            <p>«Педиатрия» ( 2003 )</p>
            <p>«Педиатрия» (2017)</p>
            <p className="fw-bold">Стаж работы в области медицины:</p>
            <p>с 1993 г.</p>
            <p className="fw-bold">Врач осуществляет обслуживание детей на дому.</p>
            <p className="fw-bold">Дополнительная информация: </p>
            <p>Проводит консультации по иммунопрофилактике (вакцинации)</p>​
          </div>
        </Container>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div class="col">
            <div class="card">
              <img src={DOimg2} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DOimg3} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DOimg4} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DOimg5} class="card-img-top" alt="foto" />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={DOimg6} class="card-img-top" alt="foto" />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorOstrouhova;
