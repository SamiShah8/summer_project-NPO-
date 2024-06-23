 import KhaltiCheckout from 'khalti-checkout-web';

const KhaltiPayment = () => {
  const verifyPayment = async (payload : any) => {
    try {
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Payment verification response:', data);
    } catch (error) {
      console.error('Error verifying payment:', error);
    }
  };

  const paymentButtonClick = () => {
    let config = {
        publicKey: 'test_public_key_5e5487e7791e4f5cba26493fca37a68d',
        productIdentity: '1234567890',
        productName: 'Drogon',
        productUrl: 'http://gameofthrones.com/buy/Dragons',
        eventHandler: {
          onSuccess(payload : any) {
             
            verifyPayment(payload);
          },
          onError(error : any) {
            console.error(error);
          },
          onClose() {
            console.log('widget is closing');
          }
        },
        paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
      };
  
    let checkout = new KhaltiCheckout(config);
    checkout.show({ amount: 1000 });
  }
  return (
    <div>
      <button id="payment-button" className="btn btn-primary mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={paymentButtonClick}>Pay with Khalti</button>
    </div>
  );
};

export default KhaltiPayment;
