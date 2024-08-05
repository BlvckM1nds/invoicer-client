import { Fragment } from 'react';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Fragment>
      <main className='m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow-md'>
        <header className='flex flex-col items-center justify-center mb-5'>
          <div>
            <h2 className='font-bold uppercase tracking-wide text-4xl'>Invoicer</h2>
          </div>

          <div>
            <ul className='flex items-center justify-between flex-wrap'>
              <li>
                <button
                  className='btn btn-print'
                  onClick={handlePrint}
                >
                  Print
                </button>
              </li>
              <li>
                <button
                  className='btn btn-download'
                >
                  Download
                </button>
              </li>
              <li>
                <button
                  className='btn btn-send'
                >
                  Send
                </button>
              </li>
            </ul>
          </div>
        </header>

        <section className='flex flex-col items-end justify-end'>
          <h2>Nama Perusahaan</h2>
          <p>Alamat Perusahaan</p>
        </section>

        <section>
          <h2>Nama Pelanggan</h2>
          <p>Alamat Pelanggan</p>
        </section>

        <aside>
          <ul>
            <li>Nomor Invoice: </li>
            <li>Tanggal Terbit: </li>
            <li>Jatuh Tempo: </li>
          </ul>
        </aside>

        <section>
          <p>Catatan kepada klien: </p>
        </section>

        <footer>
          <ul>
            <li>Nama Perusahaan</li>
            <li>Email Perusahaan</li>
            <li>Nomor Telepon Perusahaan</li>
            <li>Bank</li>
            <li>Pemegang Rekening</li>
            <li>Nomor Rekening</li>
            <li>Situs Web</li>
          </ul>
        </footer>
      </main>
    </Fragment>
  );
};

export default App;
