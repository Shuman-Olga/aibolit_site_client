import { Container } from 'react-bootstrap';
import DPimg1 from '../../assets/img/Petuhova_Olga_Viktorovna_vrach.jpg';
import DPimg2 from '../../assets/img/Диплом Петухова О.В..jpg';
import DPimg3 from '../../assets/img/Петухова О.В. 1.jpg';
import DPimg4 from '../../assets/img/Петухова О.В. 2.jpg';
import DPimg5 from '../../assets/img/Петухова О.В. 3.jpg';
import DPimg6 from '../../assets/img/Диплом Петухова О.В. 2013.jpg';
import DPimg7 from '../../assets/img/Удостоверение Петухова О.В 2014.jpg';
import DPimg8 from '../../assets/img/Сертификат Петухофв О.В. 2019.jpg';
const DoctorPetuhova = () => {
  return (
    <Container fluid id="doctor2">
      <div className="page-h1">
        <h1>Петухова Ольга Викторовна</h1>
      </div>
      <Container>
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img src={DPimg1} alt="img-petuhova " />
          </div>
          <div className="px-4">
            <h4 className="mb-4">
              Главный врач
              <br /> Врач-педиатр <br />
              Гастроэнтеролог
            </h4>
            <p className="fw-bold">Высшее медицинское образование:</p>
            <p>Сибирский государственный медицинский университет ( 1997 ) "Педиатрия"</p>
            <p>
              Сибирский государственный медицинский университет ( 2013 ) Профессиональная
              переподготовка "Организация здравоохранения и общественное здоровье"
            </p>
            <p>
              Сибирский государственный медицинский университет ( 2014 ) Повышение квалификации
              "Педиатрия "
            </p>
            <p className="fw-bold">Сертификаты:</p>
            <p>«Педиатрия» ( 1998 )</p>
            <p>«Педиатрия» (2013)</p>
            <p>«Педиатрия» (2019)</p>
            <p className="fw-bold">Стаж работы в области медицины:</p>
            <p>с 1997 г.</p>
            <p className="fw-bold">Врач осуществляет обслуживание детей на дому.</p>
            <p className="fw-bold">Дополнительная информация: </p>
            <p>Проводит консультации по иммунопрофилактике (вакцинации)</p>​
          </div>
        </Container>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div class="col">
            <div class="card">
              <img src={DPimg2} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DPimg3} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DPimg4} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DPimg5} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DPimg6} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DPimg7} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DPimg8} class="card-img-top" alt="foto" />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorPetuhova;
