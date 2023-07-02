import React from 'react';

const DetailsPage = ({singleData}) => {
console.log(singleData);


    return (
        <div>
        {singleData.title}
        </div>
    );
};

export default DetailsPage;