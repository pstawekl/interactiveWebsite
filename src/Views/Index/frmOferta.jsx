import 'react-bootstrap';

function Oferta(){
    return(
      <div className="row" id='Oferta'>
          <div className="col" id="offerTitle">
          <h3>Wizytówka</h3>
          </div>
              <div className="row">
                    <div className="col" id='offerImg'>
                        <img src="/img/idcard.png" alt="imgOffer" srcset="" />
                    </div>
                    <div className="col-5" id='offerDescription'>
                        <span>Strona internetowa type One Page Website, której zadaniem jest przedstawienie najistotniejszych informacji na temat firmy,
                         a także krótkiej prezentacji firmy. 
                         Zawiera również zakładkę kontakt gdzie znajdą się wszystkie informację potrzebne do skontaktowania się z firmą oraz, 
                         w zależności od wymagań klienta, formularz mailowy.</span>
                    </div>
              </div>
      </div>  
    );
}

export default Oferta;