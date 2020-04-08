import React, {useRef, useEffect} from "react"
import MetaData from "../components/metadata"

const PayPage = () => {
  const payPalBtnRef = useRef(null);
  useEffect(() => {
    if (payPalBtnRef && payPalBtnRef.current) {
      payPalBtnRef.current.submit();
    }
  }, [payPalBtnRef])
  return (
    <>
      <MetaData title="Pay" />
      <div id="pay-redirect-page">
        <div id="loading">
          <div className="content">
            <img alt='Building Brainiacs' src={require("../scss/images/logo-color.svg")} />
            <h2>One moment while we redirect you to the payment portal...</h2>
          </div>
        </div>
        <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" ref={payPalBtnRef}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="LQ3Z42UDV7K4N" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="PayPal" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </>
  );
}

export default PayPage
