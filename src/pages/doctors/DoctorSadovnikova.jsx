import { Container } from 'react-bootstrap';
import DSimg1 from '../../assets/img/Sadovnikova_Elena_Gennadevna_vrach.jpeg';
import DSimg2 from '../../assets/img/YRWL6NLQAC01.jpg';
import DSimg3 from '../../assets/img/img023.jpg';
import DSimg4 from '../../assets/img/img024.jpg';
import DSimg5 from '../../assets/img/img025.jpg';
import DSimg6 from '../../assets/img/img026.jpg';
import DSimg7 from '../../assets/img/Сертификат_Садовникова_2019.jpg';

const DoctorSadovnikova = () => {
  return (
    <Container fluid id="doctor1">
      <div className="page-h1">
        <h1>Садовникова Елена Геннадьевна</h1>
      </div>
      <Container>
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img src={DSimg1} alt="img-sadovnikova " />
          </div>
          <div className="px-4">
            <h4 className="mb-4">
              Генеральный директор <br />
              Врач-педиатр <br />
              Аллерголог
            </h4>
            <p className="fw-bold">Высшее медицинское образование:</p>
            <p>Сибирский государственный медицинский университет ( 1992 ) "Педиатрия"</p>
            <p>
              Сибирский государственный медицинский университет ( 2002 ) Повышение квалификации
              "Педиатрия"
            </p>
            <p>
              Сибирский государственный медицинский университет ( 2007 ) Повышение квалификации
              "Аллергология и иммунология"
            </p>
            <p>
              Сибирский государственный медицинский университет ( 2011 ) Профессиональная
              переподготовка "Педиатрия"
            </p>
            <p className="fw-bold">Сертификаты:</p>
            <p>«Педиатрия» (2016)</p>
            <p>«Педиатрия» (2019)</p>
            <p className="fw-bold">Стаж работы в области медицины:</p>
            <p>с 1992 г.</p>
            <p className="fw-bold">Врач осуществляет обслуживание детей на дому.</p>
            <p className="fw-bold">Дополнительная информация: </p>
            <p>Проводит консультации по иммунопрофилактике (вакцинации)</p>​
          </div>
        </Container>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div class="col">
            <div class="card">
              <img src={DSimg2} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DSimg3} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DSimg4} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DSimg5} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DSimg6} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DSimg7} class="card-img-top" alt="foto" />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorSadovnikova;
