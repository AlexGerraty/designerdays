import { useQuery } from '@apollo/client';
import { QUERY_ALL_DESIGNERS } from '../utils/queries';
import { Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card;

const DesignersList = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_DESIGNERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
    <ul style={{ margin: "100px 10px 10px 200px"}}>
      <Row gutter={100}>
      
      {data.designers.map(designer => (
          <div key={designer.id}>
            <Col span={8}>
            <Card  bordered={true} style={{ width: 400 }} cover={<img alt="designer photo" src={designer.image}/>}>
            <Link to={`/designer/${designer.id}`}>
              <Meta
                    title={`${designer.firstname} ${designer.lastname}`}
                      description={`Price: $${designer.price} AUD Per Hour`}
            />      
            </Link>
            </Card>
            </Col>
            
          </div>
  ))}
  
  </Row>
  </ul>
  </div>
  );
};

export default DesignersList;