import React, { useState } from 'react'
import 'react-bootstrap';
import {useTransition, animated} from 'react-spring';

function Oferta(){
    const config = {molasses: { mass: 1, tension: 280, friction: 120 }};
    function Mount(itemToTransition) {
        const [show, set] = useState(false)
        const transitions = useTransition(show, {
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 1 },
          reverse: show,
          delay: 200,
          config: config.molasses,
          onRest: () => (show != true)?set(!show):show=true,
        })
        return transitions(
          (styles, item) => item && <animated.div style={styles}>{itemToTransition}</animated.div>
        )
      }

    return(
      <div className="row" id='Oferta'>
          <div className="col" id="offerTitle">
          <h3>Wizytówka</h3>
          </div>
              <div className="row">
                    <div className="col" id='offerImg'>
                        {Mount(<img src="/img/idcard.png" alt="imgOffer" srcset="" />)}
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