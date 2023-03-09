import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    
        <div className='flex flex-col items-center justify-center'>
            <DocumentMagnifyingGlassIcon className='h-64 w-64 first-letter first-letter
            text-indigo-600/30'/>

        <h1 className='text-3xl text-center mt-2 text-black text-font font-bold mb-5'>
            Welcome to the Amazon Web Scraper
            </h1>

        <h2 className='text-lg text-center italic text-black/60'>This Webscraper was built by David Ramirez who is a
            Mathematical Sciences Major at Binghamton University
        </h2>

        <h3 className='text-center italic text-black/60'>
            LinkedIn: https://www.linkedin.com/in/david-ramirez-53271522b/ 
            </h3>
        </div>
        

  )
}

export default HomePage;