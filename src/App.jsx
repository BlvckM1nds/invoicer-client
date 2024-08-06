import { Fragment } from 'react';
import logo from './astra-logo.png';
import './index.css';

import { BsFillPrinterFill, BsDownload } from 'react-icons/bs';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Fragment>
      <main className='min-h-screen bg-black-1-opacity' id='print-area'>
        <div className='max-w-[850px] mx-auto bg-white p-10  min-h-screen'>
          <div className='invoice-container'>
            <div className='invoice-head'>
              <div className='py-4 grid grid-cols-1 sm:grid-cols-2 items-center'>
                <div className='text-left'>
                  <img className='h-6' alt='Company Logo' src={logo} />
                </div>
                <div className='text-right'>
                  <h3 className='font-semibold text-3xl text-blue'>Invoice</h3>
                </div>
              </div>
              <hr />
              <div className='py-4 grid grid-cols-1 sm:grid-cols-2'>
                <div className='invoice-head-middle-left text-start'>
                  <p><span className='font-bold'>Date: </span>05/12/2020</p>
                </div>
                <div className='invoice-head-middle-right text-right'>
                  <p><span className='font-bold'>Invoice No: </span>INV/200802/XYZ200167/00984</p>
                </div>
              </div>
              <hr />
              <div className='py-4 grid grid-cols-1 sm:grid-cols-2'>
                <div className='invoice-head-bottom-left'>
                  <ul className='space-y-0.5'>
                    <li className='font-bold'>Invoiced To:</li>
                    <li>Smith Rhodes</li>
                    <li>15 Hodges Mews, High Wycombe</li>
                    <li>HP12 3JL</li>
                    <li>United Kingdom</li>
                  </ul>
                </div>
                <div className='invoice-head-bottom-right'>
                  <ul className='space-y-0.5 text-right'>
                    <li className='font-bold'>Pay To:</li>
                    <li>Koice Inc.</li>
                    <li>2705 N. Enterprise</li>
                    <li>Orange, CA 89438</li>
                    <li>contact@koiceinc.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='overflow-x-scroll'>
              <div className='border rounded overflow-hidden min-w-[600px]'>
                <table className='border-collapse rounded w-full'>
                  <thead className='bg-black-2-opacity'>
                    <tr className='border-b border-black-1-opacity'>
                      <th className='p-3 font-bold'>Service</th>
                      <th className='p-3 font-bold'>Description</th>
                      <th className='p-3 font-bold'>Rate</th>
                      <th className='p-3 font-bold'>QTY</th>
                      <th className='p-3 font-bold'>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-black-1-opacity'>
                      <td className='p-3'>Design</td>
                      <td className='p-3'>Creating a website design</td>
                      <td className='p-3'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(100000)}
                      </td>
                      <td className='p-3'>10</td>
                      <td className='p-3 text-right'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(100000)}
                      </td>
                    </tr>
                    <tr className='border-b border-black-1-opacity'>
                      <td className='p-3'>Development</td>
                      <td className='p-3'>Website Development</td>
                      <td className='p-3'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(100000)}
                      </td>
                      <td className='p-3'>10</td>
                      <td className='p-3 text-right'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(100000)}
                      </td>
                    </tr>
                    <tr className='border-b border-black-1-opacity'>
                      <td className='p-3'>SEO</td>
                      <td className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni fugit debitis doloremque, perferendis sint.</td>
                      <td className='p-3'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(100000)}
                      </td>
                      <td className='p-3'>10</td>
                      <td className='p-3 text-right'>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 2
                        }).format(100000)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='invoice-body-bottom'>
                  <div className='grid grid-cols-custom-80-20 border-b border-black-1-opacity'>
                    <div className='bg-black-2-opacity p-3 text-right font-bold'>Sub Total:</div>
                    <div className='bg-black-2-opacity p-3 text-right'>
                      {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumFractionDigits: 2
                      }).format(7810900)}
                    </div>
                  </div>
                  <div className='grid grid-cols-custom-80-20 border-b border-black-1-opacity'>
                    <div className='bg-black-2-opacity p-3 text-right font-bold'>Tax:</div>
                    <div className='bg-black-2-opacity p-3 text-right'>
                      {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumFractionDigits: 2
                      }).format(781090)}
                    </div>
                  </div>
                  <div className='grid grid-cols-custom-80-20'>
                    <div className='bg-black-2-opacity p-3 text-right font-bold'>Total:</div>
                    <div className='bg-black-2-opacity p-3 text-right'>
                      {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumFractionDigits: 2
                      }).format(8947000)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-7 text-center'>
              <p className='text-xs'>
                <span className='font-bold text-center'>NOTE:&nbsp;</span>This is computer generated receipt and does not require physical signature.
              </p>
              <div className='mt-5 flex gap-4 justify-center'>
                <button type='button' className='px-3.5 py-1.5 text-dark border flex gap-1.5 items-center' onClick={handlePrint}>
                  <span>
                    <BsFillPrinterFill />
                  </span>
                  <span>Print</span>
                </button>
                <button type='button' className='px-3.5 py-1.5 text-dark border flex gap-1.5 items-center'>
                  <span>
                    <BsDownload />
                  </span>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
