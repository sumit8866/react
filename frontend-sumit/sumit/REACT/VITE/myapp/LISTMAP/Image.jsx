import React from 'react';

export const altText = "Portrait of Elderly Nomad in Mhamid Desert"
export const imageSource = "https://images.pexels.com/photos/30133114/pexels-photo-30133114/free-photo-of-portrait-of-elderly-nomad-in-mhamid-desert-morocco.jpeg"

function Image() {
    return (
        // <div>
        //     <h1 className='headtext'>this is image component</h1>
        //     <img src="https://images.pexels.com/photos/30133114/pexels-photo-30133114/free-photo-of-portrait-of-elderly-nomad-in-mhamid-desert-morocco.jpeg"/>
        // </div>

        <div>
            <img src={imageSource} alt={altText} />
        </div>
    );
}

export default Image;