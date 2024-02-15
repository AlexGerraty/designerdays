import { useParams } from "react-router-dom";
import { QUERY_DESIGNERS } from "../utils/queries";
import { useQuery } from "@apollo/client";


    function Designer() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_DESIGNERS, { variables: { id } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :</div>;

  return (
    <div>
      <h1>{data.designer.firstname} {data.designer.lastname}</h1>
      <p>Price: ${data.designer.price} AUD Per Hour</p>
      <p>Expertise: {data.designer.expertise.name}</p>
      {/* Display other details of the clicked designer */}
    </div>
  );
}

export default Designer;
