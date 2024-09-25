import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return <div className='py-8 text-white'>
            {!isLoaded && (
            <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin text-zinc-500" size={20} />
                <span className="ml-2 text-zinc-500">Loading map...</span>
            </div>
            )}
            <div className="google-map-code">
                <iframe
                    src="https://maps.google.com/maps?q=Oudekerksplein+48&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    height="250"
                    className='w-full sm:w-4/5 m-auto'
                    aria-hidden="false"
                    allowFullScreen={true}
                    title="google map"
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
    </div> 
}