
import Designer from '../Designer';

export default function DesignerList() {
    return (
        
                <div className="my-2">
                  <h2>Our Products:</h2>
                  {state.designer.length (
                    <div className="flex-row">
                        <Designer
                          key={designer._id}
                          _id={designer._id}
                          image={designer.image}
                          name={designer.name}
                          price={designer.price}
                        />
                      
                    </div>
                  )}
            
                </div>
              );
                  }
    