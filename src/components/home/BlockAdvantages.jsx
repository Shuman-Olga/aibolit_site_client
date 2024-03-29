import BAimg1 from "../../assets//img/Aibolit_mobilnaya_svyaz_s_vrachom.png";
import BAimg2 from "../../assets//img/Aibolit_obslujivanie_na_domu.png";
import BAimg3 from "../../assets//img/Aibolit_kompleksnoe_obslujivanie.png";
import BAimg4 from "../../assets//img/Aibolit_rabota_2001.png";
import BAimg5 from "../../assets//img/Aibolit_individualnii_podhod.png";

const BlockAdvantages = () => {
  return (
    <div id="blockadvantages" className="container text-center py-5">
      <h2 className="text-uppercase">Приемущество для родителей</h2>
      <hr className="w-50 "></hr>
      <div className="row row-cols-1 row-cols-md-5 g-5 mt-4">
        <div className="col">
          <div className="card  h-100">
            <img
              src={BAimg1}
              className="card-img-top"
              alt="aibolit"
              title="Мобильная связь с доверенным педиатро"
            />
            <div className="card-body">
              <p className="card-text">
                Мобильная связь с доверенным педиатром​
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  h-100">
            <img
              src={BAimg4}
              className="card-img-top"
              alt="aibolit"
              title="Работаем с 2001 года"
            />
            <div className="card-body">
              <p className="card-text">Работаем с 2001 года.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  h-100">
            <img
              src={BAimg2}
              className="card-img-top"
              alt="aibolit_mobilnaya_svyaz_s_vrachom"
              title="Максимальная направленность обслуживания на дому"
            />
            <div className="card-body">
              <p className="card-text">
                Максимальная направленность обслуживания на дому
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  h-100">
            <img
              src={BAimg3}
              className="card-img-top"
              alt="aibolit"
              title=">Полный спектр профилактического наблюдения"
            />
            <div className="card-body">
              <p className="card-text">
                Полный спектр профилактического наблюдения
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card  h-100">
            <img
              src={BAimg5}
              className="card-img-top"
              alt="aibolit"
              title="Индивидуальный подход"
            />
            <div className="card-body">
              <p className="card-text">Индивидуальный подход</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockAdvantages;
