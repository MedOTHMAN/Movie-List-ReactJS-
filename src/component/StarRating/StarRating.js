import React from 'react'

const StarRating = ({rate, handleRate}) => {
    function stars(n){
        let star = [];
        for(let i=1;i<=5;i++){
            if(i<=n){
                star.push(<span key={i} onClick={() => handleRate(i)} style={{color:'#FFD700' , cursor:"pointer"}}>★</span>)
            }else{
                star.push(<span key={i} onClick={() => handleRate(i)} style={{color:"rgba(0,0,0,0.3)", cursor:"pointer"}}>★</span>)
            }
        }
        return star
    }

    return (
        <div style={{padding:"10px" ,fontSize: "20px"}}>
            {stars(rate)}
        </div>
    );
};

        StarRating.defaultProps = {
        rate: 1,
        handleRate: () => {},
        };

export default StarRating;
