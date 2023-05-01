import React from "react";
import restSampleImg from "../../images/restSample.jpg"
import styled from "styled-components";

const RsetBlock = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .box{
        width: 200px;
        height: 250px;
        background-size: cover;
        margin: 0 auto;
        margin-bottom: 30px;
        border-radius: 2rem;
        color : white;
        font-size: 2rem;
        cursor: pointer;
        p{
            text-align: center;
            display: none;
        }

        &:hover{

            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: inherit;
                border-radius: inherit;
                background-color: rgb(0,0,0,0.3);
            }
           p{
            display: block;
            font-weight: bold;
           }
        
        }
         
    }
    
`;
const RestBox = () => {
    const data = [
        { 
            img : restSampleImg,
          name : "레스토랑1",
          rating: 4.5
        },
        { img : restSampleImg,
            name : "레스토랑2",
            rating: 4.5
          },
        { img : restSampleImg,
            name : "레스토랑3",
            rating: 4.5
          },
        { img : restSampleImg,
            name : "레스토랑4",
            rating: 4.5
          },
          { img : restSampleImg,
            name : "레스토랑5",
            rating: 4.5
          },
          { img : restSampleImg,
            name : "레스토랑6",
            rating: 4.5
          }
    ];

    return(
        <RsetBlock>
        {data && data.map(rest=>(
            <div  key={rest.name} className="box" style={{backgroundImage: `url(${rest.img})`}}>
            <div>
            <p>{rest.name}</p> 
            <p>{rest.rating}</p> 
            </div>
            </div>

        ))};
        </RsetBlock>
    );
}

export default RestBox;