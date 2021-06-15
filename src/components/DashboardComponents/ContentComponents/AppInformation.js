import React from 'react';

const AppInformation = () => {
    return (
        <div className="AppInformation">
            <div className="app-info-header">Informacje o Notowaniach</div>
            <div className="quotes-info">
                <div className="quotes-group">Notowania Kursów Walutowych:</div>
                <div className="quotes-group source"><a href="https://www.nbp.pl/">Narodowy Bank Polski</a></div>
            </div>
            <div className="quotes-info">
                <div className="quotes-group">Notowania Kryptowalut:  </div>
                <div className="quotes-group source"><a href="https://www.coingecko.com">  www.coingecko.com</a></div>
            </div>
            <div className="quotes-info">
                <div className="quotes-group">Notowania Metali Szlachetnych:  </div>
                <div className="quotes-group source"><a href="https://www.cmegroup.com/company/comex.html">  COMEX</a></div>
            </div>
        </div>
    )
}

export default AppInformation;