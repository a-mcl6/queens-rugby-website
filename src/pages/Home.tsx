/*

    Home Page
    'Queen's Rugby Club' as a title in the middle of the page
    '2022-01-08+Queens+v+Ballymena+1026' as a background image to the title (60% of viewport height)
    'Our sponsors' section below this

*/

import hero from '../assets/images/2022-01-08+Queens+v+Ballymena+1026.webp';
import the_doyen from '../assets/images/the_doyen.webp';
import croithli_irish_whiskey from '../assets/images/croithli.webp';
import relinea from '../assets/images/relinea.webp';
import tileworks from '../assets/images/tileworks.webp';
import derry_group from '../assets/images/derry_group.webp';
import mcquillan from '../assets/images/mcquillan.webp';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section - use an <img> so the full image displays without cropping */}
      <section className="w-full relative">
        {/* image determines height and preserves full photo */}
        <img src={hero} alt="Queens Rugby" className="w-full h-auto block" />

        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--backgroundOverlayColor)', opacity: 0.59 }}
          aria-hidden="true"
        />

        {/* centered title over the image */}
        <div className="absolute inset-0 flex items-center flex-col justify-center pointer-events-none">
          <h1 className="text-white text-6xl md:text-8xl font-bold uppercase p-4 rounded pointer-events-auto">
            Queen's Rugby Club
          </h1>
          <h1 className='text-white text-4xl md:text-4xl p-4 rounded pointer-events-auto cabin-heading'>
            Est. 1869
            </h1>
            <h1 className='text-white md:text-4xl cabin-body p-4 rounded pointer-events-auto cabin-heading'>
            Home of the oldest rugby club in Ulster and the third oldest in Ireland
            </h1>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="w-full max-w-7xl px-4 py-12 flex flex-col items-center">
        <h2 className="w-full text-center md:text-center text-4xl font-semibold mb-6 uppercase text-white">Our Sponsors</h2>
        <div className="w-full mb-10 flex justify-center">
          <div className="w-full max-w-md h-28 md:h-40 overflow-hidden">
            <img src={mcquillan} alt="McQuillan" className="w-full h-full object-cover object-center" />
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16">
          {/* Example Sponsor Logos */}
          <img src={the_doyen} alt="The Doyen" className="w-full h-auto text-white" />
          <img src={croithli_irish_whiskey} alt="Croithli Irish Whiskey" className="w-full h-auto text-white" />
          <img src={relinea} alt="Relinea" className="w-full h-auto text-white" />
          <img src={tileworks} alt="Tileworks" className="w-full h-auto text-white" />
          <img src={derry_group} alt="Derry Group" className="w-full h-auto text-white" />
        </div>
        <div className='text-white text-2xl uppercase font-semibold md:text-center'>
            <h2>A massive thank you to all our sponsors!</h2>
            <h3 className='text-xl normal-case'>Check them out - click on the sponsor to be taken to their page.</h3>
            </div>
      </section>
    </div>
  );
}
