import { BsFillPrinterFill, BsDownload } from 'react-icons/bs';
import logo from '../astra-logo.png';

const data = [
  {
    "name": "Clear Active Charcoal - 500ml",
    "category": "Shampoo",
    "price": 100000,
    "quantity": 10
  },
  {
    "name": "Lifebuoy Total 10 - 250ml",
    "category": "Soap",
    "price": 15000,
    "quantity": 20
  },
  {
    "name": "Sunsilk Black Shine - 340ml",
    "category": "Shampoo",
    "price": 55000,
    "quantity": 15
  },
  {
    "name": "Rinso Anti Noda - 900g",
    "category": "Detergent",
    "price": 32000,
    "quantity": 8
  },
  {
    "name": "Dove Intense Repair - 200ml",
    "category": "Conditioner",
    "price": 42000,
    "quantity": 12
  },
  {
    "name": "Pantene Pro-V Total Damage Care - 340ml",
    "category": "Shampoo",
    "price": 60000,
    "quantity": 25
  },
  {
    "name": "Colgate Total Whitening Toothpaste - 120g",
    "category": "Toothpaste",
    "price": 25000,
    "quantity": 30
  },
  {
    "name": "Gillette Fusion ProGlide Razor",
    "category": "Razor",
    "price": 85000,
    "quantity": 15
  },
  {
    "name": "Nivea Men Cool Kick Deo Roll-On - 50ml",
    "category": "Deodorant",
    "price": 35000,
    "quantity": 40
  },
  {
    "name": "Vaseline Intensive Care Lotion - 400ml",
    "category": "Lotion",
    "price": 75000,
    "quantity": 20
  },
  {
    "name": "Head & Shoulders Cool Menthol - 340ml",
    "category": "Shampoo",
    "price": 65000,
    "quantity": 18
  },
  {
    "name": "Dettol Anti-Bacterial Original Soap - 105g",
    "category": "Soap",
    "price": 12000,
    "quantity": 50
  },
  {
    "name": "Lux Soft Touch Body Wash - 240ml",
    "category": "Body Wash",
    "price": 50000,
    "quantity": 22
  },
  {
    "name": "Dove Beauty Moisture Face Wash - 100g",
    "category": "Face Wash",
    "price": 45000,
    "quantity": 28
  },
  {
    "name": "Rexona Women Shower Clean - 150ml",
    "category": "Deodorant",
    "price": 40000,
    "quantity": 35
  },
  {
    "name": "Pantene Pro-V Total Damage Care - 340ml",
    "category": "Shampoo",
    "price": 60000,
    "quantity": 25
  },
  {
    "name": "Colgate Total Whitening Toothpaste - 120g",
    "category": "Toothpaste",
    "price": 25000,
    "quantity": 30
  },
  {
    "name": "Gillette Fusion ProGlide Razor",
    "category": "Razor",
    "price": 85000,
    "quantity": 15
  },
  {
    "name": "Nivea Men Cool Kick Deo Roll-On - 50ml",
    "category": "Deodorant",
    "price": 35000,
    "quantity": 40
  },
  {
    "name": "Vaseline Intensive Care Lotion - 400ml",
    "category": "Lotion",
    "price": 75000,
    "quantity": 20
  },
  {
    "name": "Head & Shoulders Cool Menthol - 340ml",
    "category": "Shampoo",
    "price": 65000,
    "quantity": 18
  },
  {
    "name": "Dettol Anti-Bacterial Original Soap - 105g",
    "category": "Soap",
    "price": 12000,
    "quantity": 50
  },
  {
    "name": "Lux Soft Touch Body Wash - 240ml",
    "category": "Body Wash",
    "price": 50000,
    "quantity": 22
  },
  {
    "name": "Dove Beauty Moisture Face Wash - 100g",
    "category": "Face Wash",
    "price": 45000,
    "quantity": 28
  },
  {
    "name": "Rexona Women Shower Clean - 150ml",
    "category": "Deodorant",
    "price": 40000,
    "quantity": 35
  }
];

const PrintArea = () => {
  const handlePrint = () => window.print();

  const itemsSubtotal = items => {
    const perItemSubtotal = items.map(({price, quantity}) => price * quantity);
    return perItemSubtotal.reduce((total, subtotal) => total + subtotal, 0);
  };

  return (
    <div className='min-h-screen bg-black-1-opacity' id='print-area'>
      <div className='max-w-[850px] mx-auto bg-white p-5 sm:p-10  min-h-screen'>
        <div className='invoice-container'>
          {/* Invoice Header */}
          <div className='invoice-head'>
            <div className='py-4 grid grid-cols-2 items-center'>
              <div className='text-left'>
                <img className='h-4 sm:h-5' alt='Company Logo' src={logo} />
              </div>
              <div className='text-right'>
                <h3 className='font-semibold text-xl sm:text-2xl text-blue'>Invoice</h3>
              </div>
            </div>

            <hr />

            {/* Invoice Date & No */}
            <div className='py-4 grid grid-cols-1 sm:grid-cols-2'>
              <div className='invoice-head-middle-left text-left'>
                <p><span className='font-bold'>Date: </span>05/12/2020</p>
              </div>
              <div className='text-left sm:text-right'>
                <p><span className='font-bold'>Invoice No: </span>INV/200802/XYZ200167/00984</p>
              </div>
            </div>

            <hr />

            {/* Invoice Receiver & Sender */}
            <div className='py-4 grid grid-cols-1 sm:grid-cols-2'>
              <div>
                <ul className='space-y-0.5'>
                  <li className='font-bold'>Invoiced To:</li>
                  <li>Smith Rhodes</li>
                  <li>15 Hodges Mews, High Wycombe</li>
                  <li>HP12 3JL</li>
                  <li>United Kingdom</li>
                </ul>
              </div>
              <div className='my-3 sm:my-0'>
                <ul className='space-y-0.5 text-left sm:text-right'>
                  <li className='font-bold'>Pay To:</li>
                  <li>Koice Inc.</li>
                  <li>2705 N. Enterprise</li>
                  <li>Orange, CA 89438</li>
                  <li>contact@koiceinc.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Invoice Item List */}
          <div className='print:overflow-x-hidden overflow-x-scroll'>
            <div className='overflow-hidden min-w-[600px]'>
              <table className='border-collapse rounded w-full'>
                <thead>
                  <tr className='border-b border-black-1-opacity'>
                    <th className='p-3 font-bold'>Product</th>
                    <th className='p-3 font-bold'>Category</th>
                    <th className='p-3 font-bold'>Price</th>
                    <th className='p-3 font-bold'>QTY</th>
                    <th className='p-3 font-bold'>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ name, category, price, quantity }) => (
                    <tr className='border-b border-black-1-opacity'>
                      <td className='p-3'>{name}</td>
                      <td className='p-3 text-center'>{category}</td>
                      <td className='p-3 text-center'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(price)}
                      </td>
                      <td className='p-3 text-center'>{quantity}</td>
                      <td className='p-3 text-right'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(price * quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='invoice-body-bottom'>
                <div className='grid grid-cols-custom border-b border-black-1-opacity opacity-60'>
                  <div className='p-3 text-right font-semibold'>Sub Total:</div>
                  <div className='p-3 text-right'>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 2
                    }).format(itemsSubtotal(data))}
                  </div>
                </div>
                <div className='grid grid-cols-custom border-b border-black-1-opacity opacity-60'>
                  <div className='p-3 text-right font-semibold'>Tax (10%):</div>
                  <div className='p-3 text-right'>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 2
                    }).format(itemsSubtotal(data) * 0.1)}
                  </div>
                </div>
                <div className='grid grid-cols-custom text-sm'>
                  <div className='p-3 text-right font-bold'>Total:</div>
                  <div className='p-3 text-right font-medium'>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 2
                    }).format(itemsSubtotal(data) + (itemsSubtotal(data) * 0.1))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Notes & Method */}
          <div className='p-7 text-center'>
            <p className='text-xs'>
              <span className='font-bold text-center'>NOTE:&nbsp;</span>This is computer generated receipt and does not require physical signature.
            </p>
            <div className='mt-5 flex gap-4 justify-center'>
              <button
                type='button'
                className='px-3.5 py-1.5 text-dark border flex gap-1.5 items-center print:hidden'
                onClick={handlePrint}
              >
                <span>
                  <BsFillPrinterFill />
                </span>
                <span>Print</span>
              </button>
              <button
                type='button'
                className='px-3.5 py-1.5 text-dark border flex gap-1.5 items-center print:hidden'
              >
                <span>
                  <BsDownload />
                </span>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintArea;